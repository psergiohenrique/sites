import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Nav from "@/components/Nav";
import Conecte from "@/components/Conecte";
import Footer from "@/components/Footer";
import { whatsappUrl } from "@/lib/whatsapp";

type Item = { index: string; title: string; desc: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Cursos" });
  return {
    title: t("metaTitle"),
    alternates: {
      canonical: locale === "pt" ? "/cursos-e-protocolos" : `/${locale}/cursos-e-protocolos`,
    },
  };
}

// TODO: substituir pelos cursos e protocolos reais da Mika
export default async function CursosPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Cursos");
  const tw = await getTranslations("Whatsapp");
  const items = t.raw("items") as Item[];

  return (
    <>
      <Nav />
      <main className="page">
        <div className="page-inner page-inner-wide">
          <span className="eyebrow">{t("eyebrow")}</span>
          <h1 className="title page-title">{t("title")}</h1>
          <p>{t("intro")}</p>
          <div className="cursos-grid">
            {items.map((c) => (
              <div key={c.index} className="curso-card">
                <span className="index">{c.index}</span>
                <h2 className="title">{c.title}</h2>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
          <a
            href={whatsappUrl(tw("cursos"))}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            {t("cta")}
          </a>
        </div>
      </main>
      <Conecte />
      <Footer />
    </>
  );
}
