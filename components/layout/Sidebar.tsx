"use client";

import React from "react";
import {
    Users,
    BarChart3,
    Lightbulb,
    TrendingUp,
    Hammer,
    ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
    { id: 1, name: "Personas", icon: Users, href: "/personas" },
    { id: 2, name: "Market Data", icon: BarChart3, href: "/market" },
    { id: 3, name: "Ideation", icon: Lightbulb, href: "/ideation" },
    { id: 4, name: "Forecasting", icon: TrendingUp, href: "/form" },
    { id: 5, name: "Build Plan", icon: Hammer, href: "/build" },
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="w-64 min-h-screen bg-[#0a0c10] border-r border-slate-800 flex flex-col z-50">
            <div className="p-6">
                <div className="flex items-center gap-2 mb-10">
                    <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center">
                        <TrendingUp className="text-black w-5 h-5" />
                    </div>
                    <span className="font-bold text-lg tracking-tight text-white">Innovator OS</span>
                </div>

                <nav className="space-y-2">
                    {NAV_ITEMS.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.id}
                                href={item.href}
                                className={cn(
                                    "flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 group",
                                    isActive
                                        ? "bg-teal-500/10 text-teal-400 shadow-[inset_0_0_20px_rgba(20,184,166,0.1)] border border-teal-500/20"
                                        : "text-slate-400 hover:text-white hover:bg-slate-900"
                                )}
                            >
                                <div className="flex items-center gap-3">
                                    <item.icon className={cn(
                                        "w-5 h-5 transition-colors",
                                        isActive ? "text-teal-400" : "group-hover:text-teal-400"
                                    )} />
                                    <span className="text-sm font-medium">
                                        {item.id}. {item.name}
                                    </span>
                                </div>
                                {isActive && (
                                    <div className="w-1.5 h-1.5 rounded-full bg-teal-400 shadow-[0_0_8px_rgba(45,212,191,0.8)]" />
                                )}
                            </Link>
                        );
                    })}
                </nav>
            </div>

            <div className="mt-auto p-6 border-t border-slate-900">
                <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800">
                    <p className="text-xs text-slate-500 mb-2 uppercase tracking-widest font-bold">Current Project</p>
                    <p className="text-sm font-medium text-white truncate text-ellipsis">Revenue Forecaster v1.0</p>
                    <div className="mt-3 h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-teal-500 w-[60%] rounded-full shadow-[0_0_10px_rgba(20,184,166,0.5)]" />
                    </div>
                </div>
            </div>
        </aside>
    );
}
