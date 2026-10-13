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
            <a
              key={s.key}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="conecte-banner"
              aria-label={t(`cta.${s.key}`)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={s.banner} alt={t(`cta.${s.key}`)} width={800} height={325} loading="lazy" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
