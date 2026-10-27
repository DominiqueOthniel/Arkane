import type { Metadata } from "next";
import FullBleedVisual from "@/components/FullBleedVisual";
import MagneticButton from "@/components/MagneticButton";
import PageHero from "@/components/PageHero";
import ScrollChrome from "@/components/ScrollChrome";
import VowSlogan from "@/components/VowSlogan";
import { LINKS, PROFILE, STUDIO_OFFERS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Atelier",
  description:
    "Atelier Arkane: beat from scratch, flip/remix, mix & polish. Trap, drill, 808. Booking @arkanedot.",
};

export default function AtelierPage() {
  return (
    <main>
      <PageHero
        eyebrow="Atelier"
        title="Dans la session."
        line={`${PROFILE.lane}. Base ${PROFILE.base}. DAW, 808 slides, flips type SoundCloud.`}
        imageSrc="/images/studio-console.jpg"
        imageAlt="Console de mixage métallique dans l’atelier Arkane"
      />

      <section className="section-block section-pad relative">
        <div className="shell">
          <div className="section-head">
            <ScrollChrome className="text-3xl sm:text-5xl">
              Trois formats nets
            </ScrollChrome>
            <p className="text-chrome-300">
              Tu envoies le brief, on renvoie des fichiers datés. Pas de pack
              “expérience”: des WAV, des stems, un master.
            </p>
          </div>

          <ul className="mt-16 grid gap-10 sm:grid-cols-3 sm:gap-12">
            {STUDIO_OFFERS.map((item) => (
              <li key={item.title} className="border-t border-white/15 pt-6">
                <h2 className="font-display text-2xl text-chrome-50">
                  {item.title}
                </h2>
                <p className="mt-3 text-xs uppercase tracking-[0.18em] text-chrome-500">
                  {item.deliverables}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-chrome-400">
                  {item.detail}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FullBleedVisual
        src="/images/studio-session.jpg"
        alt="Session de production dans le studio sombre"
        caption="FL / Ableton · casque · 808"
      />

      <section className="section-block section-pad">
        <div className="shell mx-auto max-w-xl text-center">
          <div className="mb-8 flex justify-center">
            <VowSlogan variant="seal" />
          </div>
          <ScrollChrome className="text-3xl sm:text-4xl">
            Brief en cinq lignes
          </ScrollChrome>
          <p className="mx-auto mt-5 max-w-md text-chrome-300">
            Format voulu · BPM · 3 refs · deadline · budget. Envoie à{" "}
            {LINKS.emailDisplay} ou DM {PROFILE.handle}.
          </p>
          <div className="mt-8 flex justify-center">
            <MagneticButton href="/contact">Booker la session</MagneticButton>
          </div>
        </div>
      </section>
    </main>
  );
}
