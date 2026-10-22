"use client";

import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";
import ScrollChrome from "./ScrollChrome";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/5 py-28 sm:py-36"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,255,255,0.08),transparent_55%)]"
      />

      <div className="section-pad relative mx-auto max-w-4xl text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.32em] text-chrome-400">
          Contact
        </p>
        <ScrollChrome className="text-4xl sm:text-6xl">
          Passons en session.
        </ScrollChrome>
        <motion.p
          className="mx-auto mt-6 max-w-md text-chrome-300"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Un single, un EP, une identité. Dis-nous ce que tu veux faire
          résonner. On sculpte le reste.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.7 }}
        >
          <MagneticButton href="mailto:hello@arkane.studio">
            Écrire à Arkane
          </MagneticButton>
          <MagneticButton
            href="https://www.tiktok.com/@arkanedot"
            variant="ghost"
          >
            Voir le TikTok
          </MagneticButton>
        </motion.div>
      </div>

      <footer className="section-pad relative mx-auto mt-24 flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs uppercase tracking-[0.2em] text-chrome-500 sm:flex-row">
        <span className="font-display tracking-[0.35em] text-chrome-300">
          ARKANE
        </span>
        <span>Maison de production musicale</span>
        <span>© {new Date().getFullYear()}</span>
      </footer>
    </section>
  );
}
