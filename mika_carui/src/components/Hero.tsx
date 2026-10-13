import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("Hero");

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
          <span>{t("titleHighlight")}</span>
        </h1>
        <p className="hero-lead">{t("lead")}</p>
      </div>
    </section>
  );
}
