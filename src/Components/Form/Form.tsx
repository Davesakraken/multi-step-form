import StepOne from "@/src/Components/Form/StepOne";
import StepTwo from "@/src/Components/Form/StepTwo/StepTwo";
import StepThree from "@/src/Components/Form/StepThree/StepThree";
import StepFour from "@/src/Components/Form/StepFour";
import StepFive from "@/src/Components/Form/StepFive";
import { Dispatch, SetStateAction } from "react";
import FormStep from "./FormStep";
import { useFormContext } from "@/src/Context/FormContext.";

interface StepListProps {
  stepNumber: number;
  setStepNumber: Dispatch<SetStateAction<number>>;
}

export default function Form({ stepNumber, setStepNumber }: StepListProps) {
  const { validateForm } = useFormContext();

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
      case 5:
        return (
          <FormStep title="" description="">
            <StepFive />
          </FormStep>
        );
    }
  };

  const handleStep = () => {
    if (validateForm(stepNumber) && stepNumber < 5) {
      setStepNumber(stepNumber + 1);
    }
  };

  return (
    <>
      <section className="flex flex-col flex-grow justify-between px-16 pt-9 pb-3">
        <div>{currentForm()}</div>
        <section className="flex justify-between gap-5">
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
      </section>
    </>
  );
}
