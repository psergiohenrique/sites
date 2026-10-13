import { useTranslations } from "next-intl";
import { whatsappUrl } from "@/lib/whatsapp";

export default function Palestras() {
  const t = useTranslations("Palestras");
  const tw = useTranslations("Whatsapp");
  const waUrl = whatsappUrl(tw("eventos"));

  return (
    <section id="palestras" className="hero hero-alt">
      <div className="hero-overlay" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/assets/mika-window.jpeg" alt="Mika Carui" className="hero-img" />
      <div className="hero-content">
        <span className="hero-kicker">{t("eyebrow")}</span>
        <h2 className="title hero-title">{t("title")}</h2>
        <p className="hero-lead">{t("text")}</p>
        <div className="hero-actions">
          <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn btn-light">
            {t("cta")}
          </a>
        </div>
      </div>
    </section>
  );
}
