"use client";
import { createContext, ReactNode, useContext, useState } from "react";
import invariant from "tiny-invariant";

interface FormData {
  name: string;
  emailAddress: string;
  phoneNumber: number;
  plan: string;
  billingCycle: "monthly" | "yearly";
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
  emailAddress: "",
  phoneNumber: 0,
  plan: "",
  billingCycle: "monthly",
  addons: [],
};

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<FormData>(defaultFormValues);
  return <FormContext.Provider value={{ formData, setFormData }}>{children}</FormContext.Provider>;
};
