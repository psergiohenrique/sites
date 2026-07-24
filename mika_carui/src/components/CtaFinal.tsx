import { useTranslations } from "next-intl";
import { whatsappUrl } from "@/lib/whatsapp";

export default function CtaFinal() {
  const t = useTranslations("CtaFinal");
  const tw = useTranslations("Whatsapp");
  const waUrl = whatsappUrl(tw("message"));

  return (
    <section className="cta-final">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/assets/mika-brown-2.jpeg" alt="Mika Carui" className="cta-final-img" />
      <div className="cta-final-overlay" />
      <div className="cta-final-inner">
        <h2 className="title">{t("title")}</h2>
        <p>{t("text")}</p>
        <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-cta-final">
          {t("cta")}
        </a>
      </div>
    </section>
  );
}
