import { Dispatch, SetStateAction, useEffect, useState } from "react";
import MyCoolToggle from "../common/MyCoolToggle";
import clsx from "clsx";
import classes from "./BillingPeriodToggle.module.scss";

interface BillingPeriodToggleProps {
  billingPeriod: "monthly" | "yearly";
  setBillingPeriod: Dispatch<SetStateAction<"monthly" | "yearly">>;
}

function BillingPeriodToggle({ billingPeriod, setBillingPeriod }: BillingPeriodToggleProps) {
  const dotPosition = billingPeriod === "monthly" ? "left" : "right";

  const setDotPosition = (value: string) =>
    value === "left" ? setBillingPeriod("monthly") : setBillingPeriod("yearly");

  console.log();

  return (
    <section className="flex justify-center items-center gap-4 bg-magnolia p-3 rounded-lg">
      <p className={clsx(classes.default, { [classes.inactive]: billingPeriod === "yearly" })}>
        Monthly
      </p>
      <MyCoolToggle dotPosition={dotPosition} setDotPosition={setDotPosition} />
      <p className={clsx(classes.default, { [classes.inactive]: billingPeriod === "monthly" })}>
        Yearly
      </p>
    </section>
  );
}

export default BillingPeriodToggle;
