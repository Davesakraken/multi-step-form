import React from "react";
import Image from "next/image";
import clsx from "clsx";
import classes from "@/src/Components/Form/StepTwo/PricingCard.module.scss";
import { useFormContext } from "@/src/Context/FormContext.";

interface PricingCardProps {
  iconPath: string;
  title: string;
  price: number;
  billingPeriod: "monthly" | "yearly";
  currency?: string;
  features?: string[];
  setSelectedPlan: (plan: string) => void;
  selectedPlan: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  iconPath,
  title,
  price,
  billingPeriod,
  currency = "$",
  features,
  setSelectedPlan,
  selectedPlan,
}) => {
  const { summaryData, setSummaryData } = useFormContext();
  const billingPeriodSuffix = billingPeriod === "monthly" ? "/mo" : "/yr";

  return (
    <button
      type="button"
      aria-pressed={selectedPlan === title}
      className={clsx(
        { [classes.active]: selectedPlan === title },
        classes.card,
        "flex md:flex-col md:justify-between gap-4 p-4 rounded-lg md:w-[8.5rem] md:h-[10.5rem] my-2"
      )}
      onClick={() => {
        setSelectedPlan(title);
        setSummaryData({
          ...summaryData,
          planPrice: price,
          billingPeriodSuffix: billingPeriodSuffix,
        });
      }}
    >
      <Image src={iconPath} width={40} height={40} alt={iconPath.replace(/^.*?\//, "")} />
      <div>
        <h2 className="text-left">{title}</h2>
        <p className="text-sm text-left">
          {currency}
          {price}
          {billingPeriodSuffix}
        </p>
        <ul className="text-sm tracking-tight">
          {billingPeriod === "yearly" &&
            features?.map((feature, index) => <li key={index}>{feature}</li>)}
        </ul>
      </div>
    </button>
  );
};

export default PricingCard;
