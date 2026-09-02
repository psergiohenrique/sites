import WhatsappIcon from "@/components/WhatsappIcon";
import { WHATSAPP_URL, WHATSAPP_DISPLAY } from "@/lib/whatsapp";

export default function Contato() {
  return (
    <section id="contato" style={{ padding: "96px 40px", background: "#1E1815", color: "#F6EFE6" }}>
      <div
        className="contato-flex"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 48,
          flexWrap: "wrap",
        }}
      >
        <div style={{ maxWidth: "20em" }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: 52,
              letterSpacing: "-0.035em",
              margin: "0 0 16px",
              lineHeight: 1,
            }}
          >
            Tem uma ideia na cabeça?
          </h2>
          <p style={{ fontSize: 18, lineHeight: 1.6, margin: 0, color: "rgba(246,239,230,0.75)" }}>
            Manda uma mensagem com a referência. O orçamento é sob consulta e sai rápido.
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-contato"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              padding: "20px 34px",
              borderRadius: 999,
              background: "#E8863A",
              color: "#1E1815",
              fontWeight: 700,
              fontSize: 19,
            }}
          >
            <WhatsappIcon size={22} fill="#1E1815" />
            {WHATSAPP_DISPLAY}
          </a>
          <span style={{ fontSize: 14, color: "rgba(246,239,230,0.55)", textAlign: "center" }}>
            Resposta pelo WhatsApp · atendimento 24h
          </span>
        </div>
      </div>
    </section>
  );
}
