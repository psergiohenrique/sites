"use client";

import { useState } from "react";
import { WHATSAPP_URL } from "@/lib/whatsapp";

const LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#abordagem", label: "Abordagem" },
  { href: "#depoimentos", label: "Depoimentos" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="nav">
      <a href="#topo" className="nav-brand" aria-label="Mika Carui">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/logo-rosa-completo.png" alt="Mika Carui" className="nav-logo" />
      </a>

      <ul className="nav-links">
        {LINKS.map((l) => (
          <li key={l.href}>
            <a href={l.href}>{l.label}</a>
          </li>
        ))}
      </ul>

      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary nav-cta">
        Agendar Agora
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
            Agendar Agora
          </a>
        </div>
      )}
    </header>
  );
}
