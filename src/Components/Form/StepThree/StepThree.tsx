import Addon from "@/src/Components/Form/StepThree/Addon";
import { useFormContext } from "@/src/Context/FormContext.";
import { useEffect, useState } from "react";

export default function StepThree() {
  const { formData, setFormData, summaryData } = useFormContext();
  const [selectedAddons, setSelectedAddons] = useState<{ title: string; value: number }[]>(
    formData.addons
  );

  const handleAddonPrice = (period: any, monthly_price: number, yearly_price: number) =>
    period === "monthly" ? monthly_price : yearly_price;

  useEffect(() => {
    setFormData({ ...formData, addons: selectedAddons });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedAddons]);

  return (
    <section className="flex flex-col gap-4">
      <Addon
        title="Online service"
        description="Access to multiplayer games"
        price={handleAddonPrice(formData.billingPeriod, 1, 10)}
        selected={{ selectedAddons, setSelectedAddons }}
        suffix={summaryData.billingPeriodSuffix}
      />
      <Addon
        title="Larger storage"
        description="Extra 1TB of cloud save"
        price={handleAddonPrice(formData.billingPeriod, 2, 20)}
        selected={{ selectedAddons, setSelectedAddons }}
        suffix={summaryData.billingPeriodSuffix}
      />
      <Addon
        title="Customizable Profile"
        description="Custom theme on your profile"
        price={handleAddonPrice(formData.billingPeriod, 2, 20)}
        selected={{ selectedAddons, setSelectedAddons }}
        suffix={summaryData.billingPeriodSuffix}
      />
    </section>
  );
}
