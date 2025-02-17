"use client";

import Container from "@/src/Components/common/Container";
import Form from "@/src/Components/Form/Form";
import StepList from "@/src/Components/stepList/StepList";
import { useState } from "react";

export default function Home() {
  const [step, setStep] = useState(1);

  return (
    <main className="flex min-h-screen items-center justify-center">
      <Container>
        <StepList stepNumber={step} />
        <Form stepNumber={step} setStepNumber={setStep} />
      </Container>
    </main>
  );
}
