import React from "react";
import { useFormContext } from "@/app/form/form-context";
import { FormSelect } from "./FormHelpers";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export function ModuleG() {
    const { inputs, setInputs } = useFormContext();

    return (
        <Card>
            <CardHeader>
                <CardTitle>Module G: Portfolio Strategy</CardTitle>
                <CardDescription>Strategic context.</CardDescription>
            </CardHeader>
            <CardContent>
                <FormSelect
                    label="Cross-Promo Opportunities"
                    value={inputs.crossPromo}
                    options={['None', '1-2', '3-5', 'Ecosystem']}
                    onChange={(v) => setInputs({ crossPromo: v })}
                    description="Ability to drive installs from other owned apps. Leveraging an existing ecosystem can dramatically lower your acquisition costs."
                />
                <FormSelect
                    label="Shared Backend/Analytics"
                    value={inputs.sharedBackendAnalytics}
                    options={['No', 'Partial', 'Yes']}
                    onChange={(v) => setInputs({ sharedBackendAnalytics: v })}
                    description="Using common infrastructure across multiple apps. Shared analytics and subscription engines reduce operational costs and improve data insights."
                />
                <FormSelect
                    label="Kill/Scale Governance"
                    value={inputs.killScaleGovernance}
                    options={['None', 'Monthly', 'Fortnightly', 'Weekly']}
                    onChange={(v) => setInputs({ killScaleGovernance: v })}
                    description="Frequency of formal performance reviews. Regular evaluation (weekly/fortnightly) is key to deciding whether to pivot, kill, or scale a project."
                />
                <FormSelect
                    label="Decision Rights"
                    value={inputs.decisionRights}
                    options={['Solo', 'Advisor', 'Investor final say']}
                    onChange={(v) => setInputs({ decisionRights: v })}
                    description="Who has the final say on strategic changes. Clear decision rights (Solo or Advisor led) speed up iteration and response to market signals."
                />
                <FormSelect
                    label="Primary Success Metric"
                    value={inputs.primarySuccessMetric}
                    options={['Revenue', 'Retention', 'User growth', 'Lead-gen']}
                    onChange={(v) => setInputs({ primarySuccessMetric: v })}
                    description="The 'North Star' that determines success. Focusing on ONE metric (e.g. D30 Retention or ARPU) before launch ensures team alignment."
                />
            </CardContent>
        </Card>
    );
}
