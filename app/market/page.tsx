"use client";

import React from "react";
import { Timeline } from "@/components/layout/Timeline";
import {
    Users,
    Zap,
    ArrowRight,
    Search,
    Filter,
    TrendingUp,
    Target,
    BarChart3,
    AlertCircle,
    Activity,
    Compass
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HelpPanel } from "@/components/layout/HelpPanel";
import { cn } from "@/lib/utils";
import { BookOpen } from "lucide-react";

const MOCK_MARKET_DATA = {
    reach: { value: "42.5M", subtext: "Total Addressable Market", trend: "+2.4% annually" },
    saturation: { value: "Moderate", subtext: "Competition Index", color: "text-orange-400" },
    revenue: { value: "$4.12", subtext: "Average Monthly ARPU", trend: "High LTV Potential" },
    velocity: { value: "85/100", subtext: "Problem Trend Velocity", color: "text-teal-400" },
};

export default function MarketDataPage() {
    const [isHelpOpen, setIsHelpOpen] = React.useState(false);

    return (
        <div className="p-8 max-w-7xl mx-auto pb-20">
            <HelpPanel isOpen={isHelpOpen} onClose={() => setIsHelpOpen(false)} />

            {/* Header Section */}
            <header className="flex justify-between items-start mb-10">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">Market Intelligence</h1>
                    <p className="text-slate-400">Phase 2: Filtering personas through real-world market data indices.</p>
                </div>
                <div className="flex gap-3">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setIsHelpOpen(true)}
                        className="bg-slate-900 border-teal-500/20 text-teal-400 hover:bg-teal-500/10 hover:border-teal-500/50"
                    >
                        <BookOpen className="w-4 h-4 mr-2" />
                        How it Works
                    </Button>
                    <Button variant="outline" size="sm" className="bg-slate-900 border-slate-800 text-slate-300">
                        Compare Personas
                    </Button>
                    <Button size="sm" className="bg-teal-600 hover:bg-teal-500 text-white shadow-lg shadow-teal-500/20">
                        <BarChart3 className="w-4 h-4 mr-2" />
                        Refresh Indices
                    </Button>
                </div>
            </header>

            {/* Strategic Intelligence Header */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
                {[
                    { label: "Global Reach", value: MOCK_MARKET_DATA.reach.value, subtext: MOCK_MARKET_DATA.reach.subtext, icon: Users, color: "text-blue-400" },
                    { label: "Saturation Status", value: MOCK_MARKET_DATA.saturation.value, subtext: MOCK_MARKET_DATA.saturation.subtext, icon: Target, color: MOCK_MARKET_DATA.saturation.color },
                    { label: "Rev Benchmarks", value: MOCK_MARKET_DATA.revenue.value, subtext: MOCK_MARKET_DATA.revenue.subtext, icon: TrendingUp, color: "text-teal-400" },
                    { label: "Trend Velocity", value: MOCK_MARKET_DATA.velocity.value, subtext: MOCK_MARKET_DATA.velocity.subtext, icon: Activity, color: MOCK_MARKET_DATA.velocity.color },
                ].map((stat, i) => (
                    <Card key={i} className="bg-slate-900/40 border-slate-800 relative group overflow-hidden">
                        <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                            <stat.icon className="w-12 h-12" />
                        </div>
                        <CardContent className="p-6">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">{stat.label}</p>
                            <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                            <p className="text-xs text-slate-400 font-medium">{stat.subtext}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Timeline Stepper */}
            <Timeline currentStep={2} />

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-12">

                {/* Left: Deep Analysis */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Gap Analysis Card */}
                    <Card className="bg-slate-900/40 border-slate-800 overflow-hidden">
                        <CardHeader className="border-b border-slate-800/50 bg-slate-900/20">
                            <div className="flex justify-between items-center">
                                <CardTitle className="text-sm font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                                    <Compass className="w-4 h-4 text-teal-400" />
                                    Gap Analysis (Market Whitespace)
                                </CardTitle>
                                <span className="text-[10px] font-bold text-teal-400 bg-teal-400/10 px-2 py-1 rounded">BLUE OCEAN DETECTED</span>
                            </div>
                        </CardHeader>
                        <CardContent className="p-8">
                            <div className="space-y-6">
                                <div className="p-4 rounded-xl bg-teal-500/5 border border-teal-500/10">
                                    <h4 className="text-teal-400 font-bold text-sm mb-2 flex items-center gap-2">
                                        <AlertCircle className="w-4 h-4" />
                                        Primary Friction Point
                                    </h4>
                                    <p className="text-sm text-slate-300 leading-relaxed italic">
                                        "Existing solutions for **Project Managers** focus on task completion, but overlook **resource burnout prediction**. There is a 72% gap in data-driven preventative alerts."
                                    </p>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <p className="text-xs font-bold text-slate-500 uppercase tracking-tighter">Negative Sentiment Analysis</p>
                                        <ul className="space-y-2">
                                            {["Too complex setup", "Lacks mobile integration", "Subscription too expensive"].map((item, i) => (
                                                <li key={i} className="text-xs text-slate-400 flex items-center gap-2">
                                                    <div className="w-1 h-1 rounded-full bg-orange-400" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="space-y-2">
                                        <p className="text-xs font-bold text-slate-500 uppercase tracking-tighter">Winning Opportunity</p>
                                        <ul className="space-y-2">
                                            {["Automated Fatigue Scoring", "Zero-friction entry", "Freemium pricing model"].map((item, i) => (
                                                <li key={i} className="text-xs text-slate-400 flex items-center gap-2">
                                                    <div className="w-1 h-1 rounded-full bg-teal-400" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Side-by-Side Scoring */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card className="bg-slate-900/40 border-slate-800">
                            <CardHeader className="pb-2">
                                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Competition Density</p>
                            </CardHeader>
                            <CardContent className="p-6">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="flex-1 h-3 bg-slate-800 rounded-full overflow-hidden">
                                        <div className="h-full bg-orange-500 w-[65%]" />
                                    </div>
                                    <span className="text-xs font-bold text-white">65%</span>
                                </div>
                                <p className="text-xs text-slate-400">Crowded market with 12 dominant incumbents. Success requires a 10x feature advantage.</p>
                            </CardContent>
                        </Card>
                        <Card className="bg-slate-900/40 border-slate-800">
                            <CardHeader className="pb-2">
                                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Trend Velocity</p>
                            </CardHeader>
                            <CardContent className="p-6">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="flex-1 h-3 bg-slate-800 rounded-full overflow-hidden">
                                        <div className="h-full bg-teal-500 w-[85%]" />
                                    </div>
                                    <span className="text-xs font-bold text-white">85%</span>
                                </div>
                                <p className="text-xs text-slate-400">Problem intensity growing at 12% MoM. Timing is optimal for entry.</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Right: Governance Actions */}
                <div className="space-y-8">
                    <Card className="bg-teal-500/5 border-teal-500/20 glassmorphism overflow-hidden relative">
                        <div className="absolute top-0 left-0 w-1 h-full bg-teal-500" />
                        <CardContent className="p-6">
                            <h3 className="text-teal-400 font-bold text-sm mb-4 flex items-center gap-2">
                                <Target className="w-4 h-4" /> Resonance Forecast
                            </h3>
                            <div className="flex items-baseline gap-2 mb-6">
                                <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white to-slate-400">92</span>
                                <span className="text-xs text-slate-500 font-bold uppercase tracking-tighter">Governance Score</span>
                            </div>
                            <p className="text-xs text-slate-400 leading-relaxed mb-6">
                                This persona exhibits **High Resonance**. The combined metrics of reach, low competitive friction, and high trend velocity make this a Tier-1 target for your build.
                            </p>
                            <Button className="w-full bg-teal-600 hover:bg-teal-500 text-white font-bold h-11 shadow-[0_4px_20px_rgba(20,184,166,0.3)]">
                                Approve Persona for Ideation
                            </Button>
                        </CardContent>
                    </Card>

                    <Card className="bg-slate-900/40 border-slate-800">
                        <CardContent className="p-6">
                            <h3 className="text-white font-bold text-sm mb-4">Market Index Benchmarks</h3>
                            <div className="space-y-4">
                                {[
                                    { name: "Monthly Search Vol", value: "1.2M+", status: "High", color: "text-teal-400" },
                                    { name: "Ad CPC Avg", value: "$4.50", status: "Medium", color: "text-blue-400" },
                                    { name: "User Retention Avg", value: "32%", status: "Ideal", color: "text-emerald-400" },
                                ].map((item, i) => (
                                    <div key={i} className="flex justify-between items-center text-xs">
                                        <span className="text-slate-500">{item.name}</span>
                                        <div className="flex gap-3">
                                            <span className="text-slate-300 font-medium">{item.value}</span>
                                            <span className={cn("font-bold tracking-tighter opacity-80", item.color)}>{item.status}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>

            </div>
        </div>
    );
}
