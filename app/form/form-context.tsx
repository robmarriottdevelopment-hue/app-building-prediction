"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { AppInputs, INITIAL_INPUTS } from "@/lib/types";

interface FormContextType {
    inputs: Partial<AppInputs>;
    setInputs: (updates: Partial<AppInputs>) => void;
    currentStep: number;
    setCurrentStep: (step: number) => void;
    nextStep: () => void;
    prevStep: () => void;
    totalSteps: number;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [inputs, setInputsState] = useState<Partial<AppInputs>>(INITIAL_INPUTS);
    const [currentStep, setCurrentStep] = useState(0);

    // Load from local storage on mount
    useEffect(() => {
        const saved = localStorage.getItem("app-revenue-forecaster-inputs");
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                setInputsState((prev) => ({ ...prev, ...parsed }));
            } catch (e) {
                console.error("Failed to load saved inputs", e);
            }
        }
    }, []);

    // Save to local storage on change
    useEffect(() => {
        localStorage.setItem("app-revenue-forecaster-inputs", JSON.stringify(inputs));
    }, [inputs]);

    const setInputs = (updates: Partial<AppInputs>) => {
        setInputsState((prev) => ({ ...prev, ...updates }));
    };

    const nextStep = () => setCurrentStep((prev) => prev + 1);
    const prevStep = () => setCurrentStep((prev) => Math.max(0, prev - 1));

    // Define total steps based on modules (A to G = 7 modules)
    const totalSteps = 7;

    return (
        <FormContext.Provider
            value={{
                inputs,
                setInputs,
                currentStep,
                setCurrentStep,
                nextStep,
                prevStep,
                totalSteps,
            }}
        >
            {children}
        </FormContext.Provider>
    );
};

export const useFormContext = () => {
    const context = useContext(FormContext);
    if (!context) {
        throw new Error("useFormContext must be used within a FormProvider");
    }
    return context;
};
