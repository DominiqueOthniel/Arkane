import type { Metadata } from "next";
import MagneticButton from "@/components/MagneticButton";
import PageHero from "@/components/PageHero";
import ScrollChrome from "@/components/ScrollChrome";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contacte Arkane pour une session, un kit ou une identité sonore. Passons en session.",
};

const channels = [
  {
    label: "Email",
    value: "hello@arkane.studio",
    href: "mailto:hello@arkane.studio",
  },
  {
    label: "TikTok",
    value: "@arkanedot",
    href: "https://www.tiktok.com/@arkanedot",
  },
];

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Passons en session."
        line="Un single, un EP, un kit, une identité. Dis-nous ce que tu veux faire résonner."
        imageSrc="/images/studio-session.jpg"
        imageAlt="Studio Arkane prêt pour une session"
      />

      <section className="section-pad relative mx-auto max-w-4xl py-20 sm:py-28">
        <ScrollChrome className="text-3xl sm:text-5xl">
          On sculpte le reste.
        </ScrollChrome>
        <p className="mt-6 max-w-xl text-chrome-300">
          Décris ton projet en quelques lignes: tempo, références, deadline.
          On revient avec une direction claire et un plan de session.
        </p>

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
          <MagneticButton href="mailto:hello@arkane.studio">
            Écrire à Arkane
          </MagneticButton>
          <MagneticButton
            href="https://www.tiktok.com/@arkanedot"
            variant="ghost"
          >
            Ouvrir TikTok
          </MagneticButton>
        </div>
      </section>
    </main>
  );
}
