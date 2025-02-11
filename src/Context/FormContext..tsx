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
  addons: { title: string; value: number }[];
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
  errors: {};
  handleFormSubmit: () => void;
  validateForm: (stepNumber: number) => boolean;
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

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<FormData>(defaultFormValues);
  const [summaryData, setSummaryData] = useState<SummaryData>(defaultSummaryValues);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const pageOneSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email format"),
    tel: z.string().min(10, "Phone number must be at least 10 digits"),
  });

  const pageTwoSchema = z.object({
    tel: z.string().min(10, "Phone number must be at least 10 digits"),
  });

  const validateForm = (pageNumber: number) => {
    let result;
    if (pageNumber === 1) {
      result = pageOneSchema.safeParse(formData);
    } else if (pageNumber === 2) {
      result = pageTwoSchema.safeParse(formData);
    } else {
      return;
    }

    if (!result.success) {
      const formattedErrors: Record<string, string> = {};

      result.error.errors.forEach((err) => {
        if (err.path.length) {
          formattedErrors[err.path[0]] = err.message;
        }
      });
      setErrors(formattedErrors);
      return false;
    }
    setErrors({});
    return true;
  };

  const handleFormSubmit = (pageNumber: number) => {
    if (validateForm(pageNumber)) {
      console.log("form submitted successfully!");
    } else {
      console.log("validation errors", errors);
    }
  };

  return (
    <FormContext.Provider
      value={{
        formData,
        setFormData,
        summaryData,
        setSummaryData,
        errors,
        handleFormSubmit,
        validateForm,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
