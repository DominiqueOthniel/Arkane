import FullBleedVisual from "@/components/FullBleedVisual";
import Hero from "@/components/Hero";
import HomeTeasers from "@/components/HomeTeasers";
import MagneticButton from "@/components/MagneticButton";
import ScrollChrome from "@/components/ScrollChrome";
import VowBlock from "@/components/VowBlock";
import { LINKS, PROFILE, RELEASES } from "@/lib/content";

export default function Home() {
  const latest = RELEASES.slice(0, 3);

  return (
    <main id="top">
      <Hero />

      <FullBleedVisual
        src="/images/studio-speakers.jpg"
        alt="Enceintes studio chrome dans le noir"
        caption={`${PROFILE.lane} · ${PROFILE.base}`}
      />

      <section className="section-pad relative mx-auto max-w-6xl border-t border-white/5 py-16 sm:py-20">
        <p className="mb-4 text-xs uppercase tracking-[0.32em] text-chrome-400">
          Sur SoundCloud
        </p>
        <ScrollChrome className="max-w-2xl text-3xl sm:text-4xl">
          Flips & originals
        </ScrollChrome>
        <ul className="mt-10 divide-y divide-white/10 border-t border-white/10">
          {latest.map((r) => (
            <li
              key={r.title}
              className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
            >
              <div>
                <p className="font-display text-lg text-chrome-50">{r.title}</p>
                <p className="mt-1 text-sm text-chrome-400">
                  {r.credit} · {r.tags}
                </p>
              </div>
              <p className="shrink-0 text-xs uppercase tracking-[0.2em] text-chrome-500">
                {r.label} · {r.date}
              </p>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <MagneticButton href={LINKS.soundcloud} variant="ghost">
            Ouvrir SoundCloud
          </MagneticButton>
        </div>
      </section>

      <HomeTeasers />

      <VowBlock line="OCTAVIA, les flips, les sessions. On livre du fichier, pas du flou." />

      <section className="section-pad relative mx-auto max-w-4xl py-24 text-center sm:py-32">
        <p className="mb-4 text-xs uppercase tracking-[0.32em] text-chrome-400">
          Booking
        </p>
        <ScrollChrome className="text-4xl sm:text-5xl">
          Beat, flip ou mix.
        </ScrollChrome>
        <p className="mx-auto mt-5 max-w-md text-chrome-300">
          Envoie BPM, 3 refs et ta deadline. Réponse via{" "}
          {LINKS.emailDisplay} ou TikTok {PROFILE.handle}.
        </p>
        <div className="mt-9 flex justify-center">
          <MagneticButton href="/contact">Écrire à Arkane</MagneticButton>
        </div>
      </section>
    </main>
  );
}
