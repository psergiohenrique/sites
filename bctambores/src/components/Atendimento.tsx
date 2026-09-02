const CIDADES = [
  "Maringá",
  "Sarandi",
  "Paiçandu",
  "Marialva",
  "Mandaguari",
  "Cianorte",
  "Jandaia do Sul",
  "Mandaguaçu",
];

export default function Atendimento() {
  return (
    <section
      id="atendimento"
      style={{ padding: "74px 40px", background: "#EFE4D6", borderTop: "1px solid rgba(30,24,21,0.1)" }}
    >
      <div
        className="atendimento-grid"
        style={{ display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: 56, alignItems: "center" }}
      >
        <div>
          <span
            style={{
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#C25E1E",
            }}
          >
            Área de atendimento
          </span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: 40,
              letterSpacing: "-0.03em",
              margin: "10px 0 14px",
              lineHeight: 1.05,
            }}
          >
            Maringá e região
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: "#4A3F39", margin: 0 }}>
            Avenida Senador Petrônio Portela, Maringá — PR, 87050-720. Atende também as cidades ao
            lado; combine a entrega pelo WhatsApp.
          </p>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          {CIDADES.map((cidade, i) => (
            <span
              key={cidade}
              style={{
                padding: "12px 20px",
                borderRadius: 999,
                background: "#F6EFE6",
                border: "1px solid rgba(30,24,21,0.12)",
                fontSize: 16,
                fontWeight: i === 0 ? 600 : 500,
              }}
            >
              {cidade}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
