const ITEMS = [
  { title: "Atendimento 24h", desc: "Chame a qualquer hora pelo WhatsApp" },
  { title: "Consulta gratuita", desc: "A gente pensa a peça junto com você" },
  { title: "Cartão de crédito e débito", desc: "Parcelamos o seu pedido" },
];

export default function InfoStrip() {
  return (
    <section
      className="info-strip"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        borderBottom: "1px solid rgba(30,24,21,0.1)",
        background: "#16716F",
        color: "#F6EFE6",
      }}
    >
      {ITEMS.map((item, i) => (
        <div
          key={item.title}
          style={{
            padding: "34px 40px",
            borderRight: i < ITEMS.length - 1 ? "1px solid rgba(246,239,230,0.2)" : undefined,
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: 19,
              marginBottom: 6,
            }}
          >
            {item.title}
          </div>
          <div style={{ fontSize: 14, opacity: 0.8 }}>{item.desc}</div>
        </div>
      ))}
    </section>
  );
}
