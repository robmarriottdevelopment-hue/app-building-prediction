"use client";

import React, { useState } from "react";
import { Timeline } from "@/components/layout/Timeline";
import {
    Zap,
    ArrowRight,
    Search,
    Code2,
    Play,
    CheckCircle2,
    FileJson,
    ListChecks,
    Cpu,
    Rocket,
    ClipboardCopy,
    ExternalLink,
    ShieldCheck,
    Activity
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { HelpPanel } from "@/components/layout/HelpPanel";
import { BookOpen } from "lucide-react";

const BUILD_SEQUENCE = [
    {
        id: 1,
        module: "Data Layer & Persistence",
        description: "Initialize the database schema and AI processing hooks for real-time persona validation.",
        status: "READY",
        prompt: "Build the data layer for a persona-driven intelligence platform. Use Next.js API routes and Supabase for persistence. Schema should include Persona, Problem, and RevenueIndices tables."
    },
    {
        id: 2,
        module: "Revenue Simulation Engine",
        description: "Implement the logic for ARPDAU/LTV forecasting based on Phase 4 data.",
        status: "PENDING",
        prompt: "Create a TypeScript simulation engine that calculates 12-month revenue projections based on User Acquisition (UA) cost and Persona-specific conversion rates."
    },
    {
        id: 3,
        module: "Frontend Orchestration UI",
        description: "Develop the dashboard views for displaying AI resonance scores and friction feeds.",
        status: "PENDING",
        prompt: "Build a high-performance React dashboard using Tailwind CSS and Lucide icons. Implement a split-screen 'Lab' view as defined in the Phase 3 ideation specifications."
    },
];

const VERIFICATION_GATES = [
    { id: 1, label: "Neural Resonance Logic", status: "PENDING" },
    { id: 2, label: "Data Integrity & Encryption", status: "PENDING" },
    { id: 3, label: "Performance Benchmarks", status: "PENDING" },
    { id: 4, label: "Mobile Responsive States", status: "PENDING" },
];

export default function BuildPlanPage() {
    const [activePrompt, setActivePrompt] = useState(BUILD_SEQUENCE[0].prompt);
    const [isHelpOpen, setIsHelpOpen] = useState(false);

    const copyPrompt = (text: string) => {
        navigator.clipboard.writeText(text);
        // Toast logic would go here in a full app
    };

    return (
        <div className="p-8 max-w-7xl mx-auto pb-20">
            <HelpPanel isOpen={isHelpOpen} onClose={() => setIsHelpOpen(false)} />

            {/* Header Section */}
            <header className="flex justify-between items-start mb-10">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">Build Orchestration</h1>
                    <p className="text-slate-400">Phase 5: Deploying AI-ready specifications for automated implementation.</p>
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
                        <FileJson className="w-4 h-4 mr-2" />
                        Download Manifest
                    </Button>
                    <Button size="sm" className="bg-teal-600 hover:bg-teal-500 text-white shadow-lg shadow-teal-500/20">
                        <Rocket className="w-4 h-4 mr-2" />
                        Sync Context
                    </Button>
                </div>
            </header>

            {/* Timeline Stepper */}
            <Timeline currentStep={5} />

            {/* Lab Bench: Split Screen Layout */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-12 items-start">

                {/* 1. AI Execution Sequence (Left Column) */}
                <div className="flex-1 w-full space-y-8 min-w-0">
                    <section>
                        <div className="flex justify-between items-center mb-6 px-1">
                            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 flex items-center gap-2">
                                <Cpu className="w-4 h-4 text-teal-400" />
                                AI Implementation Sequence
                            </h2>
                            <span className="text-[10px] font-bold text-slate-500 bg-slate-800/50 px-2 py-1 rounded">3 MODULES READY</span>
                        </div>

                        <div className="space-y-4">
                            {BUILD_SEQUENCE.map((step, i) => (
                                <Card
                                    key={step.id}
                                    className={cn(
                                        "bg-slate-900/40 border-slate-800 transition-all hover:border-teal-500/30 group",
                                        step.status === 'READY' ? "border-teal-500/20" : ""
                                    )}
                                >
                                    <CardContent className="p-6">
                                        <div className="flex gap-6 items-start">
                                            <div className="flex flex-col items-center gap-2 pt-1 hidden sm:flex">
                                                <div className={cn(
                                                    "w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0",
                                                    step.status === 'READY' ? "bg-teal-500 text-black shadow-[0_0_10px_rgba(20,184,166,0.5)]" : "bg-slate-800 text-slate-500"
                                                )}>
                                                    {i + 1}
                                                </div>
                                                {i < BUILD_SEQUENCE.length - 1 && (
                                                    <div className="w-0.5 h-16 bg-slate-800/50" />
                                                )}
                                            </div>

                                            <div className="flex-1 min-w-0">
                                                <div className="flex justify-between items-baseline mb-2 gap-4">
                                                    <h3 className="text-white font-bold tracking-tight truncate">{step.module}</h3>
                                                    <span className={cn(
                                                        "text-[9px] font-black px-2 py-0.5 rounded uppercase tracking-widest shrink-0",
                                                        step.status === 'READY' ? "bg-teal-500/10 text-teal-400" : "bg-slate-800 text-slate-600"
                                                    )}>
                                                        {step.status}
                                                    </span>
                                                </div>
                                                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                                                    {step.description}
                                                </p>

                                                <div className="flex flex-wrap items-center gap-6">
                                                    <Button
                                                        variant="link"
                                                        className="p-0 h-auto text-teal-400 text-xs hover:no-underline flex items-center gap-2 font-bold"
                                                        onClick={() => copyPrompt(step.prompt)}
                                                    >
                                                        <ClipboardCopy className="w-3.5 h-3.5" />
                                                        Copy AI Prompt
                                                    </Button>
                                                    <Button
                                                        variant="link"
                                                        className="p-0 h-auto text-slate-500 text-xs hover:no-underline group-hover:text-slate-300 font-medium"
                                                    >
                                                        <Code2 className="w-3.5 h-3.5 mr-2" />
                                                        View Data Pattern
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </section>

                    {/* Build Flow Diagram Visualization */}
                    <Card className="bg-slate-900/40 border-slate-800 overflow-hidden">
                        <CardHeader className="bg-slate-900/20 border-b border-slate-800/50">
                            <CardTitle className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">Global Build Manifest</CardTitle>
                        </CardHeader>
                        <CardContent className="p-8">
                            <div className="space-y-6">
                                <div className="p-5 rounded-2xl bg-black/40 border border-slate-800/50 relative group">
                                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <FileJson className="w-4 h-4 text-slate-600" />
                                    </div>
                                    <pre className="text-[11px] text-teal-400/80 font-mono overflow-x-auto leading-relaxed">
                                        {`{
  "project": "Innovator OS",
  "phase": 5,
  "resonance": 92.4,
  "target_persona": "Project Manager",
  "revenue_target": "$1.2M",
  "implementation_mode": "AI_AGENT"
}`}
                                    </pre>
                                </div>
                                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-2">
                                    <p className="text-[11px] text-slate-500 italic max-w-sm leading-relaxed">
                                        "Feed this manifest to Antigravity at the start of any build session to ensure full business context synchronization."
                                    </p>
                                    <Button size="sm" className="bg-slate-800 hover:bg-slate-700 text-white text-[10px] h-9 px-4 font-bold rounded-lg shrink-0">
                                        Sync Filesystem
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* 2. Governance Verification Board (Right Column) */}
                <div className="w-full lg:w-[380px] space-y-8 shrink-0">
                    <section>
                        <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-6 flex items-center gap-2 px-1">
                            <ShieldCheck className="w-4 h-4 text-emerald-400" />
                            Governance Verification
                        </h2>

                        <Card className="bg-slate-900/40 border-slate-800 overflow-hidden">
                            <CardContent className="p-0">
                                {VERIFICATION_GATES.map((gate, i) => (
                                    <div
                                        key={gate.id}
                                        className={cn(
                                            "p-5 flex justify-between items-center border-slate-800 transition-colors hover:bg-slate-800/20",
                                            i !== VERIFICATION_GATES.length - 1 ? "border-b" : ""
                                        )}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-2 h-2 rounded-full bg-slate-700 shadow-[0_0_5px_rgba(51,65,85,0.5)]" />
                                            <span className="text-xs font-bold text-slate-300 tracking-tight">{gate.label}</span>
                                        </div>
                                        <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">
                                            {gate.status}
                                        </span>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    </section>

                    <Card className="bg-orange-500/5 border-orange-500/20 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                            <Zap className="w-12 h-12 text-orange-400" />
                        </div>
                        <CardContent className="p-6">
                            <h3 className="text-orange-400 font-bold text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                                <Activity className="w-3 h-3" />
                                Auditor AI Status
                            </h3>
                            <p className="text-[12px] text-slate-400 leading-relaxed mb-6">
                                "The Build Engine is awaiting the **Data Layer** initialization. Once implemented, I will automatically begin auditing the code for logic resonance."
                            </p>
                            <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                                <div className="h-full bg-orange-500/40 w-[15%] rounded-full shadow-[0_0_8px_rgba(249,115,22,0.4)]" />
                            </div>
                        </CardContent>
                    </Card>

                    <Button className="w-full h-12 bg-teal-600 hover:bg-teal-500 text-white font-bold shadow-lg shadow-teal-500/20 transition-all active:scale-[0.98]">
                        Finalize & Export Build
                    </Button>
                </div>

            </div>
        </div>
    );
}
