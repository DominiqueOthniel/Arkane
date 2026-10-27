"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SLOGAN } from "@/lib/brand";

type Variant = "hero" | "echo" | "seal";

type Props = {
  variant?: Variant;
  className?: string;
};

const sizeClass: Record<Variant, string> = {
  hero: "text-[clamp(1.65rem,5.5vw,3.25rem)] tracking-[0.04em]",
  echo: "text-[clamp(1.75rem,4.5vw,3rem)] tracking-[0.06em]",
  seal: "text-[clamp(1.35rem,3.5vw,2.1rem)] tracking-[0.08em]",
};

export default function VowSlogan({ variant = "echo", className = "" }: Props) {
  const reduce = useReducedMotion();
  const chars = Array.from(SLOGAN);
  const isHero = variant === "hero";

  if (reduce) {
    return (
      <p
        className={`vow-slogan font-display chrome-text relative inline-block font-semibold uppercase leading-[1.05] ${sizeClass[variant]} ${className}`}
      >
        {SLOGAN}
      </p>
    );
  }

  return (
    <motion.p
      data-magnetic
      className={`vow-slogan font-display relative inline-block font-semibold uppercase leading-[1.05] ${sizeClass[variant]} ${className}`}
      initial="hidden"
      {...(isHero
        ? { animate: "visible" as const }
        : {
            whileInView: "visible" as const,
            viewport: { once: true, amount: 0.5 },
          })}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: isHero ? 0.04 : 0.028,
            delayChildren: isHero ? 0.4 : 0.04,
          },
        },
      }}
      aria-label={SLOGAN}
    >
      <span className="relative inline-flex flex-wrap justify-center">
        {chars.map((char, i) => (
          <motion.span
            key={`${char}-${i}`}
            className="vow-char relative inline-block chrome-text"
            variants={{
              hidden: {
                y: 28,
                opacity: 0,
              },
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                },
              },
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </span>

      <motion.span
        aria-hidden
        className="pointer-events-none absolute -bottom-3 left-1/2 h-px w-[68%] -translate-x-1/2 origin-center bg-gradient-to-r from-transparent via-white/50 to-transparent"
        variants={{
          hidden: { scaleX: 0, opacity: 0 },
          visible: {
            scaleX: 1,
            opacity: 1,
            transition: { delay: isHero ? 1.1 : 0.45, duration: 0.75 },
          },
        }}
      />
    </motion.p>
  );
}
