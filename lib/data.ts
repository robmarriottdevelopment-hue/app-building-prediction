import { Category } from './types';

export interface MarketBenchmark {
    category: Category;
    installRateMean: number; // organic growth factor
    installRateStore: number; // store conversion %
    arppuMean: number; // $ per paying user per month
    conversionMean: number; // visit to install (web) or install to pay (app) %
    retentionM1: number;
    retentionM3: number;
    retentionM6: number;
    retentionM12: number;
    churnRate: number; // derived or explicit
}

export const MARKET_BENCHMARKS: Record<Category, MarketBenchmark> = {
    'Health&Fitness': {
        category: 'Health&Fitness',
        installRateMean: 1.1, // Monthly growth multiplier
        installRateStore: 0.30,
        arppuMean: 9.0,
        conversionMean: 0.05,
        retentionM1: 0.45,
        retentionM3: 0.25,
        retentionM6: 0.15,
        retentionM12: 0.08,
        churnRate: 0.15
    },
    'Productivity': {
        category: 'Productivity',
        installRateMean: 1.05,
        installRateStore: 0.25,
        arppuMean: 12.0,
        conversionMean: 0.04,
        retentionM1: 0.40,
        retentionM3: 0.28,
        retentionM6: 0.22,
        retentionM12: 0.18,
        churnRate: 0.10
    },
    'Education': {
        category: 'Education',
        installRateMean: 1.15,
        installRateStore: 0.28,
        arppuMean: 15.0,
        conversionMean: 0.035,
        retentionM1: 0.35,
        retentionM3: 0.20,
        retentionM6: 0.12,
        retentionM12: 0.05,
        churnRate: 0.18
    },
    'Finance': {
        category: 'Finance',
        installRateMean: 1.08,
        installRateStore: 0.15,
        arppuMean: 18.0,
        conversionMean: 0.06,
        retentionM1: 0.50,
        retentionM3: 0.35,
        retentionM6: 0.30,
        retentionM12: 0.25,
        churnRate: 0.08
    },
    'PhotoVideo': {
        category: 'PhotoVideo',
        installRateMean: 1.20,
        installRateStore: 0.35,
        arppuMean: 5.0,
        conversionMean: 0.025,
        retentionM1: 0.30,
        retentionM3: 0.15,
        retentionM6: 0.10,
        retentionM12: 0.05,
        churnRate: 0.20
    },
    'Social': {
        category: 'Social',
        installRateMean: 1.40,
        installRateStore: 0.40,
        arppuMean: 2.0, // mostly ads or small IAP
        conversionMean: 0.01,
        retentionM1: 0.40,
        retentionM3: 0.25,
        retentionM6: 0.20,
        retentionM12: 0.15,
        churnRate: 0.12
    },
    'Lifestyle': {
        category: 'Lifestyle',
        installRateMean: 1.10,
        installRateStore: 0.28,
        arppuMean: 7.0,
        conversionMean: 0.04,
        retentionM1: 0.35,
        retentionM3: 0.20,
        retentionM6: 0.12,
        retentionM12: 0.08,
        churnRate: 0.15
    },
    'Entertainment': {
        category: 'Entertainment',
        installRateMean: 1.12,
        installRateStore: 0.30,
        arppuMean: 8.0,
        conversionMean: 0.04,
        retentionM1: 0.38,
        retentionM3: 0.22,
        retentionM6: 0.15,
        retentionM12: 0.10,
        churnRate: 0.14
    },
    'Utilities': {
        category: 'Utilities',
        installRateMean: 1.05,
        installRateStore: 0.20,
        arppuMean: 4.0,
        conversionMean: 0.03,
        retentionM1: 0.30,
        retentionM3: 0.18,
        retentionM6: 0.12,
        retentionM12: 0.08,
        churnRate: 0.12
    },
    'Travel': {
        category: 'Travel',
        installRateMean: 1.08,
        installRateStore: 0.22,
        arppuMean: 10.0,
        conversionMean: 0.05,
        retentionM1: 0.25,
        retentionM3: 0.15,
        retentionM6: 0.10,
        retentionM12: 0.05,
        churnRate: 0.10 // Low churn because usage is sporadic? Or high churn? Adjusted to mean.
    },
    'Other': {
        category: 'Other',
        installRateMean: 1.05,
        installRateStore: 0.20,
        arppuMean: 5.0,
        conversionMean: 0.03,
        retentionM1: 0.30,
        retentionM3: 0.15,
        retentionM6: 0.10,
        retentionM12: 0.05,
        churnRate: 0.15
    }
};

export async function getMarketBenchmark(category: Category): Promise<MarketBenchmark> {
    // Simulate DB latency
    // await new Promise(resolve => setTimeout(resolve, 50));
    return MARKET_BENCHMARKS[category] || MARKET_BENCHMARKS['Other'];
}
