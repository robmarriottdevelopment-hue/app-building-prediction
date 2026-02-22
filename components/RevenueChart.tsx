"use client";

import React from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    Area,
    AreaChart,
    ComposedChart
} from 'recharts';
import { SimulationResult } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

interface RevenueChartProps {
    data: SimulationResult[];
}

export function RevenueChart({ data }: RevenueChartProps) {
    return (
        <Card className="col-span-1 lg:col-span-2">
            <CardHeader>
                <CardTitle>Forecasted Revenue (Months 1-12)</CardTitle>
                <CardDescription>Probabilistic range (P10 - P90) with P50 median.</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart
                        data={data}
                        margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                        <XAxis dataKey="month" label={{ value: 'Month', position: 'insideBottomRight', offset: -5 }} />
                        <YAxis
                            tickFormatter={(value) => `$${value}`}
                        />
                        <Tooltip
                            formatter={(value: number) => [`$${Math.round(value).toLocaleString()}`, '']}
                            labelFormatter={(label) => `Month ${label}`}
                        />
                        <Legend />
                        {/* Range Area P10-P90 - simplified by stacking or custom shape? */}
                        {/* Recharts Area range is tricky without 'range' type. 
                Workaround: Stacked areas or just lines.
                Better: Area for P90, white Area for P10 on top? No.
                Standard approach: Just show lines for P10, P50, P90.
            */}
                        <Line type="monotone" dataKey="revenueP90" stroke="#82ca9d" name="Optimistic (P90)" strokeDasharray="5 5" dot={false} strokeWidth={2} />
                        <Line type="monotone" dataKey="revenueP50" stroke="#8884d8" name="Expected (P50)" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="revenueP10" stroke="#ff7300" name="Conservative (P10)" strokeDasharray="5 5" dot={false} strokeWidth={2} />
                    </ComposedChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
}
