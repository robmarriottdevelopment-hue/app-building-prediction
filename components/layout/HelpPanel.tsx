"use client";

import React, { useState, useEffect } from "react";
import {
    X,
    BookOpen,
    Lightbulb,
    Users,
    Target,
    TrendingUp,
    Cpu,
    DollarSign,
    ChevronRight,
    Info
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const HELP_CONTENT = {
    overview: {
        title: "The Innovator's Blueprint",
        description: "Most apps fail because they solve a problem that doesn't exist for people who don't want to pay. The Innovator OS is a 5-phase governance funnel designed to remove the guesswork and maximize terminal revenue.",
        icon: BookOpen,
        color: "text-teal-400"
    },
    phases: [
        {
            id: 1,
            title: "Persona Discovery (The 'Who')",
            use: "Generate or select a segment with high friction.",
            benefit: "Identifies who is hurting enough to pay for a solution.",
            icon: Users,
            color: "text-blue-400"
        },
        {
            id: 2,
            title: "Market Intelligence (The 'Gap')",
            use: "Analyze market indices (Saturation, Trend Velocity).",
            benefit: "Identifies 'Blue Oceans' with low competition and high demand.",
            icon: Target,
            color: "text-emerald-400"
        },
        {
            id: 3,
            title: "Ideation Lab (The 'Solution')",
            use: "Map friction to bankable blueprints.",
            benefit: "Ensures the solution is profitable and technically feasible.",
            icon: Lightbulb,
            color: "text-amber-400"
        },
        {
            id: 4,
            title: "Financial Validation (The 'Value')",
            use: "Simulate revenue based on market constants.",
            benefit: "Turns a 'good idea' into a solid business case with ROI.",
            icon: DollarSign,
            color: "text-teal-400"
        },
        {
            id: 5,
            title: "Build Orchestration (The 'Action')",
            use: "Follow the AI-ready implementation sequence.",
            benefit: "Orchestrates Antigravity AI to build code without mistakes.",
            icon: Cpu,
            color: "text-purple-400"
        }
    ]
};

export function HelpPanel({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => { document.body.style.overflow = "unset"; };
    }, [isOpen]);

    return (
        <>
            {/* Backdrop */}
            <div
                className={cn(
                    "fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] transition-opacity duration-300",
                    isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                )}
                onClick={onClose}
            />

            {/* Panel */}
            <div
                className={cn(
                    "fixed top-0 right-0 h-full w-full max-w-[450px] bg-[#0f172a] border-l border-slate-800 z-[101] shadow-2xl transition-transform duration-500 ease-out flex flex-col",
                    isOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                {/* Panel Header */}
                <div className="p-6 border-b border-slate-800 flex justify-between items-center bg-slate-900/40">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-400">
                            <Info className="w-4 h-4" />
                        </div>
                        <h2 className="text-white font-bold tracking-tight">Innovation Guide</h2>
                    </div>
                    <Button variant="ghost" size="icon" onClick={onClose} className="text-slate-500 hover:text-white rounded-full">
                        <X className="w-5 h-5" />
                    </Button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-8 space-y-10 custom-scrollbar">
                    {/* Introduction */}
                    <section className="space-y-4">
                        <div className="flex items-center gap-3 text-teal-400">
                            <HELP_CONTENT.overview.icon className="w-5 h-5" />
                            <h3 className="font-bold text-lg">{HELP_CONTENT.overview.title}</h3>
                        </div>
                        <p className="text-sm text-slate-400 leading-relaxed italic border-l-2 border-teal-500/30 pl-4 py-1">
                            {HELP_CONTENT.overview.description}
                        </p>
                    </section>

                    {/* Phase Breakdown */}
                    <section className="space-y-8 pb-10">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 flex items-center gap-2">
                            Full Governance Funnel
                        </h4>

                        <div className="space-y-6">
                            {HELP_CONTENT.phases.map((phase) => (
                                <div key={phase.id} className="group relative">
                                    <div className="flex gap-5">
                                        <div className={cn(
                                            "w-10 h-10 rounded-xl bg-slate-800/50 flex items-center justify-center shrink-0 transition-colors group-hover:bg-slate-800",
                                            phase.color
                                        )}>
                                            <phase.icon className="w-5 h-5" />
                                        </div>
                                        <div className="space-y-2">
                                            <h5 className="text-sm font-bold text-white group-hover:text-teal-400 transition-colors tracking-tight">
                                                {phase.title}
                                            </h5>
                                            <div className="space-y-3">
                                                <div>
                                                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">How to use</p>
                                                    <p className="text-xs text-slate-400 leading-relaxed font-medium">{phase.use}</p>
                                                </div>
                                                <div className="p-3 rounded-lg bg-slate-900/50 border border-slate-800/50 group-hover:border-slate-800 group-hover:bg-slate-900 transition-all">
                                                    <p className="text-[9px] font-black text-slate-600 uppercase tracking-widest mb-1 group-hover:text-teal-500/50">Terminal Outcome</p>
                                                    <p className="text-[11px] text-slate-400 group-hover:text-slate-300 leading-relaxed italic">"{phase.benefit}"</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {phase.id < HELP_CONTENT.phases.length && (
                                        <div className="absolute top-12 left-5 w-px h-10 bg-gradient-to-b from-slate-800 to-transparent" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-slate-800 bg-slate-900/20">
                    <Button
                        onClick={onClose}
                        className="w-full bg-teal-600 hover:bg-teal-500 text-white font-bold h-11 shadow-lg shadow-teal-500/10"
                    >
                        Got it, let's innovate
                    </Button>
                </div>
            </div>

            <style jsx global>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #1e293b;
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #334155;
                }
            `}</style>
        </>
    );
}
