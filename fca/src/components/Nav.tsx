import { WHATSAPP_URL } from "@/lib/whatsapp";

export default function Nav() {
  return (
    <header className="nav">
      <a href="#" aria-label="FCA Transporte Executivo">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/fca-logo.png" alt="FCA Transporte Executivo" className="nav-logo" />
      </a>
      <ul className="nav-links">
        <li><a href="#servicos">Serviços</a></li>
        <li><a href="#frota">Frota</a></li>
        <li><a href="#sobre">Sobre</a></li>
      </ul>
      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-gold">
        Solicitar orçamento
      </a>
    </header>
  );
}
