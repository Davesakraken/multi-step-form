import React, { Dispatch, SetStateAction } from "react";
import MyCoolTickBox from "@/src/Components/common/MyCoolTickBox";
import clsx from "clsx";
import classes from "@/src/Components/Form/StepThree/Addon.module.scss";

interface Props {
  title: string;
  description: string;
  price: number;
  selected: {
    selectedAddons: { title: string; value: number }[];
    setSelectedAddons: Dispatch<SetStateAction<{ title: string; value: number }[]>>;
  };
}

function Addon({ title, description, price, selected }: Props) {
  const addons = selected.selectedAddons; //[{titles, value}]
  const addonTitles = addons?.map((addon) => addon.title); //[titles]
  const activeAddon = addonTitles?.includes(title); //boolean
  const setAddons = selected.setSelectedAddons;

  const handleSelectAddon = () => {
    if (activeAddon) {
      selected.setSelectedAddons(addons.filter((addon) => addon.title !== title));
    } else {
      selected.setSelectedAddons([...addons, { title, value: price }]);
    }
  };

  console.log(selected.selectedAddons);

  return (
    <button
      className={clsx({ [classes.active]: activeAddon }, classes.addon)}
      onClick={handleSelectAddon}
    >
      <div className="flex items-center">
        <div className="m-3 mr-5">
          <MyCoolTickBox isActive={activeAddon} />
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
