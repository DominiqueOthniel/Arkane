"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
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
  const ref = useRef<HTMLParagraphElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const sx = useSpring(mx, { stiffness: 90, damping: 18 });
  const sy = useSpring(my, { stiffness: 90, damping: 18 });
  const shearX = useTransform(sx, [0, 1], [-4, 4]);
  const shearY = useTransform(sy, [0, 1], [2, -2]);
  const ghostX = useTransform(shearX, (v) => -v * 1.4);
  const ghostY = useTransform(shearY, (v) => -v * 1.2);
  const glossX = useTransform(sx, [0, 1], ["8%", "92%"]);
  const metalFill = useTransform(
    glossX,
    (x) =>
      `linear-gradient(115deg, #5a5a66 0%, #c8c8d2 22%, #ffffff 42%, #8e8e9a 58%, #e8e8ee 78%, #6a6a74 100%)`,
  );

  const chars = Array.from(SLOGAN);
  const isHero = variant === "hero";

  const onMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  };

  return (
    <motion.p
      ref={ref}
      data-magnetic
      onPointerMove={onMove}
      onPointerLeave={() => {
        mx.set(0.5);
        my.set(0.5);
      }}
      className={`vow-slogan font-display relative inline-block font-semibold uppercase leading-[1.05] ${sizeClass[variant]} ${className}`}
      initial="hidden"
      {...(isHero
        ? { animate: "visible" as const }
        : {
            whileInView: "visible" as const,
            viewport: { once: true, amount: 0.55 },
          })}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: isHero ? 0.045 : 0.035,
            delayChildren: isHero ? 0.55 : 0.05,
          },
        },
      }}
      aria-label={SLOGAN}
    >
      <motion.span
        aria-hidden
        className="pointer-events-none absolute inset-0 select-none text-chrome-600/45"
        style={{ x: shearX, y: shearY }}
      >
        {SLOGAN}
      </motion.span>
      <motion.span
        aria-hidden
        className="pointer-events-none absolute inset-0 select-none text-white/25 mix-blend-screen"
        style={{ x: ghostX, y: ghostY }}
      >
        {SLOGAN}
      </motion.span>

      <span className="relative inline-flex flex-wrap justify-center">
        {chars.map((char, i) => (
          <motion.span
            key={`${char}-${i}`}
            className="vow-char relative inline-block chrome-text"
            variants={{
              hidden: {
                y: 52,
                opacity: 0,
                filter: "blur(12px)",
                clipPath: "inset(100% 0 0 0)",
              },
              visible: {
                y: 0,
                opacity: 1,
                filter: "blur(0px)",
                clipPath: "inset(0% 0 0 0)",
                transition: {
                  duration: 0.95,
                  ease: [0.16, 1, 0.3, 1],
                },
              },
            }}
            style={{ backgroundImage: metalFill }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </span>

      <motion.span
        aria-hidden
        className="pointer-events-none absolute -bottom-3 left-1/2 h-px w-[72%] -translate-x-1/2 origin-center bg-gradient-to-r from-transparent via-white/55 to-transparent"
        variants={{
          hidden: { scaleX: 0, opacity: 0 },
          visible: {
            scaleX: 1,
            opacity: 1,
            transition: { delay: isHero ? 1.35 : 0.55, duration: 0.9 },
          },
        }}
      />
    </motion.p>
  );
}
