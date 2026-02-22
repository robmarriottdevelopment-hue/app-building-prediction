export type Platform = 'Android' | 'iOS' | 'Both';
export type Monetisation = 'Subscription' | 'IAP' | 'Paid' | 'Ads' | 'Hybrid (Sub+IAP)' | 'Hybrid (Ads+IAP)' | 'Hybrid (Ads+Sub)';
export type Category = 'Health&Fitness' | 'Productivity' | 'Education' | 'Finance' | 'PhotoVideo' | 'Social' | 'Lifestyle' | 'Entertainment' | 'Utilities' | 'Travel' | 'Other';
export type Archetype = 'Tracker' | 'Coach' | 'Content library' | 'Tool' | 'Marketplace' | 'Community' | 'Game casual' | 'Game midcore' | 'AI assistant-generator' | 'Training course-learning path';
export type TargetGeo = 'Global' | 'US-CA' | 'UK-IE' | 'EU core' | 'India-SEA' | 'LATAM' | 'Custom mix';

// Utility type to add "Not sure" to any type
export type WithNotSure<T> = T | 'Not sure';

export interface AppInputs {
    // A) App Identity
    platform: WithNotSure<Platform>;
    monetisation: WithNotSure<Monetisation>;
    category: WithNotSure<Category>;
    archetype: WithNotSure<Archetype>;
    targetGeo: WithNotSure<TargetGeo>;
    languageSupport: WithNotSure<'English' | 'English+1-2' | 'Multi 3+'>;

    // B) Market & Competition
    competitorSetSize: WithNotSure<'0-2' | '3-5' | '6-10' | '11-20'>;
    similarity: WithNotSure<'direct clone' | 'similar-differentiated' | 'adjacent' | 'no direct comps'>;
    demandSignal: WithNotSure<'Low' | 'Medium' | 'High' | 'Very high'>;
    growthTrend: WithNotSure<'Declining' | 'Flat' | 'Growing' | 'Exploding'>;
    competitionIntensity: WithNotSure<'Low' | 'Medium' | 'High' | 'Winner-takes-most'>;
    paidAcquisitionFeasibility: WithNotSure<'Very hard' | 'Hard' | 'Moderate' | 'Easy'>;
    asoKeywordOpportunity: WithNotSure<'Low' | 'Medium' | 'High'>;
    seasonality: WithNotSure<'None' | 'Moderate' | 'Strong'>;

    // C) Value & Willingness to Pay
    problemFrequency: WithNotSure<'Daily' | 'Weekly' | 'Monthly' | 'Rare'>;
    painLevel: WithNotSure<'Nice-to-have' | 'Mild' | 'Significant' | 'Acute'>;
    buyerType: WithNotSure<'Consumer' | 'Family' | 'Prosumer' | 'Business-team'>;
    economicBuyer: WithNotSure<'Same user' | 'Different payer'>;
    willingnessToPayBand: WithNotSure<'Low (<£3/mo)' | 'Medium (£3-£10)' | 'High (£10-£25)' | 'Premium (£25+)'>;
    differentiation: WithNotSure<'None' | 'One' | 'Multiple' | 'Step-change'>;
    proofOfValueSpeed: WithNotSure<'immediate' | '1-3 days' | '1-2 weeks' | 'long'>;
    switchingCost: WithNotSure<'Very low' | 'Low' | 'Medium' | 'High'>;

    // D) Retention & Habit
    coreLoopClarity: WithNotSure<'Weak' | 'Moderate' | 'Strong'>;
    progressVisibility: WithNotSure<'None' | 'Simple stats' | 'Levels-badges' | 'Progress map-milestones'>;
    variableReward: WithNotSure<'None' | 'Low' | 'Medium' | 'High'>;
    streaks: WithNotSure<'None' | 'Optional' | 'Core'>;
    personalisation: WithNotSure<'None' | 'Light' | 'Medium' | 'Deep'>;
    triggers: WithNotSure<'None' | 'Time-based' | 'Context-event' | 'Both'>;
    socialReinforcement: WithNotSure<'None' | 'Sharing' | 'Community async' | 'Competitive'>;
    noveltyRefresh: WithNotSure<'None' | 'Monthly' | 'Weekly' | 'Daily-on-demand'>;
    effortToReward: WithNotSure<'High effort-low reward' | 'Moderate' | 'Low effort-high reward'>;
    trustRequirement: WithNotSure<'Low' | 'Medium' | 'High'>;

