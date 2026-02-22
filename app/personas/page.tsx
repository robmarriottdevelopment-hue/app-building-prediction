"use client";

import React from "react";
import { Timeline } from "@/components/layout/Timeline";
import {
    Users,
    Zap,
    ArrowRight,
    Search,
    Filter,
    Plus,
    UserCircle2,
    TrendingUp
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HelpPanel } from "@/components/layout/HelpPanel";
import { BookOpen } from "lucide-react";

const MOCK_PERSONAS = [
    { id: 1, name: "David Rahaya", role: "Project Manager", description: "Focused on optimizing team workflows and resource allocation.", intensity: 85 },
    { id: 2, name: "Maria Chen", role: "High-End Chef", description: "Needs precise inventory tracking and recipe cost management.", intensity: 70 },
    { id: 3, name: "Alex Thorne", role: "Teacher", description: "Seeking automated grading and student engagement tools.", intensity: 92 },
    { id: 4, name: "Sarah Jenkins", role: "ADHD Freelancer", description: "Requires deep focus tools and task prioritization assistants.", intensity: 88 },
];

export default function PersonasPage() {
    const [isHelpOpen, setIsHelpOpen] = React.useState(false);

    return (
        <div className="p-8 max-w-7xl mx-auto">
            <HelpPanel isOpen={isHelpOpen} onClose={() => setIsHelpOpen(false)} />

            {/* Header Section */}
            <header className="flex justify-between items-start mb-10">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2" id="innovation-workbench-title">Innovation Workbench</h1>
                    <p className="text-slate-400">Phase 1: Discover high-value target personas using AI intelligence.</p>
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
                        <Filter className="w-4 h-4 mr-2" />
                        Filters
                    </Button>
                    <Button size="sm" className="bg-teal-600 hover:bg-teal-500 text-white shadow-lg shadow-teal-500/20">
                        <Zap className="w-4 h-4 mr-2" />
                        Generate List
                    </Button>
                </div>
            </header>

            {/* Stats Header (from mockup) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                {[
                    { label: "Total Data", value: "2,643", trend: "+10%", color: "text-teal-400" },
                    { label: "Market Data", value: "38.33K", trend: "+15%", color: "text-blue-400" },
                    { label: "Revenue Target", value: "$1.2M", trend: "Stability", color: "text-teal-400" },
                ].map((stat, i) => (
                    <Card key={i} className="bg-slate-900/40 border-slate-800 overflow-hidden relative">
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-teal-500/20 to-transparent" />
                        <CardContent className="p-6">
                            <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">{stat.label}</p>
                            <div className="flex items-end gap-3">
                                <span className="text-3xl font-bold text-white tracking-tight">{stat.value}</span>
                                <span className={cn("text-xs font-medium mb-1", stat.color)}>{stat.trend}</span>
                            </div>
                            <div className="mt-4 h-8 w-full">
                                {/* Simple SVG Sparkline */}
                                <svg className="w-full h-full opacity-30" viewBox="0 0 100 20">
                                    <path
                                        d="M0 15 Q 10 5, 20 18 T 40 10 T 60 15 T 80 5 L 100 20"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        className={stat.color}
                                    />
                                </svg>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Strategic Guidance Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="space-y-4 p-6 rounded-2xl bg-teal-500/5 border border-teal-500/10">
                    <div className="w-10 h-10 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-400">
                        <Users className="w-5 h-5" />
                    </div>
                    <h3 className="text-white font-bold">Why Personas?</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                        Successful apps aren't built for everyone; they are built for <span className="text-teal-400">someone</span>. Identifying hyper-specific personas is the only way to ensure your solution maps to a real, intense pain point.
                    </p>
                </div>
                <div className="space-y-4 p-6 rounded-2xl bg-blue-500/5 border border-blue-500/10">
                    <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
                        <Zap className="w-5 h-5" />
                    </div>
                    <h3 className="text-white font-bold">AI Discovery</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                        We leverage neural analysis of global usage patterns to uncover underserved markets. AI finds the friction in daily routines that manual research misses.
                    </p>
                </div>
                <div className="space-y-4 p-6 rounded-2xl bg-purple-500/5 border border-purple-500/10">
                    <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400">
                        <TrendingUp className="w-5 h-5" />
                    </div>
                    <h3 className="text-white font-bold">Revenue Prioritization</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                        Not every problem is a business opportunity. We prioritize personas based on <span className="text-purple-400 font-semibold">Willingness to Pay (WTP)</span> and current market data indices.
                    </p>
                </div>
            </div>

            {/* Phase Roadmap Section */}
            <div className="mb-12">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-6 px-1">Innovation Roadmap</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative p-6 rounded-2xl bg-slate-900/60 border border-slate-800 group hover:border-teal-500/30 transition-all">
                        <div className="absolute top-4 right-4 text-xs font-bold text-teal-500 bg-teal-500/10 px-2 py-1 rounded">PHASE 1</div>
                        <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                            Full Spectrum Discovery
                        </h4>
                        <p className="text-sm text-slate-400 leading-relaxed">
                            Utilize AI to provide you with **50 to 100 personas** to choose from. We explore diverse categories—from teachers and project managers to specialists in neurodiversity (ADHD, Autism), chefs, and legal professionals—to ensure no opportunity is overlooked.
                        </p>
                    </div>
                    <div className="relative p-6 rounded-2xl bg-slate-900/60 border border-slate-800 group hover:border-teal-500/30 transition-all">
                        <div className="absolute top-4 right-4 text-xs font-bold text-teal-500 bg-teal-500/10 px-2 py-1 rounded">PHASE 2</div>
                        <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                            Revenue Validation
                        </h4>
                        <p className="text-sm text-slate-400 leading-relaxed">
                            Ask AI to provide the **top five to ten personas** that you can target that are likely to produce the most revenue. This stage filters the wide net through real-world market data to identify the highest ROI opportunities for your build.
                        </p>
                    </div>
                </div>
            </div>

            {/* Timeline Stepper */}
            <Timeline currentStep={1} />

            {/* Main Content Areas */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">

                {/* Left: Research Modules */}
                <div className="lg:col-span-2 space-y-8">
                    <section>
                        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-6 flex items-center gap-2">
                            Research Modules
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {["Project Module", "Research Module"].map((name, i) => (
                                <Card key={i} className="bg-slate-900/40 border-slate-800 hover:border-teal-500/30 transition-all duration-300 group cursor-pointer">
                                    <CardContent className="p-6">
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="p-2 rounded-lg bg-teal-500/10 text-teal-400">
                                                <TrendingUp className="w-5 h-5" />
                                            </div>
                                            <Button variant="ghost" size="icon" className="text-slate-600 hover:text-white">
                                                <ArrowRight className="w-4 h-4" />
                                            </Button>
                                        </div>
                                        <h3 className="text-white font-bold mb-2">{name}</h3>
                                        <p className="text-sm text-slate-400 mb-4 leading-relaxed">
                                            Comprehensive analysis of the target market segment and latent demand indices.
                                        </p>
                                        <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                                            <div className="h-full bg-teal-500 w-[45%] rounded-full shadow-[0_0_8px_rgba(20,184,166,0.3)]" />
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </section>

                    <section>
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-500 flex items-center gap-2">
                                Personas
                            </h2>
                            <Button variant="link" size="sm" className="text-teal-400 p-0 hover:no-underline">
                                View all
                            </Button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {MOCK_PERSONAS.map((p) => (
                                <Card key={p.id} className="bg-[#0f172a]/60 border-slate-800 hover:border-teal-500/20 transition-all">
                                    <CardContent className="p-6 flex gap-4">
                                        <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-slate-500 shrink-0">
                                            <UserCircle2 className="w-8 h-8" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold">{p.name}</h4>
                                            <p className="text-xs text-teal-500 font-medium mb-2">{p.role}</p>
                                            <p className="text-xs text-slate-400 leading-relaxed mb-3">{p.description}</p>
                                            <div className="flex items-center gap-2">
                                                <div className="flex-1 h-1 bg-slate-800 rounded-full">
                                                    <div className="h-full bg-teal-400 rounded-full" style={{ width: `${p.intensity}%` }} />
                                                </div>
                                                <span className="text-[10px] text-slate-500 font-bold">{p.intensity}%</span>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Right: AI Intelligence Panel */}
                <div className="space-y-8">
                    <Card className="bg-teal-500/5 border-teal-500/20 glassmorphism relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-2">
                            <Zap className="text-teal-400 w-4 h-4 animate-pulse" />
                        </div>
                        <CardContent className="p-6">
                            <h3 className="text-teal-400 font-bold text-sm mb-4 flex items-center gap-2">
                                <Zap className="w-4 h-4" /> AI Recommendations
                            </h3>
                            <p className="text-sm text-slate-300 leading-relaxed mb-6 italic">
                                "Based on current ARPDAU trends in Productivity apps, targeting **ADHD Freelancers** offers a 3.4x higher conversion rate for subscription models."
                            </p>
                            <Button className="w-full bg-teal-500 hover:bg-teal-400 text-white font-bold h-11">
                                Accept Strategy
                            </Button>
                        </CardContent>
                    </Card>

                    <Card className="bg-slate-900/40 border-slate-800">
                        <CardContent className="p-6">
                            <h3 className="text-white font-bold text-sm mb-4">Phase Governance</h3>
                            <div className="space-y-4">
                                {[
                                    { name: "Sample Size", status: "Verified", color: "text-emerald-400" },
                                    { name: "Market Benchmarks", status: "Active", color: "text-blue-400" },
                                    { name: "Persona Scoring", status: "In Progress", color: "text-orange-400" },
                                ].map((item, i) => (
                                    <div key={i} className="flex justify-between items-center text-xs">
                                        <span className="text-slate-400">{item.name}</span>
                                        <span className={cn("font-bold uppercase tracking-tighter", item.color)}>{item.status}</span>
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

function cn(...inputs: any[]) {
    return inputs.filter(Boolean).join(" ");
}
