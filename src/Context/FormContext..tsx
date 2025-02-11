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

type FormErrors = Partial<Record<keyof FormData, string>>;

interface FormContextType {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  summaryData: SummaryData;
  setSummaryData: React.Dispatch<React.SetStateAction<SummaryData>>;
  errors: FormErrors;
  handleFormSubmit: (pageNumber: number) => void;
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
  plan: "Arcade",
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

  const validationSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email format"),
    tel: z.string().min(10, "Phone number must be at least 10 digits"),
  });

  const validateForm = (stepNumber: number) => {
    let result;
    if (stepNumber === 1) {
      result = validationSchema.safeParse(formData);
    } else {
      return true;
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

  const handleFormSubmit = (stepNumber: number) => {
    if (validateForm(stepNumber)) {
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
