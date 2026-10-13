import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Nav from "@/components/Nav";
import ProdutoCard from "@/components/ProdutoCard";
import Footer from "@/components/Footer";
import { Link } from "@/i18n/navigation";
import { PRODUTOS, getProduto } from "@/lib/produtos";
import { whatsappUrl } from "@/lib/whatsapp";

type Params = Promise<{ locale: string; slug: string }>;

export function generateStaticParams() {
  return PRODUTOS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale, slug } = await params;
  const produto = getProduto(slug);
  if (!produto) return {};
  const t = await getTranslations({ locale, namespace: "Produto" });
  const tp = await getTranslations({ locale, namespace: "Produtos" });
  const title = tp("itemTitle", { n: produto.numero });
  const path = `/produtos/${slug}`;
  return {
    title: `${title} — Mika Carui`,
    description: t("lead"),
    alternates: { canonical: locale === "pt" ? path : `/${locale}${path}` },
    openGraph: { images: [produto.image] },
  };
}

export default async function ProdutoPage({ params }: { params: Params }) {
  const { locale, slug } = await params;
  const produto = getProduto(slug);
  if (!produto) notFound();
  setRequestLocale(locale);

  const t = await getTranslations("Produto");
  const tp = await getTranslations("Produtos");
  const tw = await getTranslations("Whatsapp");
  const title = tp("itemTitle", { n: produto.numero });
  const paragraphs = t.raw("paragraphs") as string[];
  const comprarUrl = produto.comprarUrl ?? whatsappUrl(tw("produto") + title);
  const outros = PRODUTOS.filter((p) => p.slug !== slug).slice(0, 5);

  return (
    <>
      <Nav />
      <main className="page">
        <div className="produto-page">
          <Link href="/#produtos" className="produto-back">
            ← {t("back")}
          </Link>
          <div className="produto-page-row">
            <figure className="produto-page-figure">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={produto.image} alt="" aria-hidden className="produto-page-glow" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={produto.image} alt={title} width={326} height={381} className="produto-page-img" />
            </figure>
            <div className="produto-page-copy">
              <span className="eyebrow">{t("eyebrow")}</span>
              <h1 className="title page-title">{title}</h1>
              <p className="produto-page-lead">{t("lead")}</p>
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <a href={comprarUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary produto-comprar">
                {t("comprar")}
              </a>
            </div>
          </div>
        </div>

        <section className="produto-outros">
          <h2 className="title">{t("outros")}</h2>
          <div className="produtos-grid">
            {outros.map((p) => (
              <ProdutoCard key={p.slug} produto={p} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
