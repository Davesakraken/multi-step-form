import { useEffect, useState } from "react";
import BillingPeriodToggle from "@/src/Components/BillingPeriodToggle/BillingPeriodToggle";
import PricingCard from "@/src/Components/Form/StepTwo/PricingCard";
import { useFormContext } from "@/src/Context/FormContext.";

export default function StepTwo() {
  const { formData, setFormData, setSummaryData } = useFormContext();
  const [selectedPlan, setSelectedPlan] = useState<string>(formData.plan);
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">(formData.billingPeriod);

  const calculatePrice = (monthlyPrice: number, YearlyPrice: number) =>
    billingPeriod === "monthly" ? monthlyPrice : YearlyPrice;

  useEffect(() => {
    setFormData({ ...formData, plan: selectedPlan, billingPeriod: billingPeriod });

    const getPlanPrice = () => {
      switch (selectedPlan) {
        case "Arcade":
          return calculatePrice(9, 90);
        case "Advanced":
          return calculatePrice(12, 120);
        case "Pro":
          return calculatePrice(15, 150);
        default:
          return calculatePrice(9, 90);
      }
    };

    setSummaryData({
      planPrice: getPlanPrice(),
      billingPeriodSuffix: billingPeriod === "monthly" ? "/mo" : "/yr",
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedPlan, billingPeriod]);

  return (
    <form>
      <section className="flex flex-col md:flex-row justify-between mb-7">
        <PricingCard
          title="Arcade"
          price={calculatePrice(9, 90)}
          features={["2 months free"]}
          iconPath={"images/arcade-icon.svg"}
          billingPeriod={billingPeriod}
          setSelectedPlan={setSelectedPlan}
          selectedPlan={selectedPlan}
        />
        <PricingCard
          title="Advanced"
          price={calculatePrice(12, 120)}
          features={["2 months free"]}
          iconPath={"images/advanced-icon.svg"}
          billingPeriod={billingPeriod}
          setSelectedPlan={setSelectedPlan}
          selectedPlan={selectedPlan}
        />
        <PricingCard
          title="Pro"
          price={calculatePrice(15, 150)}
          features={["2 months free"]}
          iconPath={"images/pro-icon.svg"}
          billingPeriod={billingPeriod}
          setSelectedPlan={setSelectedPlan}
          selectedPlan={selectedPlan}
        />
      </section>
      <BillingPeriodToggle billingPeriod={billingPeriod} setBillingPeriod={setBillingPeriod} />
    </form>
  );
}
