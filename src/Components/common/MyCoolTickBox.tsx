import React from "react";
import Image from "next/image";

interface Props {
  isActive?: boolean;
}

function MyCoolTickBox({ isActive }: Props) {
  isActive = true;
  return (
    <>
      {isActive ? (
        <div className="w-6 h-6 flex items-center justify-center bg-purplishBlue rounded-md">
          <Image src="/images/checkmark-icon.svg" alt="Tick" width={14} height={14} />
        </div>
      ) : (
        <div className="w-6 h-6 flex items-center justify-center rounded-md border-lightGray border"></div>
      )}
    </>
  );
}

export default MyCoolTickBox;
