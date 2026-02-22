import { NextResponse } from 'next/server';
import { AppInputs } from '@/lib/types';
import { calculateScores } from '@/lib/scoring';
import { runSimulation } from '@/lib/simulation';
import { getMarketBenchmark } from '@/lib/data';

export async function POST(request: Request) {
    try {
        const inputs: AppInputs = await request.json();

        // 1. Validate inputs (basic check)
        if (!inputs.category) {
            return NextResponse.json({ error: 'Missing category' }, { status: 400 });
        }

        // 2. Get Data
        const category = inputs.category === 'Not sure' ? 'Other' : inputs.category;
        const benchmark = await getMarketBenchmark(category);

        // 3. Score
        const scores = calculateScores(inputs);

        // 4. Simulate
        const forecast = runSimulation(inputs, scores, benchmark);

        return NextResponse.json(forecast);
    } catch (error) {
        console.error('Forecast error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
