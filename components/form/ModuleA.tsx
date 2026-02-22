import React from "react";
import { useFormContext } from "@/app/form/form-context";
import { FormSelect } from "./FormHelpers";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Platform, Monetisation, Category, Archetype, TargetGeo } from "@/lib/types";

const PLATFORMS: Platform[] = ['Android', 'iOS', 'Both'];
const MONETISATION: Monetisation[] = ['Subscription', 'IAP', 'Paid', 'Ads', 'Hybrid (Sub+IAP)', 'Hybrid (Ads+IAP)', 'Hybrid (Ads+Sub)'];
const CATEGORIES: Category[] = ['Health&Fitness', 'Productivity', 'Education', 'Finance', 'PhotoVideo', 'Social', 'Lifestyle', 'Entertainment', 'Utilities', 'Travel', 'Other'];
const ARCHETYPES: Archetype[] = ['Tracker', 'Coach', 'Content library', 'Tool', 'Marketplace', 'Community', 'Game casual', 'Game midcore', 'AI assistant-generator', 'Training course-learning path'];
const GEOS: TargetGeo[] = ['Global', 'US-CA', 'UK-IE', 'EU core', 'India-SEA', 'LATAM', 'Custom mix'];

export function ModuleA() {
    const { inputs, setInputs } = useFormContext();

    return (
        <Card>
            <CardHeader>
                <CardTitle>Module A: App Identity</CardTitle>
                <CardDescription>Tell us about your app concept.</CardDescription>
            </CardHeader>
            <CardContent>
                <FormSelect
                    label="Platform"
                    value={inputs.platform}
                    options={PLATFORMS}
                    onChange={(v) => setInputs({ platform: v })}
                    hasNotSure={false}
                    description="The operating system(s) your app will target. iOS typically has higher ARPDAU, while Android offers greater scale."
                />
                <FormSelect
                    label="Monetisation Model"
                    value={inputs.monetisation}
                    options={MONETISATION}
                    onChange={(v) => setInputs({ monetisation: v })}
                    hasNotSure={false}
                    description="How your app generates revenue. This choice significantly impacts your retention requirements and user friction."
                />
                <FormSelect
                    label="Category"
                    value={inputs.category}
                    options={CATEGORIES}
                    onChange={(v) => setInputs({ category: v })}
                    hasNotSure={false}
                    description="The primary store category. Each category has its own benchmarks for LTV and organic discovery."
                />
                <FormSelect
                    label="Archetype"
                    value={inputs.archetype}
                    options={ARCHETYPES}
                    onChange={(v) => setInputs({ archetype: v })}
                    hasNotSure={false}
                    description="The structural pattern of the app (tracker, tool, AI assistant, etc.). This defines the core value delivery model and expected usage frequency."
                />
                <FormSelect
                    label="Target Geo"
                    value={inputs.targetGeo}
                    options={GEOS}
                    onChange={(v) => setInputs({ targetGeo: v })}
                    hasNotSure={false}
                    description="The primary geographical market for launch. Markets like US-CA have higher WTP but much higher acquisition costs."
                />
                <FormSelect
                    label="Language Support"
                    value={inputs.languageSupport}
                    options={['English', 'English+1-2', 'Multi 3+']}
                    onChange={(v) => setInputs({ languageSupport: v })}
                    hasNotSure={false}
                    description="The level of localization. Multi-language support can significantly increase the addressable market size in non-English regions."
                />
            </CardContent>
        </Card>
    );
}
