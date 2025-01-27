export default function StepFour() {
  /* 
  1. display plan and billingPeriod with correct price
  2. map over addons with correct price
  3. Add plan value and addons for total per month or year
  */
  return (
    <>
      <section className="flex flex-col justify-between p-4 bg-magnolia rounded-lg">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="font-bold">Arcade (Monthly)</h2>
            <p>Change</p>
          </div>
          <p className="font-bold text-lg text-marineBlue">$9/mo</p>
        </div>
        <hr className="border-b-1 text-lightGray my-5" />
        <div className="flex justify-between mb-3">
          <h2 className="text-coolGray">Online service</h2>
          <p className="text-marineBlue">+$1/mo</p>
        </div>
        <div className="flex justify-between">
          <h2 className="text-coolGray">Larger storage</h2>
          <p>+$2/mo</p>
        </div>
      </section>
      <section className="p-6 flex justify-between">
        <h2 className="text-coolGray">Total (per month)</h2>
        <p className="font-bold text-xl text-purplishBlue">+$12/mo</p>
      </section>
    </>
  );
}
