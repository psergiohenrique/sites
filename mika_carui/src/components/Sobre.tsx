import { useTranslations } from "next-intl";

export default function Sobre() {
  const t = useTranslations("Sobre");

  return (
    <section id="sobre" className="sobre">
      <div className="sobre-row">
        <div className="sobre-figure">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/mika-brown-3.jpeg" alt="Mika Carui" className="sobre-photo" />
          <div className="sobre-badge">
            <div className="sobre-badge-value">{t("badgeValue")}</div>
            <div className="sobre-badge-label">{t("badgeLabel")}</div>
          </div>
        </div>
        <div className="sobre-copy">
          <span className="eyebrow">{t("eyebrow")}</span>
          <h2 className="title">{t("title")}</h2>
          <p>{t("paragraph1")}</p>
          <p>{t("paragraph2")}</p>
          <div className="sobre-tags">
            <span className="tag-dark">{t("tagIntegrativa")}</span>
            <span className="tag-pink">{t("tagAnsiedade")}</span>
            <span className="tag-outline">{t("tagDepressao")}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
