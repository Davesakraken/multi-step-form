import { useFormContext } from "@/src/Context/FormContext.";
import { useStepContext } from "@/src/Context/StepContext";

export default function StepFour() {
  const { formData, summaryData } = useFormContext();
  const { setStepNumber } = useStepContext();

  const initialValue = 0;
  const addonTotal = formData.addons.reduce((acc, current) => acc + current.value, initialValue);
  const total = addonTotal + summaryData.planPrice;

  return (
    <>
      <section className="flex flex-col justify-between p-4 bg-magnolia rounded-lg">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="font-bold">
              {formData.plan} ({formData.billingPeriod})
            </h2>
            <p className="hover:underline hover:cursor-pointer" onClick={() => setStepNumber(2)}>
              Change
            </p>
          </div>
          <p className="font-bold text-lg text-marineBlue">{`$${summaryData.planPrice}${summaryData.billingPeriodSuffix}`}</p>
        </div>
        <hr className="border-b-1 text-lightGray my-5" />
        {formData.addons.map((addon, idx) => (
          <div key={idx} className="flex justify-between mb-3">
            <h2 className="text-coolGray">{addon.title}</h2>
            <p className="text-marineBlue">
              +{addon.value}
              {summaryData.billingPeriodSuffix}
            </p>
          </div>
        ))}
      </section>
      <section className="p-6 flex justify-between">
        <h2 className="text-coolGray">Total (per {formData.billingPeriod.slice(0, -2)})</h2>
        <p className="font-bold text-xl text-purplishBlue">
          +${total}
          {summaryData.billingPeriodSuffix}
        </p>
      </section>
    </>
  );
}
