import { WHATSAPP_URL } from "@/lib/whatsapp";

export default function CtaFinal() {
  return (
    <section className="cta-final">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/assets/mika-brown-2.jpeg" alt="Mika Carui" className="cta-final-img" />
      <div className="cta-final-overlay" />
      <div className="cta-final-inner">
        <h2 className="title">Vamos conversar?</h2>
        <p>Atendimento online e presencial · sessões semanais ou quinzenais, no seu ritmo.</p>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-cta-final">
          Falar no WhatsApp
        </a>
      </div>
    </section>
  );
}
