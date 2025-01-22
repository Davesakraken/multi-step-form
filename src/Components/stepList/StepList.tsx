"use client";

import styles from "./stepList.module.css";
import clsx from "clsx";

interface StepListProps {
  stepNumber: number;
}

export default function StepList({ stepNumber }: StepListProps) {
  const listItems = ["YOUR INFO", "SELECT PLAN", "ADD-ONS", "SUMMARY"];

  return (
    <ol className="flex flex-col w-[20rem] h-[100%] text-white rounded-lg bg-sidebar-desktop bg-cover p-8">
      {listItems.map((item, idx) => (
        <li
          key={idx}
          className={clsx(
            stepNumber === idx + 1 && `${styles.stepItemHighlight}`,
            `${styles.stepListItem} flex gap-4 pb-5`
          )}
        >
          <div className="flex flex-col">
            <div className="font-extralight text-xs tracking-tight">STEP {idx + 1}</div>
            <div className="font-bold text-sm tracking-wider">{item}</div>
          </div>
        </li>
      ))}
    </ol>
  );
}
