const STEPS = [
  {
    n: "01",
    title: "Você chama no WhatsApp",
    desc: "Conte o que imaginou. Uma foto de referência já ajuda bastante.",
  },
  {
    n: "02",
    title: "Combinamos o projeto",
    desc: "Definimos tema, cores, acabamento e medidas. Consulta gratuita.",
  },
  {
    n: "03",
    title: "Produção artesanal",
    desc: "Corte, tratamento, pintura e montagem. Mandamos fotos do andamento.",
  },
  {
    n: "04",
    title: "Entrega na região",
    desc: "Combinamos a entrega em Maringá e cidades vizinhas.",
  },
];

export default function ComoFunciona() {
  return (
    <section id="como-funciona" style={{ padding: "90px 40px" }}>
      <span
        style={{
          fontSize: 12,
          fontWeight: 600,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "#C25E1E",
        }}
      >
        Como funciona o pedido
      </span>
      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 700,
          fontSize: 46,
          letterSpacing: "-0.03em",
          margin: "10px 0 44px",
          lineHeight: 1.05,
          maxWidth: "16em",
        }}
      >
        Do primeiro &ldquo;oi&rdquo; até a peça na sua sala
      </h2>
      <div
        className="steps-grid"
        style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}
      >
        {STEPS.map((step) => (
          <div
            key={step.n}
            style={{
              padding: 28,
              borderRadius: 16,
              background: "#fff",
              border: "1px solid rgba(30,24,21,0.08)",
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: 34,
                color: "#E8863A",
                lineHeight: 1,
              }}
            >
              {step.n}
            </span>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: 20,
                margin: 0,
                letterSpacing: "-0.02em",
              }}
            >
              {step.title}
            </h3>
            <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: "#4A3F39" }}>
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
