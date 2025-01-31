"use client";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
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

interface FormContextType {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
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

const formSchema = z.object({
  name: z.string(),
  email: z.string(),
  tel: z.string(),
  plan: z.string(),
  billingPeriod: z.union([z.literal("monthly"), z.literal("yearly")]),
  addons: z.array(z.string()),
});

// create errors object that is returned with any errors

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<FormData>(defaultFormValues);
  return <FormContext.Provider value={{ formData, setFormData }}>{children}</FormContext.Provider>;
};
