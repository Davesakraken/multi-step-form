import Addon from "@/src/Components/Form/StepThree/Addon";
import { useFormContext } from "@/src/Context/FormContext.";
import { useEffect, useState } from "react";

export default function StepThree() {
  const { formData, setFormData } = useFormContext();
  const [selectedAddons, setSelectedAddons] = useState<{ title: string; value: number }[]>([]);

  useEffect(() => {
    setFormData({ ...formData, addons: selectedAddons });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedAddons]);

  return (
    <section className="flex flex-col gap-4">
      <Addon
        title="Online service"
        description="Access to multiplayer games"
        price={1}
        selected={{ selectedAddons, setSelectedAddons }}
      />
      <Addon
        title="Larger storage"
        description="Extra 1TB of cloud save"
        price={2}
        selected={{ selectedAddons, setSelectedAddons }}
      />
      <Addon
        title="Customizable Profile"
        description="Custom theme on your profile"
        price={2}
        selected={{ selectedAddons, setSelectedAddons }}
      />
    </section>
  );
}
