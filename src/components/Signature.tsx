"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ScrollChrome from "./ScrollChrome";

const pillars = [
  {
    title: "Production",
    line: "Beats cinématiques, trap mélodique, électro sombre. Melody first.",
  },
  {
    title: "Mix & Master",
    line: "Une pression nette, des basses qui collent, un gloss radio-ready.",
  },
  {
    title: "Identité sonore",
    line: "Kits, signatures et textures pour que chaque artiste sonne unique.",
  },
];

export default function Signature() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const mercuryX = useTransform(scrollYProgress, [0, 1], ["-8%", "12%"]);

  return (
    <section
      id="signature"
      ref={ref}
      className="relative overflow-hidden border-t border-white/5 bg-void-radial py-28 sm:py-36"
    >
      <motion.div
        aria-hidden
        style={{ x: mercuryX }}
        className="pointer-events-none absolute -left-24 top-24 h-72 w-72 animate-mercurial bg-gradient-to-br from-white/25 via-zinc-400/10 to-transparent blur-2xl"
      />

      <div className="section-pad relative mx-auto max-w-6xl">
        <p className="mb-4 text-xs uppercase tracking-[0.32em] text-chrome-400">
          Signature
        </p>
        <ScrollChrome className="max-w-3xl text-4xl sm:text-6xl">
          Chrome liquide. Bass qui percute.
        </ScrollChrome>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-chrome-300 sm:text-lg">
          Inspiré par l&apos;énergie studio des drops TikTok: sessions brutes,
          kits qui claquent, cuts qui restent en tête. Pas de bruit inutile.
          Juste la matière sonore.
        </p>

        <ul className="mt-16 grid gap-12 sm:grid-cols-3 sm:gap-10">
          {pillars.map((item, i) => (
            <motion.li
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                delay: i * 0.12,
                duration: 0.85,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative border-t border-white/15 pt-6"
            >
              <h3 className="font-display text-2xl tracking-tight text-chrome-50">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-chrome-400">
                {item.line}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
