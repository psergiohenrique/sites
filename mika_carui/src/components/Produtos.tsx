import { useTranslations } from "next-intl";
import { whatsappUrl } from "@/lib/whatsapp";

type Produto = { title: string; desc: string; image?: string; href?: string };

// TODO: trocar placeholders pelos produtos reais e link do catálogo
export default function Produtos() {
  const t = useTranslations("Produtos");
  const tw = useTranslations("Whatsapp");
  const items = t.raw("items") as Produto[];
  const catalogoUrl = whatsappUrl(tw("catalogo"));

  return (
    <section id="produtos" className="produtos">
      <div className="produtos-inner">
        <div className="section-head">
          <span className="eyebrow">{t("eyebrow")}</span>
          <h2 className="title">{t("title")}</h2>
        </div>
        <div className="produtos-grid">
          {items.map((p) => (
            <article key={p.title} className="produto-card">
              {p.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={p.image} alt={p.title} className="produto-img" />
              ) : (
                <div className="produto-img produto-img-placeholder" />
              )}
              <div className="produto-body">
                <h3 className="title">{p.title}</h3>
                <p>{p.desc}</p>
                {p.href && (
                  <a href={p.href} target="_blank" rel="noopener noreferrer" className="produto-link">
                    {t("cta")} →
                  </a>
                )}
              </div>
            </article>
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
