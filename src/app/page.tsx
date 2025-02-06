"use client";

import FormContainer from "@/src/Components/common/FormContainer";
import Form from "@/src/Components/Form/Form";
import StepList from "@/src/Components/stepList/StepList";
import { useState } from "react";

export default function Home() {
  const [step, setStep] = useState(1);

  return (
    <main className="flex min-h-screen items-center justify-center">
      {/* <DarkMode /> */}
      <FormContainer>
        <StepList stepNumber={step} />
        <Form stepNumber={step} setStepNumber={setStep} />
      </FormContainer>
    </main>
  );
}
