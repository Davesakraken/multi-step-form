"use client";
import { Dispatch, SetStateAction, useContext, useState } from "react";
import { createContext } from "react";
import invariant from "tiny-invariant";

interface StepListProps {
  stepNumber: number;
  setStepNumber: Dispatch<SetStateAction<number>>;
}

const stepContext = createContext<StepListProps | null>(null);

export const useStepContext = () => {
  const ctx = useContext(stepContext);
  invariant(ctx, "Context called outside of provider");
  return ctx;
};

export const StepProvider = ({ children }: { children: React.ReactNode }) => {
  const [step, setStep] = useState(1);

  return (
    <stepContext.Provider value={{ stepNumber: step, setStepNumber: setStep }}>
      {children}
    </stepContext.Provider>
  );
};
