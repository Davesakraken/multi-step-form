import { Dispatch, SetStateAction, useState } from "react";
import MyCoolToggle from "./common/MyCoolToggle";
import clsx from "clsx";

interface BillingPeriodToggleProps {
  setBillingPeriod: Dispatch<SetStateAction<"monthly" | "yearly">>;
}

function BillingPeriodToggle({ setBillingPeriod }: BillingPeriodToggleProps) {
  const [dotPosition, setDotPosition] = useState("left");

  if (dotPosition === "left") {
    setBillingPeriod("monthly");
  } else {
    setBillingPeriod("yearly");
  }

  return (
    <section className="flex justify-center items-center gap-4 bg-magnolia p-3 rounded-lg">
      <p className={`${clsx({ "text-coolGray": dotPosition === "right" })} font-bold`}>Monthly</p>
      <MyCoolToggle dotPosition={dotPosition} setDotPosition={setDotPosition} />
      <p className={`${clsx({ "text-coolGray": dotPosition === "left" })} font-bold`}>Yearly</p>
    </section>
  );
}

export default BillingPeriodToggle;
