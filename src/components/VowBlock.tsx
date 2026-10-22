"use client";

import VowSlogan from "./VowSlogan";

type Props = {
  line?: string;
  variant?: "echo" | "seal";
};

export default function VowBlock({
  line = "Une promesse de maison. Chaque drop, chaque mix, chaque cut.",
  variant = "echo",
}: Props) {
  return (
    <section className="section-pad relative overflow-hidden py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(255,255,255,0.07),transparent_55%)]"
      />
      <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
        <p className="mb-6 text-xs uppercase tracking-[0.32em] text-chrome-500">
          Serment
        </p>
        <VowSlogan variant={variant} />
        <p className="mt-8 max-w-md text-sm leading-relaxed text-chrome-400 sm:text-base">
          {line}
        </p>
      </div>
    </section>
  );
}
