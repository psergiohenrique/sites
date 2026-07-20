import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Reflexao from "@/components/Reflexao";
import Credenciais from "@/components/Credenciais";
import ServicosPrevia from "@/components/ServicosPrevia";
import CtaFinal from "@/components/CtaFinal";
import QuemSouEu from "@/components/QuemSouEu";
import Servicos from "@/components/Servicos";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Reflexao />
      <Credenciais />
      <ServicosPrevia />
      <CtaFinal />
      <QuemSouEu />
      <Servicos />
      <Contato />
      <Footer />
    </>
  );
}