    // E) Pricing & Paywall
    pricePoint: number;
    trial: WithNotSure<'None' | '3-7 days' | '14 days' | 'Freemium'>;
    paywallTiming: WithNotSure<'before value' | 'after first value' | 'soft onboarding' | 'delayed'>;
    offerStructure: WithNotSure<'Single' | 'Good-Better-Best' | 'Monthly+Annual' | 'Add-ons+Base'>;
    cancellationFriction: WithNotSure<'Easy' | 'Moderate' | 'Hard'>;
    priceAnchoring: WithNotSure<'None' | 'parity' | 'undercut' | 'premium'>;
    revenueProtection: WithNotSure<'None' | 'Usage limits' | 'Feature gating' | 'Both'>;

    // F) Execution Capability
    mvpBuildTime: WithNotSure<'<2 weeks' | '2-4 weeks' | '1-2 months' | '3+ months'>;
    iterationCadence: WithNotSure<'Weekly' | 'Fortnightly' | 'Monthly' | 'Ad hoc'>;
    creativeQuality: WithNotSure<'Basic' | 'Solid' | 'Premium'>;
    instrumentation: WithNotSure<'Minimal' | 'Standard' | 'Advanced'>;
    launchPlan: WithNotSure<'store-only' | 'ASO+content' | 'ASO+content+partnerships' | 'paid testing'>;
    budget90Days: WithNotSure<'£0-500' | '£500-2k' | '£2k-10k' | '£10k+'>;
    supportModel: WithNotSure<'None' | 'Email' | 'In-app+SLA'>;
    complianceReadiness: WithNotSure<'Not ready' | 'Partial' | 'Solid'>;

    // G) Portfolio Strategy
    crossPromo: WithNotSure<'None' | '1-2' | '3-5' | 'Ecosystem'>;
    sharedBackendAnalytics: WithNotSure<'No' | 'Partial' | 'Yes'>;
    killScaleGovernance: WithNotSure<'None' | 'Monthly' | 'Fortnightly' | 'Weekly'>;
    decisionRights: WithNotSure<'Solo' | 'Advisor' | 'Investor final say'>;
    primarySuccessMetric: WithNotSure<'Revenue' | 'Retention' | 'User growth' | 'Lead-gen'>;

    // Settings
    dataSource?: 'Mock' | 'SensorTower' | 'DataAI';
}

export interface SimulationResult {
    month: number;
    revenueP10: number;
    revenueP50: number;
    revenueP90: number;
    revenueGrossP50: number;
    revenueNetP50: number;
}

export interface ForecastOutput {
    monthlyRevenue: SimulationResult[];
    summary: {
        m1: number;
        m3: number;
        m6: number;
        m12: number;
        probabilityGt1k: number;
        probabilityGt10k: number;
        probabilityBreakEven: number;
    };
    pillarScores: {
        marketOpportunity: number;
        willingnessToPay: number;
        retentionPotential: number;
        monetisationDesign: number;
        executionCapability: number;
        overallScore: number;
        confidenceScore: number; // 0-1
    };
    confidence: 'Low' | 'Medium' | 'High';
    drivers: { name: string; impact: string; recommendation: string }[];
    metadata?: {
        dataSource: string;
    };
}

export const INITIAL_INPUTS: Partial<AppInputs> = {
    platform: 'Both',
    monetisation: 'Subscription',
    category: 'Health&Fitness',
    competitorSetSize: '3-5',
    similarity: 'similar-differentiated',
    demandSignal: 'Medium',
    growthTrend: 'Growing',
    competitionIntensity: 'Medium',
    paidAcquisitionFeasibility: 'Moderate',
    asoKeywordOpportunity: 'Medium',
    seasonality: 'None',
    pricePoint: 9.99,
};
