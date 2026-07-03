import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Servicos from "@/components/Servicos";
import Frota from "@/components/Frota";
import Sobre from "@/components/Sobre";
import CtaFinal from "@/components/CtaFinal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Servicos />
      <Frota />
      <Sobre />
      <CtaFinal />
      <Footer />
    </>
  );
}
