"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import ScrollChrome from "./ScrollChrome";

export default function Atelier() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const sx = useSpring(mx, { stiffness: 120, damping: 22 });
  const sy = useSpring(my, { stiffness: 120, damping: 22 });
  const shineX = useTransform(sx, [0, 1], ["12%", "88%"]);
  const shineY = useTransform(sy, [0, 1], ["18%", "82%"]);
  const blobX = useTransform(sx, [0, 1], [-24, 36]);
  const spotlight = useMotionTemplate`radial-gradient(520px 320px at ${shineX} ${shineY}, rgba(255,255,255,0.22), rgba(140,140,150,0.08) 35%, transparent 65%)`;

  const onMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  };

  return (
    <section id="atelier" className="relative overflow-hidden py-28 sm:py-36">
      <div className="section-pad mx-auto max-w-6xl">
        <p className="mb-4 text-xs uppercase tracking-[0.32em] text-chrome-400">
          Atelier
        </p>
        <ScrollChrome className="max-w-2xl text-4xl sm:text-5xl">
          Une maison, un gloss.
        </ScrollChrome>
        <p className="mt-5 max-w-lg text-chrome-300">
          Direction artistique sombre et métallique. Chaque projet est sculpté
          comme un objet chrome: densité, contraste, impact.
        </p>

        <div
          ref={ref}
          onPointerMove={onMove}
          className="relative mt-14 min-h-[320px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#08080a] sm:min-h-[420px]"
        >
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-br from-[#101014] via-black to-[#16161c]"
          />
          <motion.div
            aria-hidden
            className="absolute inset-0 opacity-90"
            style={{ background: spotlight }}
          />
          <div className="relative z-10 flex h-full min-h-[320px] flex-col justify-end p-8 sm:min-h-[420px] sm:p-12">
            <p className="font-display text-3xl text-white sm:text-4xl">
              Studio mental
            </p>
            <p className="mt-3 max-w-md text-sm text-chrome-300 sm:text-base">
              Sessions nocturnes, écrans de DAW, drops qui cuttent.
              L&apos;esthétique Arkane suit le même rythme: noir absolu, argent
              en fusion, highlights qui flashent.
            </p>
          </div>
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -right-10 top-8 h-56 w-56 animate-mercurial bg-gradient-to-br from-white/40 via-zinc-300/20 to-transparent blur-xl sm:h-72 sm:w-72"
            style={{ x: blobX }}
          />
        </div>
      </div>
    </section>
  );
}
