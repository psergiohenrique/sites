import { setRequestLocale } from "next-intl/server";
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

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

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
