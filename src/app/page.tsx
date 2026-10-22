import Atelier from "@/components/Atelier";
import ChromeCursor from "@/components/ChromeCursor";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Signature from "@/components/Signature";

export default function Home() {
  return (
    <main id="top" className="relative bg-ink text-chrome-50">
      <ChromeCursor />
      <Hero />
      <Signature />
      <Atelier />
      <Contact />
    </main>
  );
}
