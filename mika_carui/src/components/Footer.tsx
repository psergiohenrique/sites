import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");
  const nav = useTranslations("Nav");

  return (
    <footer>
      <div className="footer-brand">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/icon-mika-white.png" alt="" className="footer-logo" />
        <span className="footer-brand-text">
          <span className="footer-brand-name">Mika Carui</span>
          <span className="footer-brand-tagline">{nav("tagline")}</span>
        </span>
      </div>
      <div className="footer-links">
        <a href="https://instagram.com/mikacarui" target="_blank" rel="noopener noreferrer">
          @mikacarui
        </a>
        <span>{t("license")}</span>
        <span>{t("copyright")}</span>
      </div>
    </footer>
  );
}
