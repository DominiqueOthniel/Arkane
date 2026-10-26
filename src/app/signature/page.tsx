import type { Metadata } from "next";
import FullBleedVisual from "@/components/FullBleedVisual";
import MagneticButton from "@/components/MagneticButton";
import PageHero from "@/components/PageHero";
import ScrollChrome from "@/components/ScrollChrome";
import VowBlock from "@/components/VowBlock";
import { SLOGAN } from "@/lib/brand";
import { PROFILE, RELEASES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Signature",
  description: `${SLOGAN}. Trap, drill, bass. ${PROFILE.handle} · ${PROFILE.base}.`,
};

const pillars = [
  {
    title: "808 slides",
    line: "Bass trap et drill: glides longs, sub propre, snare qui coupe. Signature audible dès la première barre.",
  },
  {
    title: "Flips nets",
    line: "Réf. You Wanted More, God Complex, perfect princess: structure claire, drop immédiat, pas de intro de 40 s.",
  },
  {
    title: "Kits utiles",
    line: "OCTAVIA Vol. 1 et packs atelier: one-shots nommés, BPM indiqués, WAV dry. Tu drope, tu charges, tu joues.",
  },
];

export default function SignaturePage() {
  return (
    <main>
      <PageHero
        eyebrow="Signature"
        title={PROFILE.pronunciation}
        line={`ARKANE. · ${PROFILE.handle} · ${PROFILE.base}. Trap, drill, electronic & bass.`}
        imageSrc="/images/chrome-flow.jpg"
        imageAlt="Métal liquide chrome, signature visuelle Arkane"
      />

      <section className="section-pad relative mx-auto max-w-6xl py-20 sm:py-28">
        <ScrollChrome className="max-w-3xl text-3xl sm:text-5xl">
          808. Flip. Kit.
        </ScrollChrome>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-chrome-300 sm:text-lg">
          Ligne publique: TikTok, Instagram, SoundCloud, Linktree (OCTAVIA).
          Même lane partout: bass qui slide, flips courts, kits prêts session.
        </p>

        <ul className="mt-16 grid gap-12 sm:grid-cols-3">
          {pillars.map((item) => (
            <li key={item.title} className="border-t border-white/15 pt-6">
              <h2 className="font-display text-2xl text-chrome-50">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-chrome-400">
                {item.line}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="section-pad mx-auto max-w-6xl border-t border-white/5 py-16">
        <p className="mb-6 text-xs uppercase tracking-[0.28em] text-chrome-500">
          Piste récente
        </p>
        <ul className="grid gap-4 sm:grid-cols-2">
          {RELEASES.slice(0, 4).map((r) => (
            <li
              key={r.title}
              className="border border-white/10 px-5 py-4"
            >
              <p className="font-display text-chrome-50">{r.title}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-chrome-500">
                {r.date} · {r.tags}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <FullBleedVisual
        src="/images/studio-session.jpg"
        alt="Session Arkane dans le noir"
        caption={`${SLOGAN}`}
      />

      <VowBlock line="Pas un moodboard. Des titres, des kits, des dates de drop." />

      <section className="section-pad mx-auto max-w-3xl py-20 text-center sm:py-28">
        <ScrollChrome className="text-3xl sm:text-4xl">
          Même lane que toi
        </ScrollChrome>
        <p className="mx-auto mt-5 max-w-md text-chrome-300">
          Tu veux un flip, un kit ou un mix dans cette signature? Envoie refs +
          BPM.
        </p>
        <div className="mt-8 flex justify-center">
          <MagneticButton href="/contact">Travailler ensemble</MagneticButton>
        </div>
      </section>
    </main>
  );
}
