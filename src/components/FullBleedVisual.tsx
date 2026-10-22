"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

type Props = {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
};

export default function FullBleedVisual({
  src,
  alt,
  caption,
  className = "",
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const gloss = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 0.55, 0.25]);

  return (
    <figure
      ref={ref}
      className={`relative overflow-hidden ${className}`}
    >
      <div className="relative aspect-[16/9] w-full sm:aspect-[21/9]">
        <motion.div style={{ y }} className="absolute inset-[-12%] h-[124%] w-full">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent"
          style={{ opacity: gloss }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20"
        />
      </div>
      {caption && (
        <figcaption className="section-pad mt-3 text-xs uppercase tracking-[0.22em] text-chrome-500">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
