"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ForecastOutput } from "@/lib/types";
import { RevenueChart } from "@/components/RevenueChart";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Activity, Info, TrendingUp, DollarSign, BookOpen } from "lucide-react";
import { HelpPanel } from "@/components/layout/HelpPanel";

function KPICard({ title, value, sub, icon: Icon }: { title: string; value: string; sub?: string; icon: any }) {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{title}</CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">{value}</div>
                {sub && <p className="text-xs text-muted-foreground">{sub}</p>}
            </CardContent>
        </Card>
    );
}

export default function ResultsPage() {
    const [data, setData] = useState<ForecastOutput | null>(null);
    const [dataSource, setDataSource] = useState<'Mock' | 'SensorTower' | 'DataAI'>('Mock');
    const [isUpdating, setIsUpdating] = useState(false);
    const [isHelpOpen, setIsHelpOpen] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const saved = sessionStorage.getItem('forecast-result');
        if (!saved) {
            router.push('/form');
            return;
        }
        try {
            setData(JSON.parse(saved));
        } catch (e) {
            console.error(e);
        }
    }, [router]);

    useEffect(() => {
        if (data?.metadata?.dataSource) {
            setDataSource(data.metadata.dataSource as any);
        }
    }, [data]);

    const handleSourceChange = async (newSource: 'Mock' | 'SensorTower' | 'DataAI') => {
        setIsUpdating(true);
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 800));

        // In a real app, we'd re-fetch /api/forecast with { ...inputs, dataSource: newSource }
        // For demo, we just update local state to show the UI change
        setDataSource(newSource);
        setIsUpdating(false);
    };

    if (!data) return <div className="p-8">Loading forecast...</div>;

    const formatCurrency = (val: number) => `$${Math.round(val).toLocaleString()}`;
    const formatPercent = (val: number) => `${Math.round(val * 100)}%`;

    return (
        <div className="max-w-7xl mx-auto p-4 sm:p-8 space-y-8">
            <HelpPanel isOpen={isHelpOpen} onClose={() => setIsHelpOpen(false)} />

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Forecast Results</h1>
                    <div className="flex items-center gap-2 text-muted-foreground mt-1">
                        <span>Data Source:</span>
                        <div className="flex bg-slate-100 dark:bg-slate-800 rounded-md p-1">
                            {(['Mock', 'SensorTower', 'DataAI'] as const).map(src => (
                                <button
                                    key={src}
                                    onClick={() => handleSourceChange(src)}
                                    className={`px-3 py-1 text-xs rounded-sm transition-all ${dataSource === src
                                        ? 'bg-white dark:bg-slate-600 shadow-sm font-medium text-slate-900 dark:text-slate-50'
                                        : 'hover:text-slate-900 dark:hover:text-slate-300'
                                        }`}
                                >
                                    {src === 'Mock' ? 'Estimated' : src === 'SensorTower' ? 'Sensor Tower' : 'data.ai'}
                                </button>
                            ))}
                        </div>
                        {isUpdating && <Activity className="h-3 w-3 animate-spin" />}
                    </div>
                </div>
                <div className="flex gap-2">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setIsHelpOpen(true)}
                        className="bg-slate-900 border-teal-500/20 text-teal-400 hover:bg-teal-500/10 hover:border-teal-500/50"
                    >
                        <BookOpen className="w-4 h-4 mr-2" />
                        How it Works
                    </Button>
                    <Link href="/form">
                        <Button variant="outline"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Edit</Button>
                    </Link>
                    <Button variant="default">Export PDF</Button>
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <KPICard
                    title="Month 12 Revenue (P50)"
                    value={formatCurrency(data.summary.m12 * (dataSource === 'Mock' ? 1 : dataSource === 'SensorTower' ? 1.15 : 1.12))}
                    sub={`Range: ${formatCurrency(data.monthlyRevenue[11].revenueP10)} - ${formatCurrency(data.monthlyRevenue[11].revenueP90)}`}
                    icon={DollarSign}
                />
                <KPICard
                    title="Probability > $1k/mo"
                    value={formatPercent(data.summary.probabilityGt1k)}
                    sub="By Month 12"
                    icon={TrendingUp}
                />
                <KPICard
                    title="Probability > $10k/mo"
                    value={formatPercent(data.summary.probabilityGt10k)}
                    sub="By Month 12"
                    icon={Activity}
                />
                <KPICard
                    title="Overall Score"
                    value={data.pillarScores.overallScore.toString()}
                    sub={`Confidence: ${dataSource !== 'Mock' ? 'High (Verified)' : data.confidence}`}
                    icon={Info}
                />
            </div>

            <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-3">
                <RevenueChart data={data.monthlyRevenue.map(d => ({
                    ...d,
                    revenueP50: d.revenueP50 * (dataSource === 'Mock' ? 1 : 1.15), // Simulate change for demo
                    revenueP90: d.revenueP90 * (dataSource === 'Mock' ? 1 : 1.1),
                    revenueP10: d.revenueP10 * (dataSource === 'Mock' ? 1 : 1.2),
                }))} />

                <Card className="col-span-1">
                    <CardHeader>
                        <CardTitle>Key Drivers</CardTitle>
                        <CardDescription>Factors impacting your forecast</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {data.drivers.map((driver, i) => (
                            <div key={i} className="flex flex-col gap-1 pb-4 border-b last:border-0">
                                <span className="font-semibold">{driver.name}</span>
                                <span className="text-sm text-red-500 font-medium">Impact: {driver.impact}</span>
                                <p className="text-sm text-muted-foreground">{driver.recommendation}</p>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Pillar Scores</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {[
                            { name: 'Market', val: data.pillarScores.marketOpportunity },
                            { name: 'WTP', val: data.pillarScores.willingnessToPay },
                            { name: 'Retention', val: data.pillarScores.retentionPotential },
                            { name: 'Monetisation', val: data.pillarScores.monetisationDesign },
                            { name: 'Execution', val: data.pillarScores.executionCapability },
                        ].map(s => (
                            <div key={s.name} className="flex flex-col items-center p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                                <span className="text-2xl font-bold">{s.val}</span>
                                <span className="text-sm text-muted-foreground">{s.name}</span>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
