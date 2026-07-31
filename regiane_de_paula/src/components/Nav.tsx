"use client";

import { useState } from "react";
import Link from "next/link";
import { WHATSAPP_URL } from "@/lib/whatsapp";

const LINKS = [
  { href: "/quem-sou-eu", label: "Quem sou eu" },
  { href: "/servicos", label: "Serviços" },
];

const MATERIAIS = [
  { href: "/escalas-do-sono", label: "Escalas do Sono" },
  { href: "/ebook-guia-dormir-melhor", label: "E-book: Guia para dormir melhor" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [materiaisOpen, setMateriaisOpen] = useState(false);

  return (
    <header className="nav">
      <div className="nav-row">
        <a href="#inicio" className="nav-brand" aria-label="Regiane Paula — Psicóloga">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/logo-main.png" alt="" className="nav-logo" />
          <span className="nav-brand-text">
            <span className="nav-brand-name">Regiane D&apos;Paula</span>
            <span className="nav-brand-sub">Psicóloga · CRP 06/100895</span>
          </span>
        </a>

        <ul className="nav-links">
          {LINKS.map((l) => (
            <li key={l.href}>
              <Link href={l.href}>{l.label}</Link>
            </li>
          ))}
          <li
            className="nav-dropdown"
            onMouseEnter={() => setMateriaisOpen(true)}
            onMouseLeave={() => setMateriaisOpen(false)}
          >
            <button
              type="button"
              className="nav-dropdown-trigger"
              aria-expanded={materiaisOpen}
              onClick={() => setMateriaisOpen((v) => !v)}
            >
              Materiais gratuitos
              <span className="nav-dropdown-caret" aria-hidden="true">▾</span>
            </button>
            {materiaisOpen && (
              <ul className="nav-dropdown-menu">
                {MATERIAIS.map((m) => (
                  <li key={m.href}>
                    <Link href={m.href} onClick={() => setMateriaisOpen(false)}>
                      {m.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li>
            <Link href="/#contato">Contato</Link>
          </li>
        </ul>

        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary nav-cta">
          WhatsApp
        </a>

        <button
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
          className="nav-toggle"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {menuOpen && (
        <div className="nav-mobile">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>
              {l.label}
            </Link>
          ))}
          <span className="nav-mobile-group-label">Materiais gratuitos</span>
          {MATERIAIS.map((m) => (
            <Link key={m.href} href={m.href} onClick={() => setMenuOpen(false)} className="nav-mobile-sublink">
              {m.label}
            </Link>
          ))}
          <Link href="/#contato" onClick={() => setMenuOpen(false)}>
            Contato
          </Link>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="btn btn-primary"
          >
            Falar no WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
