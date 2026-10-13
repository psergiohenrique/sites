import { setRequestLocale } from "next-intl/server";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Palestras from "@/components/Palestras";
import Banners from "@/components/Banners";
import Produtos from "@/components/Produtos";
import Conecte from "@/components/Conecte";
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
      <Palestras />
      <Banners />
      <Produtos />
      <Conecte />
      <Footer />
    </>
  );
}
