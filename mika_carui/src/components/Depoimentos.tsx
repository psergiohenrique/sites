import { useTranslations } from "next-intl";

export default function Depoimentos() {
  const t = useTranslations("Depoimentos");
  const items = t.raw("items") as { quote: string; name: string }[];

  return (
    <section id="depoimentos" className="depoimentos">
      <div className="depoimentos-head">
        <span className="eyebrow">{t("eyebrow")}</span>
        <h2 className="title">{t("title")}</h2>
      </div>
      <div className="depoimentos-track">
        {items.map((it) => (
          <div key={it.name} className="depoimento-card">
            <span className="depoimento-quote-mark">&quot;</span>
            <p className="depoimento-text">{it.quote}</p>
            <span className="depoimento-name">{it.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
