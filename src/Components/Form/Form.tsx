import StepOne from "@/src/Components/Form/StepOne";
import StepTwo from "@/src/Components/Form/StepTwo/StepTwo";
import StepThree from "@/src/Components/Form/StepThree/StepThree";
import StepFour from "@/src/Components/Form/StepFour";
import StepFive from "@/src/Components/Form/StepFive";
import { Dispatch, SetStateAction } from "react";
import FormStep from "./FormStep";
import { useFormContext } from "@/src/Context/FormContext.";
import Footer from "./Footer";

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
          <FormStep>
            <StepFive />
          </FormStep>
        );
    }
  };

  return (
    <>
      <div className="absolute bg-sidebar-mobile bg-cover w-[100vw] h-40 md:hidden" />
      <section className="flex flex-col flex-grow justify-between md:px-16 px-6 pt-9 pb-3 md:bg-white bg-lightGray">
        <div>{currentForm()}</div>
        <div className="hidden md:block">
          <Footer stepNumber={stepNumber} setStepNumber={setStepNumber} />
        </div>
      </section>
      <div className="md:hidden p-5">
        <Footer stepNumber={stepNumber} setStepNumber={setStepNumber} />
      </div>
    </>
  );
}
