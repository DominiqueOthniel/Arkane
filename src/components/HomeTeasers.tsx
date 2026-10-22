"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ScrollChrome from "./ScrollChrome";

const teasers = [
  {
    href: "/atelier",
    title: "Atelier",
    line: "Sessions nocturnes, console chrome, pression radio-ready.",
    image: "/images/studio-console.jpg",
    alt: "Console de mixage chrome dans le studio Arkane",
  },
  {
    href: "/drops",
    title: "Drops",
    line: "Kits, type beats, packs qui claquent. Melody first.",
    image: "/images/night-drops.jpg",
    alt: "Rue nocturne aux reflets argentés",
  },
  {
    href: "/signature",
    title: "Signature",
    line: "Identité sonore sombre et métallique. Une maison, un gloss.",
    image: "/images/chrome-flow.jpg",
    alt: "Métal liquide argenté en fusion",
  },
];

export default function HomeTeasers() {
  return (
    <section className="relative overflow-hidden border-t border-white/5 py-24 sm:py-32">
      <div className="section-pad mx-auto max-w-6xl">
        <p className="mb-4 text-xs uppercase tracking-[0.32em] text-chrome-400">
          Explorer
        </p>
        <ScrollChrome className="max-w-2xl text-4xl sm:text-5xl">
          Studio. Kits. Impact.
        </ScrollChrome>
        <p className="mt-5 max-w-lg text-chrome-300">
          Même énergie que les drops TikTok: cuts bruts, basse qui colle, gloss
          qui flash. Choisis ta porte d&apos;entrée.
        </p>

        <ul className="mt-14 grid gap-10 sm:grid-cols-3">
          {teasers.map((item, i) => (
            <motion.li
              key={item.href}
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
