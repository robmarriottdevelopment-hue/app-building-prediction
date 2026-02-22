import React from "react";
import { useFormContext } from "@/app/form/form-context";
import { FormSelect } from "./FormHelpers";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export function ModuleB() {
    const { inputs, setInputs } = useFormContext();

    return (
        <Card>
            <CardHeader>
                <CardTitle>Module B: Market & Competition</CardTitle>
                <CardDescription>Analyze the competitive landscape.</CardDescription>
            </CardHeader>
            <CardContent>
                <FormSelect
                    label="Competitor Set Size"
                    value={inputs.competitorSetSize}
                    options={['0-2', '3-5', '6-10', '11-20']}
                    onChange={(v) => setInputs({ competitorSetSize: v })}
                    description="How many apps directly compete for the same user/problem. <20 serious competitors is a small set; 100+ is saturated."
                />
                <FormSelect
                    label="Similarity to Leaders"
                    value={inputs.similarity}
                    options={['direct clone', 'similar-differentiated', 'adjacent', 'no direct comps']}
                    onChange={(v) => setInputs({ similarity: v })}
                    description="How close your product is to top revenue apps in the niche. 70%+ feature overlap indicates high similarity."
                />
                <FormSelect
                    label="Demand Signal (Search Volume)"
                    value={inputs.demandSignal}
                    options={['Low', 'Medium', 'High', 'Very high']}
                    onChange={(v) => setInputs({ demandSignal: v })}
                    description="Evidence of active searching or downloading in this niche. High search volume for primary keywords indicates strong demand."
                />
                <FormSelect
                    label="Growth Trend"
                    value={inputs.growthTrend}
                    options={['Declining', 'Flat', 'Growing', 'Exploding']}
                    onChange={(v) => setInputs({ growthTrend: v })}
                    description="Is the niche expanding or shrinking? Consistent upward download/revenue curves over 6-12 months indicate growth."
                />
                <FormSelect
                    label="Competition Intensity"
                    value={inputs.competitionIntensity}
                    options={['Low', 'Medium', 'High', 'Winner-takes-most']}
                    onChange={(v) => setInputs({ competitionIntensity: v })}
                    description="How hard it is to displace existing leaders. If top 3 apps control 60%+ revenue, intensity is high."
                />
                <FormSelect
                    label="Paid Acquisition Feasibility"
                    value={inputs.paidAcquisitionFeasibility}
                    options={['Very hard', 'Hard', 'Moderate', 'Easy']}
                    onChange={(v) => setInputs({ paidAcquisitionFeasibility: v })}
                    description="Can you profitably run ads to acquire users? Success depends on LTV (Life Time Value) being >2x CPI (Cost Per Install)."
                />
                <FormSelect
                    label="ASO Keyword Opportunity"
                    value={inputs.asoKeywordOpportunity}
                    options={['Low', 'Medium', 'High']}
                    onChange={(v) => setInputs({ asoKeywordOpportunity: v })}
                    description="The gap between keyword demand and competition difficulty. Look for high volume keywords with weak ranking apps."
                />
                <FormSelect
                    label="Seasonality"
                    value={inputs.seasonality}
                    options={['None', 'Moderate', 'Strong']}
                    onChange={(v) => setInputs({ seasonality: v })}
                    description="Demand spikes at certain times (e.g. Fitness in Jan). Monthly download fluctuations of 30%+ indicate strong seasonality."
                />
            </CardContent>
        </Card>
    );
}
