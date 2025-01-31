"use client";
import { createContext, ReactNode, useContext, useState } from "react";
import invariant from "tiny-invariant";
import { z } from "zod";

interface FormData {
  name: string;
  email: string;
  tel: string;
  plan: string;
  billingPeriod: "monthly" | "yearly";
  addons: string[];
}

interface SummaryData {
  planPrice: number;
  billingPeriodSuffix: "/mo" | "/yr";
}

interface FormContextType {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  summaryData: SummaryData;
  setSummaryData: React.Dispatch<React.SetStateAction<SummaryData>>;
}

const FormContext = createContext<FormContextType | null>(null);

export const useFormContext = () => {
  const ctx = useContext(FormContext);
  invariant(ctx, "Context called outside of provider");
  return ctx;
};

const defaultFormValues: FormData = {
  name: "",
  email: "",
  tel: "",
  plan: "",
  billingPeriod: "monthly",
  addons: [],
};

const defaultSummaryValues: SummaryData = {
  planPrice: 0,
  billingPeriodSuffix: "/mo",
};

const formSchema = z.object({
  name: z.string(),
  email: z.string(),
  tel: z.string(),
  plan: z.string(),
  billingPeriod: z.union([z.literal("monthly"), z.literal("yearly")]),
});

// create errors object that is returned with any errors

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<FormData>(defaultFormValues);
  const [summaryData, setSummaryData] = useState<SummaryData>(defaultSummaryValues);

  return (
    <FormContext.Provider value={{ formData, setFormData, summaryData, setSummaryData }}>
      {children}
    </FormContext.Provider>
  );
};
