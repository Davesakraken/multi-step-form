import React from "react";
import Image from "next/image";

interface PricingCardProps {
  iconPath: string;
  title: string;
  price: number;
  billingPeriod: "monthly" | "yearly";
  currency?: string;
  features?: string[];
}

const PricingCard: React.FC<PricingCardProps> = ({
  iconPath,
  title,
  price,
  billingPeriod,
  currency = "$",
  features,
}) => {
  return (
    <div className="w-[130px] min-h-[170px] cursor-pointer border border-lightGray p-4 rounded-lg flex flex-col justify-between">
      <Image src={iconPath} width={40} height={40} alt={""} />
      <div>
        <h2>{title}</h2>
        <p className="text-sm">
          {currency}
          {price}
          {billingPeriod === "monthly" ? "/mo" : "/yr"}
        </p>
        <ul className="text-sm tracking-tight">
          {billingPeriod === "yearly" &&
            features?.map((feature, index) => <li key={index}>{feature}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default PricingCard;
