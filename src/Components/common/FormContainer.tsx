import { PropsWithChildren } from "react";

export default function FormContainer({ children }: PropsWithChildren) {
  return (
    <section className="flex h-[35rem] w-[53rem] bg-white rounded-xl p-5 justify-between">
      {children}
    </section>
  );
}
