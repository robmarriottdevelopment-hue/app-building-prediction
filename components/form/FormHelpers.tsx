import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { WithNotSure } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { HelpCircle, Info } from "lucide-react";

interface FormSelectProps<T extends string> {
    label: string;
    value: WithNotSure<T> | undefined;
    options: T[];
    onChange: (value: WithNotSure<T>) => void;
    description?: string;
    hasNotSure?: boolean;
}

export function FormSelect<T extends string>({
    label,
    value,
    options,
    onChange,
    description,
    hasNotSure = true,
}: FormSelectProps<T>) {
    const [showDescription, setShowDescription] = useState(false);

    return (
        <div className="grid w-full items-center gap-1.5 mb-6">
            <div className="flex items-center justify-between">
                <Label className="text-base font-medium">{label}</Label>
                {description && (
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setShowDescription(!showDescription)}
                        className="text-xs h-7 px-2 text-teal-500 hover:text-teal-400 hover:bg-teal-500/10"
                    >
                        <Info className="w-3 h-3 mr-1" />
                        description
                    </Button>
                )}
            </div>
            {showDescription && description && (
                <div className="p-3 bg-teal-500/5 border border-teal-500/20 rounded-md mb-2 animate-in fade-in slide-in-from-top-1 duration-200">
                    <p className="text-sm text-slate-400 leading-relaxed italic">
                        {description}
                    </p>
                </div>
            )}
            <Select
                value={value || ""}
                onChange={(e) => onChange(e.target.value as WithNotSure<T>)}
            >
                <option value="" disabled className="bg-slate-900 text-white">Select...</option>
                {options.map((opt) => (
                    <option key={opt} value={opt} className="bg-slate-900 text-white">
                        {opt}
                    </option>
                ))}
                {hasNotSure && <option value="Not sure" className="bg-slate-900 text-white">Not sure</option>}
            </Select>
        </div>
    );
}

interface FormInputProps {
    label: string;
    value: number | string | undefined;
    type?: string;
    onChange: (value: any) => void;
    description?: string;
}

export function FormInput({
    label,
    value,
    type = "text",
    onChange,
    description,
}: FormInputProps) {
    const [showDescription, setShowDescription] = useState(false);

    return (
        <div className="grid w-full items-center gap-1.5 mb-6">
            <div className="flex items-center justify-between">
                <Label className="text-base font-medium">{label}</Label>
                {description && (
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setShowDescription(!showDescription)}
                        className="text-xs h-7 px-2 text-teal-500 hover:text-teal-400 hover:bg-teal-500/10"
                    >
                        <Info className="w-3 h-3 mr-1" />
                        description
                    </Button>
                )}
            </div>
            {showDescription && description && (
                <div className="p-3 bg-teal-500/5 border border-teal-500/20 rounded-md mb-2 animate-in fade-in slide-in-from-top-1 duration-200">
                    <p className="text-sm text-slate-400 leading-relaxed italic">
                        {description}
                    </p>
                </div>
            )}
            <Input
                type={type}
                value={value || ""}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
}
