"use client";

import { useState } from "react";
import { WHATSAPP_URL } from "@/lib/whatsapp";

const LINKS = [
  { href: "#quem-sou-eu", label: "Quem sou eu" },
  { href: "#servicos", label: "Serviços" },
  { href: "#contato", label: "Contato" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

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
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
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
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
          ))}
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
