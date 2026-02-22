"use client";

import React, { useState } from "react";
import { Timeline } from "@/components/layout/Timeline";
import {
    Zap,
    ArrowRight,
    Search,
    MessageSquare,
    Lightbulb,
    DollarSign,
    Target,
    Activity,
    BrainCircuit,
    Layers,
    History,
    ChevronDown,
    Plus
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { HelpPanel } from "@/components/layout/HelpPanel";
import { BookOpen } from "lucide-react";

const MOCK_PROBLEMS = [
    { id: 1, text: "High cognitive load during multi-tasking", intensity: "CRITICAL", revenueIndex: 92 },
    { id: 2, text: "Inconsistent workflow transitions between devices", intensity: "HIGH", revenueIndex: 78 },
    { id: 3, text: "Data silos preventing holistic reporting", intensity: "MODERATE", revenueIndex: 65 },
];

const MOCK_IDEAS = [
    {
        id: 1,
        title: "FocusFlow Predictor",
        description: "AI-driven buffer manager that schedules deep work based on historic focus patterns.",
        blueprint: "Annual SaaS ($499/user)",
        bankability: 94,
        speed: 85
    },
    {
        id: 2,
        title: "BridgeOps Connector",
        description: "Zero-latency data aggregator for project-based legal teams.",
        blueprint: "Implementation Fee + Monthly Retainer",
        bankability: 82,
        speed: 60
    },
];

export default function IdeationLabPage() {
    const [activeProblem, setActiveProblem] = useState(MOCK_PROBLEMS[0].id);
    const [isHelpOpen, setIsHelpOpen] = useState(false);

    return (
        <div className="p-8 max-w-7xl mx-auto pb-20">
            <HelpPanel isOpen={isHelpOpen} onClose={() => setIsHelpOpen(false)} />

            {/* Header Section */}
            <header className="flex justify-between items-start mb-10">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">Problem/Solution Lab</h1>
                    <p className="text-slate-400">Phase 3: Mapping high-intensity friction points to bankable app solutions.</p>
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
                        <History className="w-4 h-4 mr-2" />
                        Session History
                    </Button>
                    <Button size="sm" className="bg-teal-600 hover:bg-teal-500 text-white shadow-lg shadow-teal-500/20">
                        <Plus className="w-4 h-4 mr-2" />
                        New Brainstorm
                    </Button>
                </div>
            </header>

            {/* Timeline Stepper */}
            <Timeline currentStep={3} />

            {/* Lab Bench: Split Screen Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12">

                {/* 1. Friction Feed (Left Column) */}
                <div className="lg:col-span-4 space-y-6">
                    <section>
                        <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-4 flex items-center gap-2 px-1">
                            Friction Feed
                        </h2>
                        <div className="space-y-4">
                            {MOCK_PROBLEMS.map((p) => (
                                <div
                                    key={p.id}
                                    onClick={() => setActiveProblem(p.id)}
                                    className={cn(
                                        "p-5 rounded-2xl border transition-all cursor-pointer group relative overflow-hidden",
                                        activeProblem === p.id
                                            ? "bg-teal-500/10 border-teal-500/30 text-white"
                                            : "bg-slate-900/40 border-slate-800 text-slate-400 hover:border-slate-700"
                                    )}
                                >
                                    {activeProblem === p.id && (
                                        <div className="absolute top-0 left-0 w-1 h-full bg-teal-500 shadow-[0_0_10px_rgba(20,184,166,0.5)]" />
                                    )}
                                    <div className="flex justify-between items-start mb-3">
                                        <span className={cn(
                                            "text-[10px] font-bold px-2 py-0.5 rounded",
                                            p.intensity === 'CRITICAL' ? "bg-orange-500/20 text-orange-400" : "bg-blue-500/20 text-blue-400"
                                        )}>
                                            {p.intensity}
                                        </span>
                                        <span className="text-[10px] font-bold text-slate-600 group-hover:text-teal-400 transition-colors">
                                            Revenue Index: {p.revenueIndex}
                                        </span>
                                    </div>
                                    <p className="text-sm font-medium leading-relaxed">{p.text}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Bankability Matrix Overview */}
                    <Card className="bg-[#0f172a]/40 border-slate-800">
                        <CardHeader className="pb-2">
                            <CardTitle className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Revenue ceiling Matrix</CardTitle>
                        </CardHeader>
                        <CardContent className="p-6">
                            <div className="aspect-square w-full rounded-xl bg-slate-950 border border-slate-800/50 relative p-4 flex items-center justify-center">
                                {/* Simple Matrix Grid */}
                                <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 opacity-10">
                                    <div className="border-r border-b border-slate-700" />
                                    <div className="border-b border-slate-700" />
                                    <div className="border-r border-slate-700" />
                                    <div />
                                </div>
                                {/* Idea Dots */}
                                <div className="absolute top-[20%] left-[25%] group cursor-help">
                                    <div className="w-3 h-3 rounded-full bg-teal-400 shadow-[0_0_8px_rgba(45,212,191,0.6)]" />
                                    <div className="hidden group-hover:block absolute top-4 left-4 bg-slate-900 border border-slate-800 p-2 rounded text-[10px] whitespace-nowrap z-50 text-white">
                                        FocusFlow (Tier 1)
                                    </div>
                                </div>
                                <div className="absolute top-[45%] left-[60%] w-2 h-2 rounded-full bg-blue-500 opacity-50" />

                                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 text-[8px] text-slate-600 uppercase font-black uppercase tracking-tighter">Speed to Build</span>
                                <span className="absolute left-1 top-1/2 -rotate-90 -translate-y-1/2 text-[8px] text-slate-600 font-bold uppercase tracking-tighter">Revenue Ceiling</span>

                                <BrainCircuit className="w-8 h-8 text-slate-800" />
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* 2. Solution Canvas (Center Column) */}
                <div className="lg:col-span-5 space-y-6">
                    <section>
                        <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-4 flex items-center gap-2 px-1">
                            Winning Blueprints
                        </h2>
                        <div className="space-y-6">
                            {MOCK_IDEAS.map((idea) => (
                                <Card key={idea.id} className="bg-slate-900/40 border-slate-800 hover:border-teal-500/20 transition-all group overflow-hidden">
                                    <div className="h-1 w-full bg-gradient-to-r from-teal-500/0 via-teal-500/20 to-teal-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <CardContent className="p-8">
                                        <div className="flex justify-between items-start mb-6">
                                            <div>
                                                <h3 className="text-xl font-bold text-white mb-2">{idea.title}</h3>
                                                <div className="flex gap-2">
                                                    <span className="text-[10px] font-black bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded uppercase">AI Recommended</span>
                                                    <span className="text-[10px] font-black bg-teal-500/10 text-teal-400 px-2 py-0.5 rounded uppercase">High Margin</span>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-2xl font-black text-white">{idea.bankability}%</div>
                                                <p className="text-[10px] text-slate-500 font-bold uppercase">Bankability</p>
                                            </div>
                                        </div>

                                        <p className="text-sm text-slate-400 leading-relaxed mb-8">
                                            {idea.description}
                                        </p>

                                        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between mb-8">
                                            <div className="flex items-center gap-3">
                                                <DollarSign className="w-5 h-5 text-teal-400" />
                                                <div>
                                                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">Monetization Model</p>
                                                    <p className="text-sm font-bold text-white tracking-tight">{idea.blueprint}</p>
                                                </div>
                                            </div>
                                            <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-teal-400 transition-colors" />
                                        </div>

                                        <div className="flex gap-4">
                                            <Button className="flex-1 bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs h-10 shadow-lg shadow-teal-500/10">
                                                Start Validation Gate (Phase 4)
                                            </Button>
                                            <Button variant="outline" className="border-slate-800 text-slate-400 hover:text-white hover:bg-slate-900 text-xs h-10">
                                                Mockup Wireframe
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </section>
                </div>

                {/* 3. Interactive Co-pilot (Right Column) */}
                <div className="lg:col-span-3 space-y-6">
                    <section className="h-full flex flex-col">
                        <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-4 flex items-center gap-2 px-1">
                            Strategic Co-pilot
                        </h2>
                        <Card className="flex-1 bg-slate-900/40 border-slate-800 flex flex-col min-h-[500px] overflow-hidden">
                            <CardHeader className="bg-slate-900/40 border-b border-slate-800/50 p-4">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                                    <span className="text-xs font-bold text-white uppercase tracking-tighter">In session: Revenue Strategy</span>
                                </div>
                            </CardHeader>
                            <CardContent className="flex-1 p-4 overflow-y-auto space-y-4">
                                <div className="p-3 rounded-xl bg-slate-800/30 text-[11px] text-slate-300 leading-relaxed border border-slate-800">
                                    "I've analyzed the **Project Manager** friction points. Focus patterns during multi-tasking represent a underserved opportunity with high B2B willingness to pay."
                                </div>
                                <div className="p-3 rounded-xl bg-teal-500/5 text-[11px] text-teal-400 leading-relaxed border border-teal-500/10 italic">
                                    "Tip: Ask me to refine the #1 idea for Enterprise security standards to unlock higher LTV tiers."
                                </div>
                            </CardContent>
                            <div className="p-4 border-t border-slate-800 bg-slate-950/50">
                                <div className="relative">
                                    <textarea
                                        placeholder="Ask co-pilot to refine idea..."
                                        className="w-full bg-slate-900 border border-slate-800 rounded-xl p-3 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-teal-500/50 resize-none"
                                        rows={3}
                                    />
                                    <Button className="absolute bottom-2 right-2 p-1.5 h-auto bg-teal-600 hover:bg-teal-500 rounded-lg">
                                        <MessageSquare className="w-3 h-3 text-white" />
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    </section>
                </div>

            </div>
        </div>
    );
}
