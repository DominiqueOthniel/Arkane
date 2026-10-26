import type { Metadata } from "next";
import MagneticButton from "@/components/MagneticButton";
import PageHero from "@/components/PageHero";
import ScrollChrome from "@/components/ScrollChrome";
import VowSlogan from "@/components/VowSlogan";
import { SLOGAN } from "@/lib/brand";
import { LINKS, PROFILE, STUDIO_OFFERS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: `${SLOGAN}. Booking beat, flip ou mix. ${LINKS.emailDisplay} · ${PROFILE.handle}.`,
};

const channels = [
  {
    label: "Booking",
    value: LINKS.emailDisplay,
    href: LINKS.email,
  },
  {
    label: "TikTok",
    value: PROFILE.handle,
    href: LINKS.tiktok,
  },
  {
    label: "SoundCloud",
    value: "soundcloud.com/arkanedot",
    href: LINKS.soundcloud,
  },
  {
    label: "Instagram",
    value: PROFILE.handle,
    href: LINKS.instagram,
  },
];

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Brief + deadline."
        line="Beat, flip ou mix. Indique le format, le BPM, 3 refs et la date. On répond avec un devis."
        imageSrc="/images/studio-session.jpg"
        imageAlt="Studio Arkane prêt pour une session"
      />

      <section className="section-pad relative mx-auto max-w-4xl py-20 sm:py-28">
        <ScrollChrome className="text-3xl sm:text-5xl">
          Formats dispo
        </ScrollChrome>
        <ul className="mt-10 space-y-6 border-t border-white/10 pt-8">
          {STUDIO_OFFERS.map((o) => (
            <li key={o.title}>
              <p className="font-display text-xl text-chrome-50">{o.title}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-chrome-500">
                {o.deliverables}
              </p>
              <p className="mt-2 text-sm text-chrome-400">{o.detail}</p>
            </li>
          ))}
        </ul>

        <ul className="mt-14 space-y-8 border-t border-white/10 pt-10">
          {channels.map((item) => (
            <li
              key={item.label}
              className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between"
            >
              <span className="text-xs uppercase tracking-[0.28em] text-chrome-500">
                {item.label}
              </span>
              <a
                href={item.href}
                className="font-display text-xl text-chrome-100 transition hover:text-white sm:text-2xl"
                data-magnetic
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
              >
                {item.value}
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex flex-wrap gap-4">
          <MagneticButton href={LINKS.email}>Écrire à Arkane</MagneticButton>
          <MagneticButton href={LINKS.tiktok} variant="ghost">
            Ouvrir TikTok
          </MagneticButton>
        </div>

        <div className="mt-20 flex flex-col items-center border-t border-white/10 pt-14 text-center">
          <VowSlogan variant="seal" />
          <p className="mt-5 max-w-sm text-sm text-chrome-500">
            Réponse sous 48 h ouvrées. Fichiers livrés avec date de drop.
          </p>
        </div>
      </section>
    </main>
  );
}
