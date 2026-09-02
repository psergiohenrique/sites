import Header from "@/components/Header";
import Icon from "@/components/Icon";
import { WHATSAPP_URL } from "@/lib/whatsapp";

const FEATURES = [
  {
    titulo: "Câmeras de segurança",
    desc: "Monitoramento 24h pelo celular.",
    paths: ["M3 7h13v10H3z", "M16 10l5-3v10l-5-3"],
  },
  {
    titulo: "Cerca elétrica",
    desc: "Perímetro protegido e sinalizado.",
    paths: ["M12 3l7 3v5c0 4.5-3 8.3-7 10-4-1.7-7-5.5-7-10V6l7-3z"],
  },
  {
    titulo: "Alarmes",
    desc: "Alerta imediato contra invasão.",
    paths: ["M6 10a6 6 0 1112 0v5l2 3H4l2-3v-5z", "M10 21h4"],
  },
  {
    titulo: "Redes Wi-Fi",
    desc: "Conexão estável em todo ambiente.",
    paths: ["M2 8.5a15 15 0 0120 0", "M5.5 12a10 10 0 0113 0", "M9 15.5a5 5 0 016 0"],
  },
];

export default function Hero() {
  return (
    <section className="hero-section" id="inicio">
      <div className="hero-bg" aria-hidden="true" />
      <div className="hero-overlay" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />

      <Header />

      <div className="hero-content">
        <div className="eyebrow">MARINGÁ/PR E REGIÃO · RESIDÊNCIAS E EMPRESAS</div>
        <h1 className="hero-title">
          AS MELHORES SOLUÇÕES EM <span className="accent">SEGURANÇA ELETRÔNICA</span>
        </h1>
        <p className="hero-lead">
          Tecnologia, qualidade e confiança para proteger o que mais importa. Câmeras, alarmes,
          cerca elétrica, automação e redes Wi-Fi.
        </p>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-pill">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="#04091A" aria-hidden="true">
            <path d="M12 2a10 10 0 00-8.6 15.1L2 22l5.1-1.3A10 10 0 1012 2zm5.6 14.1c-.2.7-1.3 1.3-1.9 1.4-.5.1-1.1.1-1.8-.1-.4-.1-1-.3-1.7-.6-3-1.3-4.9-4.3-5-4.5-.2-.2-1.2-1.6-1.2-3s.7-2.1 1-2.4c.3-.3.6-.4.8-.4h.6c.2 0 .5-.1.7.5l1 2.4c.1.2.1.4 0 .6l-.4.5-.3.4c-.1.1-.3.3-.1.6.1.3.6 1.1 1.4 1.8 1 .9 1.8 1.1 2 1.2.3.1.4.1.6-.1l.9-1c.2-.2.4-.2.6-.1l2.2 1.1c.3.1.5.2.6.3.1.2.1.7-.1 1.4z" />
          </svg>
          Peça seu orçamento no WhatsApp
        </a>
      </div>

      <div className="features-grid">
        {FEATURES.map((f) => (
          <div key={f.titulo} className="feature-card">
            <Icon paths={f.paths} size={26} />
            <div className="feature-card-title">{f.titulo}</div>
            <div className="feature-card-desc">{f.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
