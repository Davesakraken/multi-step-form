import { PropsWithChildren } from "react";

export default function Container({ children }: PropsWithChildren) {
  return (
    <section className="flex h-[100vh] w-full md:h-[35rem] md:w-[53rem] bg-white md:rounded-xl p-5 justify-between">
      {children}
    </section>
  );
}
