import { useFormContext } from "@/src/Context/FormContext.";

interface StepListProps {
  stepNumber: number;
  setStepNumber: (step: number) => void;
}

export default function Footer({ stepNumber, setStepNumber }: StepListProps) {
  const { validateForm } = useFormContext();

  const handleStep = () => {
    if (validateForm(stepNumber) && stepNumber < 5) {
      setStepNumber(stepNumber + 1);
    }
  };

  return (
    <section className="flex justify-between gap-5 ">
      <button
        className="disabled:opacity-0 font-semibold text-sm"
        disabled={stepNumber === 1 || stepNumber === 5}
        onClick={() => {
          setStepNumber(stepNumber - 1);
        }}
      >
        Go Back
      </button>
      <button
        className="bg-marineBlue text-white px-6 py-3 rounded-lg font-semibold text-sm disabled:opacity-0"
        onClick={handleStep}
        disabled={stepNumber === 5}
      >
        {stepNumber === 4 ? "Submit" : "Next Step"}
      </button>
    </section>
  );
}
