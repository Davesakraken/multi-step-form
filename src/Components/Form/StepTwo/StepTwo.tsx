import { useEffect, useState } from "react";
import BillingPeriodToggle from "@/src/Components/BillingPeriodToggle/BillingPeriodToggle";
import PricingCard from "@/src/Components/Form/StepTwo/PricingCard";
import { useFormContext } from "@/src/Context/FormContext.";

export default function StepTwo() {
  const { formData, setFormData } = useFormContext();
  const [selectedPlan, setSelectedPlan] = useState<string>("");
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly");

  useEffect(() => {
    setFormData({ ...formData, plan: selectedPlan, billingPeriod: billingPeriod });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedPlan, billingPeriod]);

  const handlePrice = (monthlyPrice: number, YearlyPrice: number) =>
    billingPeriod === "monthly" ? monthlyPrice : YearlyPrice;

  return (
    <form>
      <section className="flex justify-around mb-7">
        <PricingCard
          title="Arcade"
          price={handlePrice(9, 90)}
          features={["2 months free"]}
          iconPath={"images/arcade-icon.svg"}
          billingPeriod={billingPeriod}
          setSelectedPlan={setSelectedPlan}
          selectedPlan={selectedPlan}
        />
        <PricingCard
          title="Advanced"
          price={handlePrice(12, 120)}
          features={["2 months free"]}
          iconPath={"images/advanced-icon.svg"}
          billingPeriod={billingPeriod}
          setSelectedPlan={setSelectedPlan}
          selectedPlan={selectedPlan}
        />
        <PricingCard
          title="Pro"
          price={handlePrice(15, 150)}
          features={["2 months free"]}
          iconPath={"images/pro-icon.svg"}
          billingPeriod={billingPeriod}
          setSelectedPlan={setSelectedPlan}
          selectedPlan={selectedPlan}
        />
      </section>
      <BillingPeriodToggle setBillingPeriod={setBillingPeriod} />
    </form>
  );
}
