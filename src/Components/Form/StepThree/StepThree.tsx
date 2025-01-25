import Addon from "@/src/Components/Form/StepThree/Addon";

export default function StepThree() {
  return (
    <section className="flex flex-col gap-4">
      <Addon title="Online service" description="Access to multiplayer games" price={1} />
      <Addon title="Larger storage" description="Extra 1TB of cloud save" price={2} />
      <Addon title="Online service" description="Custom theme on your profile" price={2} />
    </section>
  );
}
