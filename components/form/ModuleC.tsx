import React from "react";
import { useFormContext } from "@/app/form/form-context";
import { FormSelect } from "./FormHelpers";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export function ModuleC() {
    const { inputs, setInputs } = useFormContext();

    return (
        <Card>
            <CardHeader>
                <CardTitle>Module C: Value & Willingness to Pay</CardTitle>
                <CardDescription>Who buys and why?</CardDescription>
            </CardHeader>
            <CardContent>
                <FormSelect
                    label="Problem Frequency"
                    value={inputs.problemFrequency}
                    options={['Daily', 'Weekly', 'Monthly', 'Rare']}
                    onChange={(v) => setInputs({ problemFrequency: v })}
                    description="How often users face this problem. Daily or weekly frequencies are essential for high-retention 'habit' apps."
                />
                <FormSelect
                    label="Pain Level"
                    value={inputs.painLevel}
                    options={['Nice-to-have', 'Mild', 'Significant', 'Acute']}
                    onChange={(v) => setInputs({ painLevel: v })}
                    description="The intensity of the user's need. 'Acute' pain leads to faster acquisition and higher conversion rates."
                />
                <FormSelect
                    label="Buyer Type"
                    value={inputs.buyerType}
                    options={['Consumer', 'Family', 'Prosumer', 'Business-team']}
                    onChange={(v) => setInputs({ buyerType: v })}
                    description="The target customer persona. B2B and Prosumer segments generally offer higher Life Time Value (LTV)."
                />
                <FormSelect
                    label="Economic Buyer"
                    value={inputs.economicBuyer}
                    options={['Same user', 'Different payer']}
                    onChange={(v) => setInputs({ economicBuyer: v })}
                    description="Is the person using the app also the one paying? Different payers add friction to the sales process."
                />
                <FormSelect
                    label="Willingness to Pay Band"
                    value={inputs.willingnessToPayBand}
                    options={['Low (<£3/mo)', 'Medium (£3-£10)', 'High (£10-£25)', 'Premium (£25+)']}
                    onChange={(v) => setInputs({ willingnessToPayBand: v })}
                    description="The expected price range. Premium pricing requires stronger proof of value and high 'trust' requirements."
                />
                <FormSelect
                    label="Differentiation"
                    value={inputs.differentiation}
                    options={['None', 'One', 'Multiple', 'Step-change']}
                    onChange={(v) => setInputs({ differentiation: v })}
                    description="Your unique advantage over leaders. A 'Step-change' (10x better) provides the strongest market defensibility."
                />
                <FormSelect
                    label="Proof of Value Speed"
                    value={inputs.proofOfValueSpeed}
                    options={['immediate', '1-3 days', '1-2 weeks', 'long']}
                    onChange={(v) => setInputs({ proofOfValueSpeed: v })}
                    description="How quickly the user sees benefit. Immediate value in the first session is critical for converting installs."
                />
                <FormSelect
                    label="Switching Cost"
                    value={inputs.switchingCost}
                    options={['Very low', 'Low', 'Medium', 'High']}
                    onChange={(v) => setInputs({ switchingCost: v })}
                    description="Barriers to leaving your app. High trust and deep personalization create high switching costs over time."
                />
            </CardContent>
        </Card>
    );
}
