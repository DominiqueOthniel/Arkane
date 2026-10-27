"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ScrollChrome from "./ScrollChrome";
import { HOME_LATEST } from "@/lib/content";

export default function HomeTeasers() {
  const reduce = useReducedMotion();

  return (
    <section className="section-block relative overflow-hidden border-t border-white/5">
      <div className="section-pad">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">Ce qui sort</p>
            <ScrollChrome className="text-4xl sm:text-5xl">
              OCTAVIA. Flips. Sessions.
            </ScrollChrome>
            <p className="text-chrome-300">
              Catalogue public @arkanedot: kit OCTAVIA, flips SoundCloud, brief
              atelier. Clique pour le détail.
            </p>
          </div>

          <ul className="mt-14 grid gap-8 sm:grid-cols-3 sm:gap-10">
            {HOME_LATEST.map((item, i) => (
              <motion.li
                key={item.title}
                initial={reduce ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  delay: reduce ? 0 : i * 0.08,
                  duration: 0.65,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <Link href={item.href} className="group block" data-magnetic>
                  <div className="relative mb-5 aspect-[4/5] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"
                    />
                    <span className="absolute bottom-4 left-4 font-display text-2xl text-white">
                      {item.title}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-chrome-400">
                    {item.line}
                  </p>
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
