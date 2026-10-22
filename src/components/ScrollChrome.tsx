"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

type Props = {
  children: string;
  className?: string;
};

export default function ScrollChrome({ children, className = "" }: Props) {
  const ref = useRef<HTMLHeadingElement>(null);

  return (
    <h2
      ref={ref}
      className={`font-display relative inline-block font-semibold tracking-[-0.02em] text-chrome-700 ${className}`}
    >
      <span aria-hidden className="select-none">
        {children}
      </span>
      <motion.span
        aria-hidden
        className="absolute inset-0 chrome-text"
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        whileInView={{ clipPath: "inset(0 0% 0 0)" }}
        viewport={{ once: true, amount: 0.65 }}
        transition={{ duration: 1.15, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.span>
      <span className="sr-only">{children}</span>
    </h2>
  );
}
