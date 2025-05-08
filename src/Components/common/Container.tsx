import StepList from "@/src/Components/stepList/StepList";
import Form from "@/src/Components/Form/Form";
import { useStepContext } from "@/src/Context/StepContext";

export default function MultiStepForm() {
  const { stepNumber, setStepNumber } = useStepContext();

  return (
    <section className="flex flex-col md:flex-row justify-between h-[100vh] w-full md:h-[35rem] md:w-[53rem] bg-white md:rounded-xl md:p-5 ">
      <StepList stepNumber={stepNumber} />
      <Form stepNumber={stepNumber} setStepNumber={setStepNumber} />
    </section>
  );
}
