import Addon from "@/src/Components/Form/StepThree/Addon";
import { useFormContext } from "@/src/Context/FormContext.";
import { useEffect, useState } from "react";

export default function StepThree() {
  const { formData, setFormData, summaryData } = useFormContext();
  const [selectedAddons, setSelectedAddons] = useState<{ title: string; value: number }[]>(
    formData.addons
  );

  const handleAddonPrice = (monthly_price: number, yearly_price: number) =>
    formData.billingPeriod === "monthly" ? monthly_price : yearly_price;

  useEffect(() => {
    const updatedAddons = selectedAddons.map((addon) => {
      const newValue = (() => {
        switch (addon.title) {
          case "Online service":
            return handleAddonPrice(1, 10);
          case "Larger storage":
          case "Customizable Profile":
            return handleAddonPrice(2, 20);
          default:
            return addon.value;
        }
      })();

      return {
        ...addon,
        value: newValue,
      };
    });

    setFormData({ ...formData, addons: updatedAddons });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedAddons]);

  return (
    <section className="flex flex-col gap-4">
      <Addon
        title="Online service"
        description="Access to multiplayer games"
        price={handleAddonPrice(1, 10)}
        selected={{ selectedAddons, setSelectedAddons }}
        suffix={summaryData.billingPeriodSuffix}
      />
      <Addon
        title="Larger storage"
        description="Extra 1TB of cloud save"
        price={handleAddonPrice(2, 20)}
        selected={{ selectedAddons, setSelectedAddons }}
        suffix={summaryData.billingPeriodSuffix}
      />
      <Addon
        title="Customizable Profile"
        description="Custom theme on your profile"
        price={handleAddonPrice(2, 20)}
        selected={{ selectedAddons, setSelectedAddons }}
        suffix={summaryData.billingPeriodSuffix}
      />
    </section>
  );
}
