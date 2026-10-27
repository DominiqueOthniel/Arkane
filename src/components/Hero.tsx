"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import LiquidMetal from "./LiquidMetal";
import MagneticButton from "./MagneticButton";
import SiteNav from "./SiteNav";
import VowSlogan from "./VowSlogan";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const logoY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 80]);
  const logoScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, reduce ? 1 : 0.92],
  );
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, reduce ? 1 : 0]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] flex-col overflow-hidden"
    >
      <LiquidMetal />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(0,0,0,0.55)_75%,#000_100%)]"
      />

      <SiteNav />

      <motion.div
        style={{ opacity: fade }}
        className="section-pad relative z-20 flex flex-1 flex-col items-center justify-center pb-20 pt-24 text-center"
      >
        <div className="shell flex w-full flex-col items-center">
          <motion.div
            style={{ y: logoY, scale: logoScale }}
            className="relative mb-6"
            initial={reduce ? false : { opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          >
            {!reduce && (
              <div
                aria-hidden
                className="absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/20 blur-3xl animate-bloom"
              />
            )}
            <Image
              src="/arkane-logo.jpg"
              alt="Logo Arkane"
              width={420}
              height={420}
              priority
              className="relative mx-auto h-auto w-[min(68vw,300px)] drop-shadow-[0_0_60px_rgba(255,255,255,0.22)] sm:w-[min(48vw,360px)]"
            />
          </motion.div>

          <motion.h1
            className="font-display chrome-text text-[clamp(3.2rem,13vw,7.5rem)] font-bold leading-[0.9] tracking-[-0.03em]"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            ARKANE
          </motion.h1>

          <div className="mt-5 sm:mt-7">
            <VowSlogan variant="hero" />
          </div>

          <motion.div
            className="mt-9 flex flex-wrap items-center justify-center gap-4"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.7 }}
          >
            <MagneticButton href="/drops">Les drops</MagneticButton>
            <MagneticButton href="/contact" variant="ghost">
              Lancer une session
            </MagneticButton>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
