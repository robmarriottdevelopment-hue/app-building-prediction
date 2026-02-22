import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "App Revenue Forecaster",
    description: "Probabilistic revenue forecasting for mobile apps",
};

import { Sidebar } from "@/components/layout/Sidebar";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <body className="antialiased bg-[#0a0c10] text-slate-200 flex min-h-screen">
                <Sidebar />
                <main className="flex-1 overflow-y-auto">
                    {children}
                </main>
            </body>
        </html>
    );
}
