"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useRef } from "react";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "ghost";
};

export default function MagneticButton({
  href,
  children,
  variant = "solid",
}: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 280, damping: 18, mass: 0.35 });
  const y = useSpring(my, { stiffness: 280, damping: 18, mass: 0.35 });
  const transform = useMotionTemplate`translate3d(${x}px, ${y}px, 0)`;

  const onMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    mx.set(dx * 0.28);
    my.set(dy * 0.28);
  };

  const reset = () => {
    mx.set(0);
    my.set(0);
  };

  if (variant === "solid") {
    return (
      <motion.a
        ref={ref}
        href={href}
        data-magnetic
        onPointerMove={onMove}
        onPointerLeave={reset}
        style={{ transform }}
        className="magnetic-hit group relative inline-flex items-center justify-center overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-black"
      >
        <span
          aria-hidden
          className="absolute inset-0 bg-gradient-to-br from-zinc-100 via-white to-zinc-400 shadow-[0_0_40px_rgba(255,255,255,0.14)]"
        />
        <span
          aria-hidden
          className="absolute inset-px rounded-full bg-gradient-to-b from-white/50 to-transparent opacity-70"
        />
        <span className="relative z-10">{children}</span>
      </motion.a>
    );
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      data-magnetic
      onPointerMove={onMove}
      onPointerLeave={reset}
      style={{ transform }}
      className="magnetic-hit relative inline-flex items-center justify-center overflow-hidden rounded-full border border-white/25 bg-white/[0.03] px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-chrome-100 backdrop-blur-md"
    >
      <span className="relative z-10">{children}</span>
    </motion.a>
  );
}
