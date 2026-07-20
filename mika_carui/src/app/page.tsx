import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Stats from "@/components/Stats";
import Sobre from "@/components/Sobre";
import Galeria from "@/components/Galeria";
import Abordagem from "@/components/Abordagem";
import Depoimentos from "@/components/Depoimentos";
import CtaFinal from "@/components/CtaFinal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Marquee />
      <Stats />
      <Sobre />
      <Galeria />
      <Abordagem />
      <Depoimentos />
      <CtaFinal />
      <Footer />
    </>
  );
}
