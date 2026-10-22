import type { Metadata } from "next";
import Image from "next/image";
import FullBleedVisual from "@/components/FullBleedVisual";
import MagneticButton from "@/components/MagneticButton";
import PageHero from "@/components/PageHero";
import ScrollChrome from "@/components/ScrollChrome";

export const metadata: Metadata = {
  title: "Drops",
  description:
    "Drops Arkane: drum kits, type beats et packs. Énergie studio, gloss chrome, cuts qui restent.",
};

const drops = [
  {
    name: "Octavia Kit",
    tag: "Drum kit",
    line: "Kicks serrés, snares métalliques, hats qui coupent. Prêt pour le night drop.",
    image: "/images/studio-speakers.jpg",
  },
  {
    name: "Mercury Melodies",
    tag: "Type beat pack",
    line: "Loops sombre argent, pads liquides, hooks qui collent dès le premier bar.",
    image: "/images/chrome-flow.jpg",
  },
  {
    name: "Void One-Shots",
    tag: "Sound design",
    line: "Risers, impacts, sweeps chrome. La colle sonore entre tes sections.",
    image: "/images/studio-console.jpg",
  },
  {
    name: "Night Session",
    tag: "Beat drop",
    line: "Projets studio testés en live TikTok. Bass forward, mélodie first.",
    image: "/images/night-drops.jpg",
  },
];

export default function DropsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Drops"
        title="Kits qui claquent."
        line="Comme sur TikTok: packs nets, demos brutes, énergie immédiate. Melody first. Genre second."
        imageSrc="/images/night-drops.jpg"
        imageAlt="Ambiance nocturne aux reflets chrome"
      />

      <section className="section-pad relative mx-auto max-w-6xl py-20 sm:py-28">
        <ScrollChrome className="max-w-2xl text-3xl sm:text-5xl">
          Catalogue vivant.
        </ScrollChrome>
        <p className="mt-6 max-w-xl text-chrome-300">
          Chaque drop est sculpté pour la session: FLP-ready, stems propres,
          vibe Arkane. Pas de filler. Que du matériel qui pousse le beat.
        </p>

        <ul className="mt-14 grid gap-8 sm:grid-cols-2">
          {drops.map((drop) => (
            <li key={drop.name} className="group">
              <div className="relative mb-5 aspect-[16/10] overflow-hidden">
                <Image
                  src={drop.image}
                  alt={drop.name}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/30"
                />
                <span className="absolute left-4 top-4 text-[10px] uppercase tracking-[0.28em] text-chrome-200">
                  {drop.tag}
                </span>
              </div>
              <h2 className="font-display text-2xl text-chrome-50">
                {drop.name}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-chrome-400">
                {drop.line}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <FullBleedVisual
        src="/images/studio-speakers.jpg"
        alt="Enceintes studio pour valider les drops"
        caption="Testé à haut volume. Validé au casque."
      />

      <section className="section-pad mx-auto max-w-3xl py-20 text-center sm:py-28">
        <ScrollChrome className="text-3xl sm:text-4xl">
          Un kit sur mesure.
        </ScrollChrome>
        <p className="mx-auto mt-5 max-w-md text-chrome-300">
          Besoin d’un pack pour ton EP ou ta chaîne? On construit la signature
          autour de ton flow.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <MagneticButton href="/contact">Demander un drop</MagneticButton>
          <MagneticButton
            href="https://www.tiktok.com/@arkanedot"
            variant="ghost"
          >
            Voir sur TikTok
          </MagneticButton>
        </div>
      </section>
    </main>
  );
}
