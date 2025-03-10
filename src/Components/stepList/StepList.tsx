"use client";

import styles from "./stepList.module.css";
import clsx from "clsx";

interface StepListProps {
  stepNumber: number;
}

export default function StepList({ stepNumber }: StepListProps) {
  const listItems = ["YOUR INFO", "SELECT PLAN", "ADD-ONS", "SUMMARY"];
  const desktopClasses =
    "md:rounded-lg md:p-8 md:bg-sidebar-desktop md:items-start md:justify-start md:min-w-[15.5rem] md:h-full";

  return (
    <section className={`flex justify-center bg-sidebar-mobile bg-cover h-44 ${desktopClasses}`}>
      <ol className="flex flex-row md:flex-col text-white gap-6 md:gap-0 mb-12">
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
    </section>
  );
}
