import { WHATSAPP_URL } from "@/lib/whatsapp";

export default function Hero() {
  return (
    <section id="topo" className="hero">
      <div className="hero-overlay" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/assets/mika-hero.jpeg" alt="Mika Carui" className="hero-img" />
      <div className="hero-content">
        <span className="hero-kicker">Psicóloga Clínica · CRP 06/123456</span>
        <h1 className="title hero-title">
          Sua mente
          <br />
          merece <span>leveza</span>
        </h1>
        <p className="hero-lead">
          Terapia integrativa pra você sair da ansiedade e da autocrítica e viver com mais confiança.
          Atendimento online e presencial.
        </p>
        <div className="hero-actions">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Agendar Consulta
          </a>
          <a href="#depoimentos" className="btn btn-outline-light">
            Ver Depoimentos
          </a>
        </div>
      </div>
    </section>
  );
}
