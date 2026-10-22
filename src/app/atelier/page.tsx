import type { Metadata } from "next";
import FullBleedVisual from "@/components/FullBleedVisual";
import MagneticButton from "@/components/MagneticButton";
import PageHero from "@/components/PageHero";
import ScrollChrome from "@/components/ScrollChrome";
import VowSlogan from "@/components/VowSlogan";

export const metadata: Metadata = {
  title: "Atelier",
  description:
    "L’atelier Arkane: production, mix et master. Sessions nocturnes, console chrome, gloss radio-ready.",
};

const pillars = [
  {
    title: "Production",
    line: "Trap mélodique, électro sombre, beats cinématiques. On part de la mélodie, le genre suit.",
  },
  {
    title: "Mix & Master",
    line: "Bass qui colle, tops nets, headroom propre. Le drop doit frapper sans saturations sales.",
  },
  {
    title: "Sound design",
    line: "Textures chrome, risers, one-shots. La matière sonore qui signe ton projet.",
  },
];

export default function AtelierPage() {
  return (
    <main>
      <PageHero
        eyebrow="Atelier"
        title="Le studio mental."
        line="Sessions nocturnes, écrans de DAW, console qui brille. On sculpte jusqu’à ce que ça claque."
        imageSrc="/images/studio-console.jpg"
        imageAlt="Console de mixage métallique dans l’atelier Arkane"
      />

      <section className="section-pad relative mx-auto max-w-6xl py-20 sm:py-28">
        <ScrollChrome className="max-w-2xl text-3xl sm:text-5xl">
          Densité. Contraste. Impact.
        </ScrollChrome>
        <p className="mt-6 max-w-xl text-chrome-300">
          L’atelier Arkane suit le rythme des drops: cut court, énergie haute,
          finition chrome. Pas de bruit inutile. Juste la pression utile.
        </p>

        <ul className="mt-16 grid gap-12 sm:grid-cols-3">
          {pillars.map((item) => (
            <li
              key={item.title}
              className="border-t border-white/15 pt-6"
            >
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
        alt="Session de production dans le studio sombre"
        caption="DAW. Casque. Minuit."
      />

      <section className="section-pad mx-auto max-w-3xl py-20 text-center sm:py-28">
        <div className="mb-8 flex justify-center">
          <VowSlogan variant="seal" />
        </div>
        <ScrollChrome className="text-3xl sm:text-4xl">
          Réserve une session.
        </ScrollChrome>
        <p className="mx-auto mt-5 max-w-md text-chrome-300">
          Production complète ou polish mix. On aligne le son sur ton identité.
        </p>
        <div className="mt-8 flex justify-center">
          <MagneticButton href="/contact">Parler projet</MagneticButton>
        </div>
      </section>
    </main>
  );
}
