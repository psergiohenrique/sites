import { useTranslations } from "next-intl";
import { whatsappUrl } from "@/lib/whatsapp";
import { PRODUTOS } from "@/lib/produtos";
import ProdutoCard from "@/components/ProdutoCard";

// TODO: trocar link do catálogo quando existir
export default function Produtos() {
  const t = useTranslations("Produtos");
  const tw = useTranslations("Whatsapp");
  const catalogoUrl = whatsappUrl(tw("catalogo"));

  return (
    <section id="produtos" className="produtos">
      <div className="produtos-inner">
        <div className="section-head">
          <span className="eyebrow">{t("eyebrow")}</span>
          <h2 className="title">{t("title")}</h2>
        </div>
        <div className="produtos-grid">
          {PRODUTOS.map((p) => (
            <ProdutoCard key={p.slug} produto={p} />
          ))}
        </div>
        <div className="produtos-catalogo">
          <a href={catalogoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            {t("catalogo")}
          </a>
        </div>
      </div>
    </section>
  );
}
