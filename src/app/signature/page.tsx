import type { Metadata } from "next";
import FullBleedVisual from "@/components/FullBleedVisual";
import MagneticButton from "@/components/MagneticButton";
import PageHero from "@/components/PageHero";
import ScrollChrome from "@/components/ScrollChrome";
import VowBlock from "@/components/VowBlock";
import { SLOGAN } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Signature",
  description: `${SLOGAN}. Noir absolu, argent liquide, melody first. Identité sonore de maison.`,
};

const values = [
  {
    title: "Melody first",
    line: "Le genre suit. La mélodie mène. Chaque beat doit rester en tête après un seul passage.",
  },
  {
    title: "Chrome liquide",
    line: "Esthétique sombre argent: contraste haut, gloss, matière. Le son a la même finition.",
  },
  {
    title: "Cut net",
    line: "Inspiré des drops courts: zéro filler, entrée directe, sortie qui laisse une trace.",
  },
];

export default function SignaturePage() {
  return (
    <main>
      <PageHero
        eyebrow="Signature"
        title="Une maison, un gloss."
        line="Arkane n’est pas un template. C’est une direction: sombre, métallique, melody-driven."
        imageSrc="/images/chrome-flow.jpg"
        imageAlt="Métal liquide chrome, signature visuelle Arkane"
      />

      <section className="section-pad relative mx-auto max-w-6xl py-20 sm:py-28">
        <ScrollChrome className="max-w-3xl text-3xl sm:text-5xl">
          Chrome liquide. Bass qui percute.
        </ScrollChrome>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-chrome-300 sm:text-lg">
          Inspiré par l&apos;énergie studio des drops TikTok: sessions brutes,
          kits qui claquent, cuts qui restent. On construit une identité sonore
          pour que chaque artiste sonne unique, sans diluer la marque.
        </p>

        <ul className="mt-16 grid gap-12 sm:grid-cols-3">
          {values.map((item) => (
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

      <FullBleedVisual
        src="/images/studio-session.jpg"
        alt="Session Arkane dans le noir"
        caption="Noir absolu. Argent en fusion."
      />

      <VowBlock line="La signature n’est pas un logo. C’est ce qui reste quand le volume tombe." />

      <section className="section-pad mx-auto max-w-3xl py-20 text-center sm:py-28">
        <ScrollChrome className="text-3xl sm:text-4xl">
          Alignons ta signature.
        </ScrollChrome>
        <p className="mx-auto mt-5 max-w-md text-chrome-300">
          Direction artistique sonore, chaîne de mix, kit d’identité. On pose le
          cadre, tu poses le flow.
        </p>
        <div className="mt-8 flex justify-center">
          <MagneticButton href="/contact">Travailler ensemble</MagneticButton>
        </div>
      </section>
    </main>
  );
}
