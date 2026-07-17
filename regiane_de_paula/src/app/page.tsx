import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import QuemSouEu from "@/components/QuemSouEu";
import Servicos from "@/components/Servicos";
import Depoimentos from "@/components/Depoimentos";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <QuemSouEu />
      <Servicos />
      <Depoimentos />
      <Contato />
      <Footer />
    </>
  );
}
