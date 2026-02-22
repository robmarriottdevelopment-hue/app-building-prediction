import Link from "next/link";
import { ArrowRight, TrendingUp, ShieldCheck, Database } from "lucide-react";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-slate-950 text-white relative overflow-hidden">

            {/* Background Gradient Blob */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-teal-900/20 blur-[100px] rounded-full pointer-events-none" />

            <main className="flex flex-col gap-8 items-center text-center max-w-4xl z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950/50 border border-teal-800 text-teal-400 text-sm font-medium">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                    </span>
                    Live Market Benchmarks Active
                </div>

                <h1 className="text-5xl sm:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400 pb-2">
                    Innovation.<br />Governance. Scale.
                </h1>

                <p className="text-xl sm:text-2xl text-slate-400 max-w-2xl leading-relaxed">
                    The intelligence platform that guides you from <span className="text-teal-400 font-semibold">Persona Discovery</span> to <span className="text-teal-400 font-semibold">Validated Revenue</span> using data-driven governance.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 w-full justify-center mt-4">
                    <Link
                        href="/personas"
                        className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-teal-600 px-8 font-medium text-white transition-all duration-300 hover:bg-teal-500 hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(20,184,166,0.5)]"
                    >
                        <span className="mr-2 text-lg">Enter Workbench</span>
                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>

                {/* Trust Features */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 text-slate-400 text-sm">
                    <div className="flex flex-col items-center gap-2">
                        <div className="p-3 rounded-2xl bg-slate-900/50 border border-slate-800">
                            <Database className="h-6 w-6 text-teal-400" />
                        </div>
                        <span className="font-semibold text-slate-200">Real Market Data</span>
                        <p>Benchmarked against top sector performers.</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <div className="p-3 rounded-2xl bg-slate-900/50 border border-slate-800">
                            <TrendingUp className="h-6 w-6 text-purple-400" />
                        </div>
                        <span className="font-semibold text-slate-200">Probabilistic Engines</span>
                        <p>2,000+ simulations to map every outcome.</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <div className="p-3 rounded-2xl bg-slate-900/50 border border-slate-800">
                            <ShieldCheck className="h-6 w-6 text-emerald-400" />
                        </div>
                        <span className="font-semibold text-slate-200">Investor Ready</span>
                        <p>Bank-grade outputs for your pitch deck.</p>
                    </div>
                </div>
            </main>
        </div>
    );
}
