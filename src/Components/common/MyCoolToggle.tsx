import { Dispatch } from "react";
import clsx from "clsx";

interface MyCoolToggleProps {
  dotPosition: string;
  setDotPosition: Dispatch<string>;
}

function MyCoolToggle({ dotPosition, setDotPosition }: MyCoolToggleProps) {
  const handleSetDotPosition = () => {
    dotPosition === "left" ? setDotPosition("right") : setDotPosition("left");
  };

  return (
    <div
      onClick={handleSetDotPosition}
      className="w-12 min-h-6 bg-marineBlue rounded-3xl p-1 cursor-pointer relative"
    >
      <div
        className={`
      ${clsx({
        "left-1": dotPosition === "left",
        "left-7": dotPosition === "right",
      })}
        w-4 h-4 bg-white rounded-full absolute transition-all duration-300 ease-in-out`}
      ></div>
    </div>
  );
}

export default MyCoolToggle;
