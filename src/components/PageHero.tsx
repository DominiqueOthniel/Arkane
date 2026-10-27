"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import SiteNav from "./SiteNav";

type Props = {
  eyebrow: string;
  title: string;
  line: string;
  imageSrc: string;
  imageAlt: string;
};

export default function PageHero({
  eyebrow,
  title,
  line,
  imageSrc,
  imageAlt,
}: Props) {
  const reduce = useReducedMotion();

  return (
    <section className="relative min-h-[70svh] overflow-hidden sm:min-h-[76svh]">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(0,0,0,0.65)_80%)]"
      />

      <SiteNav />

      <div className="section-pad relative z-10 flex min-h-[70svh] flex-col justify-end pb-16 pt-28 sm:min-h-[76svh] sm:pb-20">
        <div className="shell">
          <motion.p
            className="eyebrow text-chrome-300"
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            {eyebrow}
          </motion.p>
          <motion.h1
            className="mt-4 max-w-3xl font-display chrome-text text-4xl font-bold leading-[0.95] tracking-[-0.03em] sm:text-6xl"
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            {title}
          </motion.h1>
          <motion.p
            className="mt-5 max-w-lg text-base text-chrome-200/90 sm:text-lg"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.65 }}
          >
            {line}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
