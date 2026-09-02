import Header from "@/components/Header";
import Hero from "@/components/Hero";
import InfoStrip from "@/components/InfoStrip";
import Galeria from "@/components/Galeria";
import SobMedida from "@/components/SobMedida";
import ComoFunciona from "@/components/ComoFunciona";
import Atendimento from "@/components/Atendimento";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";
import WhatsappFloat from "@/components/WhatsappFloat";

export default function Home() {
  return (
    <div style={{ fontFamily: "var(--font-body)", color: "#1E1815", background: "#F6EFE6", overflowX: "hidden" }}>
      <Header />
      <Hero />
      <InfoStrip />
      <Galeria />
      <SobMedida />
      <ComoFunciona />
      <Atendimento />
      <Contato />
      <Footer />
      <WhatsappFloat />
    </div>
  );
}
