"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { whatsappUrl } from "@/lib/whatsapp";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const t = useTranslations("Nav");
  const tw = useTranslations("Whatsapp");
  const locale = useLocale();
  const otherLocale = locale === "pt" ? "en" : "pt";
  const waUrl = whatsappUrl(tw("message"));

  const LINKS = [
    { href: "#sobre", label: t("sobre") },
    { href: "#abordagem", label: t("abordagem") },
    { href: "#depoimentos", label: t("depoimentos") },
  ];

  return (
    <header className="nav">
      <a href="#topo" className="nav-brand" aria-label={t("brandAlt")}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/icon-mika-pink.png" alt="" className="nav-logo" />
        <span className="nav-brand-text">
          <span className="nav-brand-name">Mika Carui</span>
          <span className="nav-brand-tagline">{t("tagline")}</span>
        </span>
      </a>

      <ul className="nav-links">
        {LINKS.map((l) => (
          <li key={l.href}>
            <a href={l.href}>{l.label}</a>
          </li>
        ))}
      </ul>

      <div className="nav-cta-group">
        <Link href="/" locale={otherLocale} className="nav-locale" aria-label={otherLocale === "en" ? "Switch to English" : "Mudar para português"}>
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
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
          ))}
          <Link href="/" locale={otherLocale} className="nav-locale" onClick={() => setMenuOpen(false)}>
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
