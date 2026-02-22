import React from "react";
import { useFormContext } from "@/app/form/form-context";
import { FormSelect, FormInput } from "./FormHelpers";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export function ModuleE() {
    const { inputs, setInputs } = useFormContext();

    return (
        <Card>
            <CardHeader>
                <CardTitle>Module E: Pricing & Paywall</CardTitle>
                <CardDescription>Monetisation strategy details.</CardDescription>
            </CardHeader>
            <CardContent>
                <FormInput
                    label="Price Point (Monthly Equivalent)"
                    value={inputs.pricePoint}
                    type="number"
                    onChange={(v) => setInputs({ pricePoint: parseFloat(v) })}
                    description="The monthly equivalent price. High revenue apps often anchor around £9.99-£14.99/mo for premium prosumer value."
                />
                <FormSelect
                    label="Trial Strategy"
                    value={inputs.trial}
                    options={['None', '3-7 days', '14 days', 'Freemium']}
                    onChange={(v) => setInputs({ trial: v })}
                    description="Reduces friction for conversion. Freemium models or 3-7 day trials are standard for establishing initial value."
                />
                <FormSelect
                    label="Paywall Timing"
                    value={inputs.paywallTiming}
                    options={['before value', 'after first value', 'soft onboarding', 'delayed']}
                    onChange={(v) => setInputs({ paywallTiming: v })}
                    description="When payment is requested. Presenting the paywall after 'first value' is often the most effective for long-term conversion."
                />
                <FormSelect
                    label="Offer Structure"
                    value={inputs.offerStructure}
                    options={['Single', 'Good-Better-Best', 'Monthly+Annual', 'Add-ons+Base']}
                    onChange={(v) => setInputs({ offerStructure: v })}
                    description="How options are presented. Most leaders use a Monthly + Annual anchor, where the annual price shows a 40-60% discount."
                />
                <FormSelect
                    label="Cancellation Friction"
                    value={inputs.cancellationFriction}
                    options={['Easy', 'Moderate', 'Hard']}
                    onChange={(v) => setInputs({ cancellationFriction: v })}
                    description="The ease of ending a subscription. Easy cancellation builds trust, while high friction can protect short-term revenue but damage long-term reputation."
                />
                <FormSelect
                    label="Price Anchoring"
                    value={inputs.priceAnchoring}
                    options={['None', 'parity', 'undercut', 'premium']}
                    onChange={(v) => setInputs({ priceAnchoring: v })}
                    description="Positioning your price against competitors. Parity is common; premium anchoring requires significant differentiation."
                />
                <FormSelect
                    label="Revenue Protection"
                    value={inputs.revenueProtection}
                    options={['None', 'Usage limits', 'Feature gating', 'Both']}
                    onChange={(v) => setInputs({ revenueProtection: v })}
                    description="Guarding your core value. Usage limits or feature gating are key strategies to drive 'freemium' users to paid plans."
                />
            </CardContent>
        </Card>
    );
}
