"use client";

import styles from "./stepList.module.css";
import clsx from "clsx";

interface StepListProps {
  stepNumber: number;
}

export default function StepList({ stepNumber }: StepListProps) {
  const listItems = ["YOUR INFO", "SELECT PLAN", "ADD-ONS", "SUMMARY"];
  const desktopClasses =
    "md:justify-start md:rounded-lg md:flex-col md:bg-sidebar-desktop md:p-8 md:gap-0";

  return (
    <ol
      className={`flex flex-row justify-center gap-5 min-w-[15.5rem] md:h-[100%] bg-sidebar-mobile text-white bg-cover py-16 ${desktopClasses}`}
    >
      {listItems.map((item, idx) => (
        <li
          key={idx}
          className={clsx(
            stepNumber === idx + 1 && `${styles.stepItemHighlight}`,
            `${styles.stepListItem} flex gap-4 md:pb-5`
          )}
        >
          <div className="hidden md:flex md:flex-col">
            <div className="font-extralight text-xs tracking-tight">STEP {idx + 1}</div>
            <div className="font-bold text-sm tracking-wider">{item}</div>
          </div>
        </li>
      ))}
    </ol>
  );
}
