import { useTranslations } from "next-intl";
import { SOCIAL } from "@/lib/social";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer>
      <span className="footer-brand">MIKACARUI</span>
      <div className="footer-links">
        {SOCIAL.map((s) => (
          <a key={s.key} href={s.href} target="_blank" rel="noopener noreferrer">
            {s.label}
          </a>
        ))}
        <span>{t("copyright")}</span>
      </div>
    </footer>
  );
}
