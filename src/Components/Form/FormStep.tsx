import { ReactNode } from "react";

interface FormStepProps {
  title?: string;
  description?: string;
  children: ReactNode;
}

export default function FormStep({ title, description, children }: FormStepProps) {
  const desktopStyles =
    "md:bg-none md:rounded-none md:top-0 md:p-0 md:pt-0 md:pb-0 md:drop-shadow-none";
  return (
    <>
      <section
        className={`relative -top-16 bg-white rounded-lg p-5 pt-8 pb-10 drop-shadow-lg ${desktopStyles}`}
      >
        <h1>{title}</h1>
        <h2 className="mt-2">{description}</h2>
        <section className="mt-8">{children}</section>
      </section>
    </>
  );
}
