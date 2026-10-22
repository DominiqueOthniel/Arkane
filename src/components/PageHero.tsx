"use client";

import { motion } from "framer-motion";
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
  return (
    <section className="relative min-h-[72svh] overflow-hidden sm:min-h-[78svh]">
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

      <div className="section-pad relative z-10 flex min-h-[72svh] flex-col justify-end pb-16 pt-28 sm:min-h-[78svh] sm:pb-20">
        <motion.p
          className="text-xs uppercase tracking-[0.32em] text-chrome-300"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          className="mt-4 max-w-3xl font-display chrome-text text-4xl font-bold leading-[0.95] tracking-[-0.03em] sm:text-6xl"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          {title}
        </motion.h1>
        <motion.p
          className="mt-5 max-w-lg text-base text-chrome-200/90 sm:text-lg"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28, duration: 0.8 }}
        >
          {line}
        </motion.p>
      </div>
    </section>
  );
}
