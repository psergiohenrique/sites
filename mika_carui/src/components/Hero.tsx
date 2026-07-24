import { useTranslations } from "next-intl";
import { whatsappUrl } from "@/lib/whatsapp";

export default function Hero() {
  const t = useTranslations("Hero");
  const tw = useTranslations("Whatsapp");
  const waUrl = whatsappUrl(tw("message"));

  return (
    <section id="topo" className="hero">
      <div className="hero-overlay" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/assets/mika-hero.jpeg" alt="Mika Carui" className="hero-img" />
      <div className="hero-content">
        <span className="hero-kicker">{t("kicker")}</span>
        <h1 className="title hero-title">
          {t("titleLine1")}
          <br />
          {t("titleLine2")} <span>{t("titleHighlight")}</span>
        </h1>
        <p className="hero-lead">{t("lead")}</p>
        <div className="hero-actions">
          <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            {t("ctaPrimary")}
          </a>
          <a href="#depoimentos" className="btn btn-outline-light">
            {t("ctaSecondary")}
          </a>
        </div>
      </div>
    </section>
  );
}
