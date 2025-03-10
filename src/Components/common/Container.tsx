import StepList from "@/src/Components/stepList/StepList";
import Form from "@/src/Components/Form/Form";
import { useState } from "react";

export default function MultiStepForm() {
  const [step, setStep] = useState(1);

  return (
    <section className="flex flex-col md:flex-row justify-between h-[100vh] w-full md:h-[35rem] md:w-[53rem] bg-white md:rounded-xl md:p-5 ">
      <StepList stepNumber={step} />
      <Form stepNumber={step} setStepNumber={setStep} />
    </section>
  );
}
