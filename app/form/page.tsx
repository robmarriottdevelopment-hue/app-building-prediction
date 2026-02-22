"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useFormContext } from "./form-context";
import { ModuleA } from "@/components/form/ModuleA";
import { ModuleB } from "@/components/form/ModuleB";
import { ModuleC } from "@/components/form/ModuleC";
import { ModuleD } from "@/components/form/ModuleD";
import { ModuleE } from "@/components/form/ModuleE";
import { ModuleF } from "@/components/form/ModuleF";
import { ModuleG } from "@/components/form/ModuleG";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

export default function FormPage() {
    const { currentStep, nextStep, prevStep, totalSteps, inputs } = useFormContext();
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const renderStep = () => {
        switch (currentStep) {
            case 0: return <ModuleA />;
            case 1: return <ModuleB />;
            case 2: return <ModuleC />;
            case 3: return <ModuleD />;
            case 4: return <ModuleE />;
            case 5: return <ModuleF />;
            case 6: return <ModuleG />;
            default: return <div className="p-4">Unknown Step</div>;
        }
    };

    const handleFinish = async () => {
        setIsSubmitting(true);
        try {
            const res = await fetch('/api/forecast', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(inputs),
            });

            if (!res.ok) throw new Error('Forecast failed');

            const data = await res.json();
            sessionStorage.setItem('forecast-result', JSON.stringify(data));
            router.push('/results');
        } catch (error) {
            console.error(error);
            alert('Failed to generate forecast. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="max-w-3xl mx-auto p-4 sm:p-8">
            <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                    <h2 className="text-lg font-semibold">Step {currentStep + 1} of {totalSteps}</h2>
                    <span className="text-sm text-muted-foreground">{Math.round(((currentStep + 1) / totalSteps) * 100)}% Completed</span>
                </div>
                <div className="h-2 w-full bg-slate-800 rounded-full">
                    <div
                        className="h-full bg-teal-500 rounded-full transition-all duration-300"
                        style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
                    />
                </div>
            </div>

            <div className="mb-8 min-h-[400px]">
                {renderStep()}
            </div>

            <div className="flex justify-between">
                <Button
                    variant="outline"
                    onClick={currentStep === 0 ? () => router.push('/') : prevStep}
                >
                    Back
                </Button>
                {currentStep === totalSteps - 1 ? (
                    <Button onClick={handleFinish} disabled={isSubmitting}>
                        {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                        Generate Forecast
                    </Button>
                ) : (
                    <Button onClick={nextStep}>Next</Button>
                )}
            </div>
        </div>
    );
}
