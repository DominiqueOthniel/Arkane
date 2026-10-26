"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ScrollChrome from "./ScrollChrome";
import { HOME_LATEST } from "@/lib/content";

export default function HomeTeasers() {
  return (
    <section className="relative overflow-hidden border-t border-white/5 py-24 sm:py-32">
      <div className="section-pad mx-auto max-w-6xl">
        <p className="mb-4 text-xs uppercase tracking-[0.32em] text-chrome-400">
          Derniers drops
        </p>
        <ScrollChrome className="max-w-2xl text-4xl sm:text-5xl">
          Octavia. Flips. Sessions.
        </ScrollChrome>
        <p className="mt-5 max-w-lg text-chrome-300">
          Catalogue public @arkanedot: kit OCTAVIA, flips SoundCloud, brief
          atelier. Clique pour le détail.
        </p>

        <ul className="mt-14 grid gap-10 sm:grid-cols-3">
          {HOME_LATEST.map((item, i) => (
            <motion.li
              key={item.title}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                delay: i * 0.1,
                duration: 0.85,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Link href={item.href} className="group block" data-magnetic>
                <div className="relative mb-5 aspect-[4/5] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
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
    </section>
  );
}
