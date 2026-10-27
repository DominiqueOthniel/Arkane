import type { Metadata } from "next";
import Image from "next/image";
import FullBleedVisual from "@/components/FullBleedVisual";
import MagneticButton from "@/components/MagneticButton";
import PageHero from "@/components/PageHero";
import ScrollChrome from "@/components/ScrollChrome";
import VowSlogan from "@/components/VowSlogan";
import { KITS, LINKS, RELEASES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Drops",
  description:
    "OCTAVIA Drum Kit Vol. 1, flips SoundCloud et packs atelier Arkane (@arkanedot).",
};

export default function DropsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Drops"
        title="OCTAVIA sur le drop."
        line="Kit public sur Linktree. Flips et originals sur SoundCloud @arkanedot. Packs atelier listés ci-dessous."
        imageSrc="/images/night-drops.jpg"
        imageAlt="Ambiance nocturne aux reflets chrome"
      />

      <section className="section-block section-pad relative">
        <div className="shell">
          <div className="section-head">
            <ScrollChrome className="text-3xl sm:text-5xl">
              Kits prêts à droper
            </ScrollChrome>
            <p className="text-chrome-300">
              OCTAVIA Vol. 1 est le drop public. Les autres packs décrivent ce
              que l’atelier livre en session (WAV, stems, BPM).
            </p>
          </div>

          <ul className="mt-14 grid gap-8 sm:grid-cols-2 sm:gap-10">
            {KITS.map((drop) => (
              <li key={drop.name} className="group">
                <div className="relative mb-5 aspect-[16/10] overflow-hidden">
                  <Image
                    src={drop.image}
                    alt={drop.name}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.02]"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/30"
                  />
                  <span className="absolute left-4 top-4 text-[10px] uppercase tracking-[0.28em] text-chrome-200">
                    {drop.tag}
                  </span>
                  <span className="absolute bottom-4 left-4 text-[10px] uppercase tracking-[0.22em] text-white/80">
                    {drop.status}
                  </span>
                </div>
                <h2 className="font-display text-2xl text-chrome-50">
                  {drop.name}
                </h2>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-chrome-500">
                  {drop.meta}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-chrome-400">
                  {drop.line}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-block section-pad relative border-t border-white/5">
        <div className="shell">
          <div className="section-head">
            <ScrollChrome className="text-3xl sm:text-4xl">
              Pistes @arkanedot
            </ScrollChrome>
          </div>
          <ul className="mt-10 divide-y divide-white/10 border-t border-white/10">
            {RELEASES.map((r) => (
              <li
                key={r.title}
                className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between"
              >
                <div>
                  <p className="font-display text-lg text-chrome-50">
                    {r.title}
                  </p>
                  <p className="text-sm text-chrome-400">
                    {r.credit} · {r.tags}
                  </p>
                </div>
                <p className="text-xs uppercase tracking-[0.2em] text-chrome-500">
                  {r.label} · {r.date}
                </p>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-4">
            <MagneticButton href={LINKS.soundcloud}>Écouter</MagneticButton>
            <MagneticButton href={LINKS.tiktok} variant="ghost">
              TikTok @arkanedot
            </MagneticButton>
          </div>
        </div>
      </section>

      <FullBleedVisual
        src="/images/studio-speakers.jpg"
        alt="Enceintes studio pour valider les drops"
        caption="808 slides · trap · drill"
      />

      <section className="section-block section-pad">
        <div className="shell mx-auto max-w-xl text-center">
          <div className="mb-10 flex justify-center">
            <VowSlogan variant="seal" />
          </div>
          <ScrollChrome className="text-3xl sm:text-4xl">
            Kit sur mesure
          </ScrollChrome>
          <p className="mx-auto mt-5 max-w-md text-chrome-300">
            Besoin d’un kit custom (BPM, genre, nombre de one-shots)? Envoie le
            brief. On répond avec un devis et une date de drop.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <MagneticButton href="/contact">Demander un pack</MagneticButton>
            <MagneticButton href={LINKS.tiktok} variant="ghost">
              Voir sur TikTok
            </MagneticButton>
          </div>
        </div>
      </section>
    </main>
  );
}
