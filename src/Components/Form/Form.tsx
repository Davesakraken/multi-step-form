import StepFour from "@/src/Components/Form/StepFour";
import StepOne from "@/src/Components/Form/StepOne";
import StepThree from "@/src/Components/Form/StepThree/StepThree";
import StepTwo from "@/src/Components/Form/StepTwo/StepTwo";
import { Dispatch, SetStateAction } from "react";
import FormStep from "./FormStep";

interface StepListProps {
  stepNumber: number;
  setStepNumber: Dispatch<SetStateAction<number>>;
}

export default function Form({ stepNumber, setStepNumber }: StepListProps) {
  const currentForm = () => {
    switch (stepNumber) {
      case 1:
        return (
          <FormStep
            title="Personal info"
            description="Please provide your name, email address, and phone number."
          >
            <StepOne />
          </FormStep>
        );
      case 2:
        return (
          <FormStep
            title="Select your plan"
            description="You have the option of monthly or yearly billing."
          >
            <StepTwo />
          </FormStep>
        );
      case 3:
        return (
          <FormStep title="Pick add-ons" description="Add-ons help enhance your gaming experience.">
            <StepThree />
          </FormStep>
        );
      case 4:
        return (
          <FormStep
            title="Finishing up"
            description="Double-check everything looks OK before confirming."
          >
            <StepFour />
          </FormStep>
        );
    }
  };

  const handleStep = () => {
    stepNumber < 4 && setStepNumber(stepNumber + 1);
  };

  return (
    <>
      <section className="flex flex-col w-full justify-between px-16 pt-9 pb-3">
        <div>{currentForm()}</div>
        <section className="flex justify-between gap-5">
          <button
            className="disabled:opacity-0 font-semibold text-sm"
            disabled={stepNumber === 1}
            onClick={() => {
              setStepNumber(stepNumber - 1);
            }}
          >
            Go Back
          </button>
          <button
            className="bg-marineBlue text-white px-6 py-3 rounded-lg font-semibold text-sm"
            onClick={handleStep}
          >
            {stepNumber === 4 ? "Submit" : "Next Step"}
          </button>
        </section>
      </section>
    </>
  );
}
