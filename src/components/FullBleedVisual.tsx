"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
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
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? ["0%", "0%"] : ["-4%", "4%"],
  );

  return (
    <figure ref={ref} className={`relative overflow-hidden ${className}`}>
      <div className="relative aspect-[16/9] w-full sm:aspect-[21/9]">
        <motion.div
          style={{ y }}
          className="absolute inset-[-8%] h-[116%] w-full"
        >
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20"
        />
      </div>
      {caption && (
        <figcaption className="section-pad mt-3">
          <p className="shell text-xs uppercase tracking-[0.22em] text-chrome-500">
            {caption}
          </p>
        </figcaption>
      )}
    </figure>
  );
}
