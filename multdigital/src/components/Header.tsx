"use client";

import { useState } from "react";
import { WHATSAPP_URL } from "@/lib/whatsapp";

const LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#solucoes", label: "Soluções" },
  { href: "#sobre", label: "Sobre" },
  { href: "#atendimento", label: "Atendimento" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="nav">
        <a href="#inicio" className="nav-brand" aria-label="Mult Digital">
          <span className="logo-badge">MD</span>
          <span className="nav-brand-name">MULT DIGITAL</span>
        </a>

        <nav className="nav-links">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className={l.href === "#inicio" ? "active" : undefined}>
              {l.label}
            </a>
          ))}
        </nav>

        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="nav-contact">
          <div className="nav-contact-label">FALE COM A GENTE</div>
          <div className="nav-contact-phone">(44) 99166-6660</div>
        </a>

        <button
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          className={`nav-toggle${menuOpen ? " open" : ""}`}
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
    </>
  );
}
