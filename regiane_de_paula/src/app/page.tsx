import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Reflexao from "@/components/Reflexao";
import ServicosPrevia from "@/components/ServicosPrevia";
import EbookCta from "@/components/EbookCta";
import CtaFinal from "@/components/CtaFinal";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Reflexao />
      <ServicosPrevia />
      <EbookCta />
      <CtaFinal />
      <Contato />
      <Footer />
    </>
  );
}
