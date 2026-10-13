import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Nav from "@/components/Nav";
import Conecte from "@/components/Conecte";
import Footer from "@/components/Footer";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Sobre" });
  return {
    title: t("metaTitle"),
    alternates: { canonical: locale === "pt" ? "/sobre" : `/${locale}/sobre` },
  };
}

export default async function SobrePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Sobre");
  const paragraphs = t.raw("paragraphs") as string[];

  return (
    <>
      <Nav />
      <main className="page">
        <article className="sobre-page">
          <figure className="sobre-page-figure">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/mika-brown-1.jpeg" alt={t("photoAlt")} className="sobre-page-photo" />
            <figcaption className="sobre-page-badge">
              <span className="title">Mireile Carui</span>
              <span>{t("badge")}</span>
            </figcaption>
          </figure>
          <div className="sobre-page-copy">
            <span className="eyebrow">{t("eyebrow")}</span>
            <h1 className="title page-title">{t("title")}</h1>
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </article>
      </main>
      <Conecte />
      <Footer />
    </>
  );
}
