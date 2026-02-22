import { AppInputs, ForecastOutput, SimulationResult } from './types';
import { MarketBenchmark } from './data';

// Helper for random normal distribution (Box-Muller transform)
function randomNormal(mean: number, stdDev: number): number {
    const u = 1 - Math.random();
    const v = Math.random();
    const z = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
    return mean + z * stdDev;
}

// Helper for lognormal
function randomLognormal(mean: number, stdDev: number): number {
    const sigma2 = Math.log(1 + (stdDev * stdDev) / (mean * mean));
    const mu = Math.log(mean) - 0.5 * sigma2;
    return Math.exp(randomNormal(mu, Math.sqrt(sigma2)));
}

export function runSimulation(
    inputs: AppInputs,
    scores: ForecastOutput['pillarScores'],
    benchmark: MarketBenchmark
): ForecastOutput {
    const SIMULATIONS = 2000; // 10k might be slow in JS single thread on client/serverless, 2k is sufficient for MVP
    const months = 12;

    // 1. Derive Priors from Scores
    // Market Opportunity -> Initial Installs Base (Organic)
    // 50 score = benchmark mean. 100 score = 5x benchmark. 0 score = 0.2x benchmark.
    const marketFactor = Math.pow(5, (scores.marketOpportunity - 50) / 50);
    const baseInstalls = 1000 * marketFactor; // Arbitrary MVP base install assumption for Month 1

    // Execution -> Growth Rate (Viral/Paid efficiency)
    const growthFactor = benchmark.installRateMean * (1 + (scores.executionCapability - 50) / 100);

    // WTP -> Conversion Rate
    const conversionFactor = Math.pow(2, (scores.willingnessToPay - 50) / 50);
    const baseConversion = benchmark.conversionMean * conversionFactor;

    // Retention -> Churn Rate
    // 50 score = benchmark churn. 100 score = 0.5x churn.
    const retentionFactor = Math.pow(0.5, (scores.retentionPotential - 50) / 50);
    const baseChurn = benchmark.churnRate * retentionFactor;

    // Price
    const price = inputs.pricePoint || 5.0; // Default

    // Variance adjustments based on Confidence
    // Lower confidence = Higher StdDev
    const varianceMultiplier = 1 + (1 - scores.confidenceScore) * 2; // Triples variance at 0 confidence

    // Arrays to hold results for each simulation
    const revenueStore: number[][] = Array.from({ length: months }, () => []);
    const grossStore: number[][] = Array.from({ length: months }, () => []);

    for (let s = 0; s < SIMULATIONS; s++) {
        let activeSubscribers = 0;
        let monthlyInstalls = randomLognormal(baseInstalls, baseInstalls * 0.5 * varianceMultiplier);

        // Growth randomness
        const growthRate = randomNormal(growthFactor, 0.1 * varianceMultiplier);
        const conversionRate = Math.max(0, Math.min(1, randomNormal(baseConversion, baseConversion * 0.2 * varianceMultiplier)));
        const churnRate = Math.max(0, Math.min(1, randomNormal(baseChurn, baseChurn * 0.2 * varianceMultiplier)));

        for (let m = 0; m < months; m++) {
            // New users
            const newInstalls = monthlyInstalls;
            monthlyInstalls *= growthRate; // Compounding growth

            // New subscribers
            const newSubs = newInstalls * conversionRate;

            // Churn
            const churnedSubs = activeSubscribers * churnRate;

            // Update active
            activeSubscribers = Math.max(0, activeSubscribers + newSubs - churnedSubs);

            // Revenue
            const grossRev = activeSubscribers * price;
            const netRev = grossRev * 0.85; // 15% store fee approx (avg of 15/30)

            revenueStore[m].push(netRev);
            grossStore[m].push(grossRev);
        }
    }

    // Aggregate results
    const monthlyRevenue: SimulationResult[] = [];

    // Stats helpers
    const getPercentile = (arr: number[], p: number) => {
        const sorted = arr.sort((a, b) => a - b);
        const idx = Math.floor(sorted.length * p);
        return sorted[idx] || 0;
    };

    const greaterThan = (arr: number[], val: number) => arr.filter(v => v > val).length / arr.length;

    for (let m = 0; m < months; m++) {
        monthlyRevenue.push({
            month: m + 1,
            revenueP10: getPercentile(revenueStore[m], 0.1),
            revenueP50: getPercentile(revenueStore[m], 0.5),
            revenueP90: getPercentile(revenueStore[m], 0.9),
            revenueGrossP50: getPercentile(grossStore[m], 0.5),
            revenueNetP50: getPercentile(revenueStore[m], 0.5)
        });
    }

    // Summary probabilities (Using Month 12 data roughly, or peak?)
    // Prompt asks for ">$1k/mo". I'll check M12.
    const m12Rev = revenueStore[11];
    const probGt1k = greaterThan(m12Rev, 1000);
    const probGt10k = greaterThan(m12Rev, 10000);

    // Auto-generate Drivers (Simple logic for MVP)
    const drivers = [];
    if (scores.marketOpportunity < 60) drivers.push({ name: 'Market Opportunity', impact: 'High', recommendation: 'Choose a crying market or broader target geo.' });
    if (scores.willingnessToPay < 60) drivers.push({ name: 'Willingness to Pay', impact: 'High', recommendation: 'Validate deeper pain or target business buyers.' });
    if (scores.retentionPotential < 60) drivers.push({ name: 'Retention', impact: 'Medium', recommendation: 'Improve core loop or habit mechanics.' });
    if (scores.monetisationDesign < 60) drivers.push({ name: 'Monetisation', impact: 'Medium', recommendation: 'Test hybrid models or optimize paywall timing.' });
    if (scores.executionCapability < 60) drivers.push({ name: 'Execution', impact: 'High', recommendation: 'Increase iteration speed or launch budget.' });

    if (drivers.length === 0) drivers.push({ name: 'Growth', impact: 'High', recommendation: 'Scale paid acquisition channels.' });

    return {
        monthlyRevenue,
        summary: {
            m1: monthlyRevenue[0].revenueP50,
            m3: monthlyRevenue[2].revenueP50,
            m6: monthlyRevenue[5].revenueP50,
            m12: monthlyRevenue[11].revenueP50,
            probabilityGt1k: probGt1k,
            probabilityGt10k: probGt10k,
            probabilityBreakEven: 0.5 // Placeholder for MVP (needs cost model)
        },
        pillarScores: scores,
        confidence: scores.confidenceScore > 0.8 ? 'High' : (scores.confidenceScore > 0.5 ? 'Medium' : 'Low'),
        drivers: drivers.slice(0, 5)
    };
}
