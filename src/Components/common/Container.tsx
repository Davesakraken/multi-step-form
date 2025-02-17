import StepList from "@/src/Components/stepList/StepList";
import Form from "@/src/Components/Form/Form";
import { useState } from "react";

export default function MultiStepForm() {
  const [step, setStep] = useState(1);

  return (
    <section className="flex h-[100vh] w-full md:h-[35rem] md:w-[53rem] bg-white md:rounded-xl p-5 justify-between">
      <StepList stepNumber={step} />
      <Form stepNumber={step} setStepNumber={setStep} />
    </section>
  );
}
