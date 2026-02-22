import { AppInputs, ForecastOutput, WithNotSure } from './types';

// Helper to safely get score from map
function getScore<T extends string>(
    value: WithNotSure<T> | undefined,
    map: Record<T, number>,
    fallback = 50
): { score: number; isNotSure: boolean } {
    if (!value || value === 'Not sure') {
        return { score: fallback, isNotSure: true };
    }
    return { score: map[value as T] ?? fallback, isNotSure: false };
}

export function calculateScores(inputs: AppInputs): ForecastOutput['pillarScores'] {
    let notSureCount = 0;
    const track = (res: { score: number; isNotSure: boolean }) => {
        if (res.isNotSure) notSureCount++;
        return res.score;
    };

    // 1. Market Opportunity (25%)
    const marketScore = (
        track(getScore(inputs.demandSignal, { 'Low': 20, 'Medium': 50, 'High': 80, 'Very high': 100 })) * 0.3 +
        track(getScore(inputs.growthTrend, { 'Declining': 10, 'Flat': 40, 'Growing': 80, 'Exploding': 100 })) * 0.3 +
        track(getScore(inputs.asoKeywordOpportunity, { 'Low': 30, 'Medium': 60, 'High': 90 })) * 0.2 +
        track(getScore(inputs.competitionIntensity, { 'Low': 90, 'Medium': 70, 'High': 40, 'Winner-takes-most': 20 })) * 0.2
    );

    // 2. Willingness to Pay (20%)
    const wtpScore = (
        track(getScore(inputs.painLevel, { 'Nice-to-have': 20, 'Mild': 40, 'Significant': 75, 'Acute': 100 })) * 0.3 +
        track(getScore(inputs.buyerType, { 'Consumer': 50, 'Family': 60, 'Prosumer': 80, 'Business-team': 100 })) * 0.25 +
        track(getScore(inputs.differentiation, { 'None': 10, 'One': 40, 'Multiple': 70, 'Step-change': 100 })) * 0.25 +
        track(getScore(inputs.problemFrequency, { 'Daily': 90, 'Weekly': 70, 'Monthly': 40, 'Rare': 20 })) * 0.2
    );

    // 3. Retention Potential (25%)
    const retentionScore = (
        track(getScore(inputs.coreLoopClarity, { 'Weak': 20, 'Moderate': 60, 'Strong': 95 })) * 0.3 +
        track(getScore(inputs.progressVisibility, { 'None': 20, 'Simple stats': 50, 'Levels-badges': 70, 'Progress map-milestones': 90 })) * 0.2 +
        track(getScore(inputs.variableReward, { 'None': 30, 'Low': 50, 'Medium': 75, 'High': 95 })) * 0.2 +
        track(getScore(inputs.personalisation, { 'None': 30, 'Light': 50, 'Medium': 75, 'Deep': 95 })) * 0.15 +
        track(getScore(inputs.noveltyRefresh, { 'None': 20, 'Monthly': 50, 'Weekly': 80, 'Daily-on-demand': 100 })) * 0.15
    );

    // 4. Monetisation Design (15%)
    const monetisationScore = (
        track(getScore(inputs.monetisation, {
            'Subscription': 80, 'IAP': 60, 'Paid': 40, 'Ads': 30,
            'Hybrid (Sub+IAP)': 95, 'Hybrid (Ads+IAP)': 70, 'Hybrid (Ads+Sub)': 85
        })) * 0.4 +
        track(getScore(inputs.offerStructure, { 'Single': 40, 'Good-Better-Best': 80, 'Monthly+Annual': 90, 'Add-ons+Base': 70 })) * 0.3 +
        track(getScore(inputs.paywallTiming, { 'before value': 60, 'after first value': 80, 'soft onboarding': 90, 'delayed': 50 })) * 0.3
    );

    // 5. Execution & Go-To-Market (15%)
    const executionScore = (
        track(getScore(inputs.creativeQuality, { 'Basic': 30, 'Solid': 70, 'Premium': 95 })) * 0.3 +
        track(getScore(inputs.launchPlan, { 'store-only': 20, 'ASO+content': 60, 'ASO+content+partnerships': 80, 'paid testing': 90 })) * 0.3 +
        track(getScore(inputs.iterationCadence, { 'Ad hoc': 20, 'Monthly': 40, 'Fortnightly': 70, 'Weekly': 95 })) * 0.2 +
        track(getScore(inputs.complianceReadiness, { 'Not ready': 10, 'Partial': 50, 'Solid': 90 })) * 0.2
    );

    // Overall Score
    const overallScore = (
        marketScore * 0.25 +
        wtpScore * 0.20 +
        retentionScore * 0.25 +
        monetisationScore * 0.15 +
        executionScore * 0.15
    );

    // Confidence Calculation
    // Base confidence 1.0
    // Penalties:
    // - Not sure answers: -0.02 each
    // - Small competitor set: -0.1
    // - Novelty (no comps): -0.15

    let confidence = 1.0;
    confidence -= (notSureCount * 0.02);

    if (inputs.competitorSetSize === '0-2' || inputs.competitorSetSize === 'Not sure') {
        confidence -= 0.1;
    }
    if (inputs.similarity === 'no direct comps') {
        confidence -= 0.15;
    }

    // Market availability (from prompt) - assuming standard categories have good data
    if (inputs.category === 'Other') {
        confidence -= 0.1;
    }

    return {
        marketOpportunity: Math.round(marketScore),
        willingnessToPay: Math.round(wtpScore),
        retentionPotential: Math.round(retentionScore),
        monetisationDesign: Math.round(monetisationScore),
        executionCapability: Math.round(executionScore),
        overallScore: Math.round(overallScore),
        confidenceScore: Math.max(0.1, Math.min(1.0, confidence))
    };
}
