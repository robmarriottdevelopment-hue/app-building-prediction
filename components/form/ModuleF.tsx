import React from "react";
import { useFormContext } from "@/app/form/form-context";
import { FormSelect } from "./FormHelpers";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export function ModuleF() {
    const { inputs, setInputs } = useFormContext();

    return (
        <Card>
            <CardHeader>
                <CardTitle>Module F: Execution Capability</CardTitle>
                <CardDescription>Can you pull this off?</CardDescription>
            </CardHeader>
            <CardContent>
                <FormSelect
                    label="MVP Build Time"
                    value={inputs.mvpBuildTime}
                    options={['<2 weeks', '2-4 weeks', '1-2 months', '3+ months']}
                    onChange={(v) => setInputs({ mvpBuildTime: v })}
                    description="The estimated time to reach a functional product. Faster builds allow for quicker market validation and lower initial risk."
                />
                <FormSelect
                    label="Iteration Cadence"
                    value={inputs.iterationCadence}
                    options={['Weekly', 'Fortnightly', 'Monthly', 'Ad hoc']}
                    onChange={(v) => setInputs({ iterationCadence: v })}
                    description="How often you can ship updates. Weekly or fortnightly cadences are ideal for responding to user feedback and fixing bugs."
                />
                <FormSelect
                    label="Creative Quality"
                    value={inputs.creativeQuality}
                    options={['Basic', 'Solid', 'Premium']}
                    onChange={(v) => setInputs({ creativeQuality: v })}
                    description="The visual polish and perceived credibility. 'Premium' quality (typography, spacing, icons) dramatically improves conversion rates."
                />
                <FormSelect
                    label="Instrumentation"
                    value={inputs.instrumentation}
                    options={['Minimal', 'Standard', 'Advanced']}
                    onChange={(v) => setInputs({ instrumentation: v })}
                    description="Tracking user behaviour. Advanced instrumentation (events, funnels) is critical for identifying and fixing retention bottlenecks."
                />
                <FormSelect
                    label="Launch Plan"
                    value={inputs.launchPlan}
                    options={['store-only', 'ASO+content', 'ASO+content+partnerships', 'paid testing']}
                    onChange={(v) => setInputs({ launchPlan: v })}
                    description="Strategy for initial users. A combined plan of ASO, content, and paid testing provides the best data for scaling."
                />
                <FormSelect
                    label="Budget (First 90 Days)"
                    value={inputs.budget90Days}
                    options={['£0-500', '£500-2k', '£2k-10k', '£10k+']}
                    onChange={(v) => setInputs({ budget90Days: v })}
                    description="Available capital for acquisition and operations. Even small budgets (£500-2k) are useful for testing initial conversion assumptions."
                />
                <FormSelect
                    label="Support Model"
                    value={inputs.supportModel}
                    options={['None', 'Email', 'In-app+SLA']}
                    onChange={(v) => setInputs({ supportModel: v })}
                    description="Handling user issues. In-app support with service level agreements (SLAs) helps maintain high ratings and trust."
                />
                <FormSelect
                    label="Compliance Readiness"
                    value={inputs.complianceReadiness}
                    options={['Not ready', 'Partial', 'Solid']}
                    onChange={(v) => setInputs({ complianceReadiness: v })}
                    description="Adherence to store policies (GDPR, ATT, etc.). Being 'Solid' reduces the risk of rejection or app removal."
                />
            </CardContent>
        </Card>
    );
}
