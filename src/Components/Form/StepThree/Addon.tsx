import React from "react";
import MyCoolTickBox from "@/src/Components/common/MyCoolTickBox";

interface Props {
  title: string;
  description: string;
  price: number;
}

function Addon({ title, description, price }: Props) {
  return (
    <button className="w-full min-h-20 border rounded-lg border-lightGray flex items-center justify-between p-4">
      <div className="flex items-center">
        <div className="m-3 mr-5">
          <MyCoolTickBox />
        </div>
        <div className="flex flex-col items-start">
          <h2 className="text-lg text-marineBlue font-bold">{title}</h2>
          <p className="text-coolGray">{description}</p>
        </div>
      </div>
      <p className="mr-2 text-purplishBlue">+${price}/mo</p>
    </button>
  );
}

export default Addon;
