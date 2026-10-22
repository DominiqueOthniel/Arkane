"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function ChromeCursor() {
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 420, damping: 32, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 420, damping: 32, mass: 0.4 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    setVisible(true);

    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    const over = (e: Event) => {
      const t = e.target as HTMLElement | null;
      if (!t) return;
      setHovering(Boolean(t.closest("a, button, [data-magnetic]")));
    };

    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerover", over, true);
    return () => {
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerover", over, true);
    };
  }, [x, y]);

  if (!visible) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[80] mix-blend-difference"
      style={{ translateX: sx, translateY: sy }}
    >
      <motion.div
        className="rounded-full border border-white/80 bg-white/10"
        animate={{
          width: hovering ? 56 : 18,
          height: hovering ? 56 : 18,
          x: hovering ? -28 : -9,
          y: hovering ? -28 : -9,
          opacity: hovering ? 0.95 : 0.7,
        }}
        transition={{ type: "spring", stiffness: 380, damping: 28 }}
      />
    </motion.div>
  );
}
