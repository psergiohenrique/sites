import { useTranslations } from "next-intl";
import { SOCIAL } from "@/lib/social";

export default function Conecte() {
  const t = useTranslations("Conecte");

  return (
    <section id="conecte" className="conecte">
      <div className="conecte-inner">
        <div className="section-head">
          <span className="eyebrow">{t("eyebrow")}</span>
          <h2 className="title">{t("title")}</h2>
          <p>{t("text")}</p>
        </div>
        <div className="conecte-grid">
          {SOCIAL.map((s) => (
            <a key={s.key} href={s.href} target="_blank" rel="noopener noreferrer" className="conecte-card">
              <span className="conecte-network title">{s.label}</span>
              <span className="conecte-handle">{s.handle}</span>
              <span className="conecte-cta">{t(`cta.${s.key}`)} →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
