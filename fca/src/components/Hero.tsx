import { WHATSAPP_URL } from "@/lib/whatsapp";

export default function Hero() {
  return (
    <section className="hero">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/fca-hero-door.webp"
        alt="Transporte executivo FCA"
        className="hero-img"
      />
      <div className="hero-overlay" />
      <div className="hero-content">
        <div className="hero-eyebrow">Paulínia · Campinas e região</div>
        <h1>Transporte executivo à altura do seu compromisso.</h1>
        <p>
          Carros de luxo, motoristas discretos e pontualidade absoluta — para
          quem não pode chegar de qualquer jeito.
        </p>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-gold">
          Solicitar orçamento
        </a>
      </div>
    </section>
  );
}
