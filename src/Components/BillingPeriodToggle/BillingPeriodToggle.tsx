import { Dispatch, SetStateAction, useEffect, useState } from "react";
import MyCoolToggle from "../common/MyCoolToggle";
import clsx from "clsx";
import classes from "./BillingPeriodToggle.module.scss";

interface BillingPeriodToggleProps {
  setBillingPeriod: Dispatch<SetStateAction<"monthly" | "yearly">>;
}

function BillingPeriodToggle({ setBillingPeriod }: BillingPeriodToggleProps) {
  const [dotPosition, setDotPosition] = useState("left");

  useEffect(() => {
    if (dotPosition === "left") {
      setBillingPeriod("monthly");
    } else {
      setBillingPeriod("yearly");
    }
  }, [dotPosition, setBillingPeriod]);

  return (
    <section className="flex justify-center items-center gap-4 bg-magnolia p-3 rounded-lg">
      <p className={clsx(classes.default, { [classes.active]: dotPosition === "right" })}>
        Monthly
      </p>
      <MyCoolToggle dotPosition={dotPosition} setDotPosition={setDotPosition} />
      <p className={clsx(classes.default, { [classes.active]: dotPosition === "left" })}>Yearly</p>
    </section>
  );
}

export default BillingPeriodToggle;
