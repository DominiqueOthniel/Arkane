"use client";

import VowSlogan from "./VowSlogan";

type Props = {
  line?: string;
  variant?: "echo" | "seal";
};

export default function VowBlock({
  line = "Titres, kits, dates. On tient jusqu’au fichier livré.",
  variant = "echo",
}: Props) {
  return (
    <section className="section-block section-pad relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(255,255,255,0.07),transparent_55%)]"
      />
      <div className="shell relative mx-auto flex flex-col items-center text-center">
        <p className="eyebrow mb-6">Le serment</p>
        <VowSlogan variant={variant} />
        <p className="mt-8 max-w-md text-sm leading-relaxed text-chrome-400 sm:text-base">
          {line}
        </p>
      </div>
    </section>
  );
}
