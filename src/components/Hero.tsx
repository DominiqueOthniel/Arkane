"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import LiquidMetal from "./LiquidMetal";
import MagneticButton from "./MagneticButton";
import SiteNav from "./SiteNav";
import VowSlogan from "./VowSlogan";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const logoY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const logoScale = useTransform(scrollYProgress, [0, 1], [1, 0.86]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

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
        className="section-pad relative z-20 flex flex-1 flex-col items-center justify-center pb-16 pt-24 text-center"
      >
        <motion.div
          style={{ y: logoY, scale: logoScale }}
          className="relative mb-6"
          initial={{ opacity: 0, scale: 0.88, filter: "blur(12px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.35, ease: [0.16, 1, 0.3, 1] }}
        >
          <div
            aria-hidden
            className="absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/20 blur-3xl animate-bloom"
          />
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
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          ARKANE
        </motion.h1>

        <div className="mt-5 sm:mt-7">
          <VowSlogan variant="hero" />
        </div>

        <motion.div
          className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:mt-9"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.85 }}
        >
          <MagneticButton href="/drops">Voir les drops</MagneticButton>
          <MagneticButton href="/contact" variant="ghost">
            Démarrer un projet
          </MagneticButton>
        </motion.div>
      </motion.div>

      <motion.div
        aria-hidden
        className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.55 }}
        transition={{ delay: 1.6 }}
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/25 p-1.5">
          <motion.span
            className="h-1.5 w-1.5 rounded-full bg-white"
            animate={{ y: [0, 14, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
