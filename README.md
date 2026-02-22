# App Revenue Forecaster

Executive-grade forecasting tool for mobile app revenue planning.

## Overview

This application helps app developers and investors predict revenue potential by analyzing market data, monetization strategy, and retention mechanics using a probabilistic Monte Carlo simulation.

## Features

- **Multi-step Questionnaire**: Collects app concept details (Platform, Monetisation, Category, etc.).
- **Scoring Engine**: Evaluates 5 pillars: Market Opportunity, Willingness to Pay, Retention Potential, Monetisation Design, Execution Capability.
- **Forecasting Engine**: Monte Carlo simulation (10,000 runs) producing P10/P50/P90 revenue forecasts.
- **Results Dashboard**: Monthly revenue curves, key drivers, and actionable recommendations.

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **Visualization**: Recharts
- **Data**: Local mock database (Postgres-ready schema).

## Get Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run development server:

   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000).

## Configuration

- Adjust market benchmarks in `lib/data.ts`.
- Adjust scoring weights in `lib/scoring.ts`.
