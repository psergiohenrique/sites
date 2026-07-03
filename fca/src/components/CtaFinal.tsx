import { WHATSAPP_URL } from "@/lib/whatsapp";

export default function CtaFinal() {
  return (
    <section className="cta-final">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/assets/fca-service-wait.webp" alt="" className="bg-img" />
      <div className="overlay" />
      <div className="content">
        <h2>Seu próximo compromisso merece uma chegada impecável.</h2>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-gold">
          Falar com a FCA
        </a>
      </div>
    </section>
  );
}
