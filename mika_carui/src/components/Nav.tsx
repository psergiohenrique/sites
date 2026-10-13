"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { whatsappUrl } from "@/lib/whatsapp";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const t = useTranslations("Nav");
  const tw = useTranslations("Whatsapp");
  const locale = useLocale();
  const pathname = usePathname();
  const otherLocale = locale === "pt" ? "en" : "pt";
  const waUrl = whatsappUrl(tw("eventos"));

  const LINKS = [
    { href: "/sobre", label: t("sobre") },
    { href: "/cursos-e-protocolos", label: t("cursos") },
    { href: "/#produtos", label: t("produtos") },
    { href: "/#conecte", label: t("contato") },
  ];

  return (
    <header className="nav">
      <Link href="/" className="nav-brand" aria-label={t("brandAlt")}>
        MIKACARUI
      </Link>

      <ul className="nav-links">
        {LINKS.map((l) => (
          <li key={l.href}>
            <Link href={l.href}>{l.label}</Link>
          </li>
        ))}
      </ul>

      <div className="nav-cta-group">
        <Link href={pathname} locale={otherLocale} className="nav-locale" aria-label={otherLocale === "en" ? "Switch to English" : "Mudar para português"}>
          {otherLocale.toUpperCase()}
        </Link>
        <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary nav-cta">
          {t("cta")}
        </a>
      </div>

      <button
        onClick={() => setMenuOpen((v) => !v)}
        aria-label={t("openMenu")}
        aria-expanded={menuOpen}
        className="nav-toggle"
      >
        <span />
        <span />
        <span />
      </button>

      {menuOpen && (
        <div className="nav-mobile">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>
              {l.label}
            </Link>
          ))}
          <Link href={pathname} locale={otherLocale} className="nav-locale" onClick={() => setMenuOpen(false)}>
            {otherLocale === "en" ? "English" : "Português"}
          </Link>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="btn btn-primary"
          >
            {t("cta")}
          </a>
        </div>
      )}
    </header>
  );
}
