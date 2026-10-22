import FullBleedVisual from "@/components/FullBleedVisual";
import Hero from "@/components/Hero";
import HomeTeasers from "@/components/HomeTeasers";
import MagneticButton from "@/components/MagneticButton";
import ScrollChrome from "@/components/ScrollChrome";
import VowBlock from "@/components/VowBlock";

export default function Home() {
  return (
    <main id="top">
      <Hero />

      <FullBleedVisual
        src="/images/studio-speakers.jpg"
        alt="Enceintes studio chrome dans le noir"
        caption="Pression. Gloss. Silence ensuite."
      />

      <HomeTeasers />

      <VowBlock line="Pas un slogan décoratif. Une direction. On tient jusqu’au cut final." />

      <section className="section-pad relative mx-auto max-w-4xl py-24 text-center sm:py-32">
        <p className="mb-4 text-xs uppercase tracking-[0.32em] text-chrome-400">
          Session
        </p>
        <ScrollChrome className="text-4xl sm:text-5xl">
          Passons en session.
        </ScrollChrome>
        <p className="mx-auto mt-5 max-w-md text-chrome-300">
          Un single, un EP, un kit. Dis-nous ce que tu veux faire résonner.
        </p>
        <div className="mt-9 flex justify-center">
          <MagneticButton href="/contact">Écrire à Arkane</MagneticButton>
        </div>
      </section>
    </main>
  );
}
