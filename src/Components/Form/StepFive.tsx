import React from "react";
import Image from "next/image";

interface StepFiveProps {}

function StepFive({}: StepFiveProps) {
  return (
    <div className="flex justify-center items-center flex-col">
      <Image
        src={"images/thank-you-icon.svg"}
        width={85}
        height={85}
        alt=""
        className="mb-6 mt-12"
      />
      <h1 className="mb-3">Thank you!</h1>
      <h2 className="text-coolGray text-center">
        Thanks for confirming your subscription! We hope you have fun using our platform. If you
        ever need support, please feel free to emails us at support@loremgaming.com.
      </h2>
    </div>
  );
}

export default StepFive;
