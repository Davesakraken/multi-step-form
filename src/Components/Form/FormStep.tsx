import { ReactNode } from "react";

interface FormStepProps {
  title: string;
  description: string;
  children: ReactNode;
}

export default function FormStep({ title, description, children }: FormStepProps) {
  return (
    <>
      <h1>{title}</h1>
      <h2 className="mt-2">{description}</h2>
      <section className="mt-8">{children}</section>
    </>
  );
}
