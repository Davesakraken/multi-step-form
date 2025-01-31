import { useFormContext } from "@/src/Context/FormContext.";

export default function StepFour() {
  /* 
  1. display plan and billingPeriod with correct price
  2. map over addons with correct price
  3. Add plan value and addons for total per month or year
  */
  const { formData, summaryData } = useFormContext();

  return (
    <>
      <section className="flex flex-col justify-between p-4 bg-magnolia rounded-lg">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="font-bold">
              {formData.plan} ({formData.billingPeriod})
            </h2>
            <p>Change</p>
          </div>
          <p className="font-bold text-lg text-marineBlue">{`$${summaryData.planPrice}${summaryData.billingPeriodSuffix}`}</p>
        </div>
        <hr className="border-b-1 text-lightGray my-5" />
        {formData.addons.map((addon, idx) => (
          <div key={idx} className="flex justify-between mb-3">
            <h2 className="text-coolGray">{addon}</h2>
            <p className="text-marineBlue">+$1{summaryData.billingPeriodSuffix}</p>
          </div>
        ))}
      </section>
      <section className="p-6 flex justify-between">
        <h2 className="text-coolGray">Total (per {formData.billingPeriod.slice(0, -2)})</h2>
        <p className="font-bold text-xl text-purplishBlue">+$12/mo</p>
      </section>
    </>
  );
}
