import React from "react";
import { useFormContext } from "@/app/form/form-context";
import { FormSelect } from "./FormHelpers";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export function ModuleD() {
    const { inputs, setInputs } = useFormContext();

    return (
        <Card>
            <CardHeader>
                <CardTitle>Module D: Retention & Habit Mechanics</CardTitle>
                <CardDescription>How will users stick around?</CardDescription>
            </CardHeader>
            <CardContent>
                <FormSelect
                    label="Core Loop Clarity"
                    value={inputs.coreLoopClarity}
                    options={['Weak', 'Moderate', 'Strong']}
                    onChange={(v) => setInputs({ coreLoopClarity: v })}
                    description="Is the repeat behaviour obvious? A strong core loop can be described in one sentence and has strong session-based repetition."
                />
                <FormSelect
                    label="Progress Visibility"
                    value={inputs.progressVisibility}
                    options={['None', 'Simple stats', 'Levels-badges', 'Progress map-milestones']}
                    onChange={(v) => setInputs({ progressVisibility: v })}
                    description="How the user sees their advancement. Map-based milestones or levels/badges provide stronger long-term motivation than simple stats."
                />
                <FormSelect
                    label="Variable Reward"
                    value={inputs.variableReward}
                    options={['None', 'Low', 'Medium', 'High']}
                    onChange={(v) => setInputs({ variableReward: v })}
                    description="Uncertainty in rewards that drives dopamine. High variable reward (like social feeds or random drops) is key to high engagement."
                />
                <FormSelect
                    label="Streaks"
                    value={inputs.streaks}
                    options={['None', 'Optional', 'Core']}
                    onChange={(v) => setInputs({ streaks: v })}
                    description="Mechanics that reward consecutive daily usage. Core streaks are highly effective for habit-forming apps like fitness or language learning."
                />
                <FormSelect
                    label="Personalisation"
                    value={inputs.personalisation}
                    options={['None', 'Light', 'Medium', 'Deep']}
                    onChange={(v) => setInputs({ personalisation: v })}
                    description="Does the app adapt to the user? Deep personalization based on user data increases utility and significantly raises switching costs."
                />
                <FormSelect
                    label="Triggers"
                    value={inputs.triggers}
                    options={['None', 'Time-based', 'Context-event', 'Both']}
                    onChange={(v) => setInputs({ triggers: v })}
                    description="What brings the user back? A combination of time-based notifications and context-aware events creates the most effective retention loops."
                />
                <FormSelect
                    label="Social Reinforcement"
                    value={inputs.socialReinforcement}
                    options={['None', 'Sharing', 'Community async', 'Competitive']}
                    onChange={(v) => setInputs({ socialReinforcement: v })}
                    description="Visible comparison or community feedback. Leaderboards and community feeds leverage social proof to drive long-term retention."
                />
                <FormSelect
                    label="Novelty Refresh"
                    value={inputs.noveltyRefresh}
                    options={['None', 'Monthly', 'Weekly', 'Daily-on-demand']}
                    onChange={(v) => setInputs({ noveltyRefresh: v })}
                    description="How often new content or variability appears. Daily or weekly updates prevent user burnout and maintain high LTV."
                />
                <FormSelect
                    label="Effort to Reward Ratio"
                    value={inputs.effortToReward}
                    options={['High effort-low reward', 'Moderate', 'Low effort-high reward']}
                    onChange={(v) => setInputs({ effortToReward: v })}
                    description="The perceived value vs work required. Low effort-high reward experiences in the first session lead to higher day-1 retention."
                />
                <FormSelect
                    label="Trust Requirement"
                    value={inputs.trustRequirement}
                    options={['Low', 'Medium', 'High']}
                    onChange={(v) => setInputs({ trustRequirement: v })}
                    description="The amount of sensitive data required. High trust requirements (like finance or health) can hinder acquisition but create deep lock-in."
                />
            </CardContent>
        </Card>
    );
}
