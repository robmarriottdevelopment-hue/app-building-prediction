import React from "react";
import { cn } from "@/lib/utils";

const STEPS = [
    { id: 1, name: "Personas", date: "Phase 1" },
    { id: 2, name: "Market Data", date: "Phase 2" },
    { id: 3, name: "Ideation", date: "Phase 3" },
    { id: 4, name: "Forecasting", date: "Phase 4" },
    { id: 5, name: "Build Plan", date: "Phase 5" },
];

interface TimelineProps {
    currentStep: number;
}

export function Timeline({ currentStep }: TimelineProps) {
    return (
        <div className="w-full py-8">
            <div className="relative">
                {/* Connection Line */}
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-800 -translate-y-1/2 z-0" />
                <div
                    className="absolute top-1/2 left-0 h-0.5 bg-teal-500 -translate-y-1/2 z-0 transition-all duration-500"
                    style={{ width: `${((currentStep - 1) / (STEPS.length - 1)) * 100}%` }}
                />

                <div className="relative flex justify-between items-center z-10">
                    {STEPS.map((step) => {
                        const isActive = step.id === currentStep;
                        const isCompleted = step.id < currentStep;

                        return (
                            <div key={step.id} className="flex flex-col items-center group">
                                <div
                                    className={cn(
                                        "w-4 h-4 rounded-full border-2 transition-all duration-300",
                                        isActive
                                            ? "bg-teal-400 border-teal-400 shadow-[0_0_15px_rgba(45,212,191,0.6)]"
                                            : isCompleted
                                                ? "bg-teal-500 border-teal-500"
                                                : "bg-[#0a0c10] border-slate-700"
                                    )}
                                />
                                <div className="mt-4 text-center">
                                    <p className={cn(
                                        "text-xs font-bold uppercase tracking-wider transition-colors",
                                        isActive ? "text-teal-400" : "text-slate-500"
                                    )}>
                                        {step.name}
                                    </p>
                                    <p className="text-[10px] text-slate-600 mt-0.5 font-medium">{step.date}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
