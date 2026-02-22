import type { Metadata } from "next";
import { FormProvider } from "./form-context";

export const metadata: Metadata = {
    title: "New Forecast | App Revenue Forecaster",
};

export default function FormLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <FormProvider>{children}</FormProvider>;
}
