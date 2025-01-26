import React from "react";
import Image from "next/image";
import clsx from "clsx";

interface Props {
  isActive?: boolean;
}

function MyCoolTickBox({ isActive }: Props) {
  return (
    <div
      className={clsx(
        isActive ? "bg-purplishBlue" : "border-lightGray",
        "w-[22px] h-[22px] flex items-center justify-center rounded-md border"
      )}
    >
      <Image src="/images/checkmark-icon.svg" alt="Tick" width={13} height={13} />
    </div>
  );
}

export default MyCoolTickBox;
