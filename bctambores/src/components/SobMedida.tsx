const BENEFICIOS = [
  "Pintura personalizada, adesivagem e iluminação LED",
  "Estofados, tampos de vidro e madeira",
  "Peças únicas para presentear em qualquer ocasião",
];

export default function SobMedida() {
  return (
    <section
      className="sob-medida-grid"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        alignItems: "center",
        gap: 0,
        background: "#EFE4D6",
        borderTop: "1px solid rgba(30,24,21,0.1)",
        borderBottom: "1px solid rgba(30,24,21,0.1)",
      }}
    >
      <div style={{ height: "100%", minHeight: 520, background: "#1E1815" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/bar-chanel.png"
          alt="Adega de tambor personalizada em rosa"
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      </div>
      <div style={{ padding: "80px 64px", display: "flex", flexDirection: "column", gap: 22 }}>
        <span
          style={{
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#C25E1E",
          }}
        >
          Sob medida
        </span>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: 44,
            letterSpacing: "-0.03em",
            margin: 0,
            lineHeight: 1.05,
          }}
        >
          Você traz a ideia. A gente faz virar móvel.
        </h2>
        <p style={{ fontSize: 18, lineHeight: 1.65, color: "#4A3F39", margin: 0, maxWidth: "32em" }}>
          Time de futebol, marca favorita, cor da sala, nome de alguém. Trabalhamos com uma
          variedade de materiais e acabamentos para decorar todos os ambientes — e cada peça é
          confeccionada com muito carinho para durar.
        </p>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: "6px 0 0",
            display: "grid",
            gap: 12,
            fontSize: 16,
            color: "#1E1815",
          }}
        >
          {BENEFICIOS.map((item) => (
            <li key={item} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <span style={{ color: "#16716F", fontWeight: 700 }}>—</span> {item}
            </li>
          ))}
        </ul>
        <a
          href="/sob-medida"
          className="btn-sob-medida"
          style={{
            alignSelf: "flex-start",
            marginTop: 10,
            display: "inline-flex",
            padding: "15px 26px",
            borderRadius: 999,
            background: "#1E1815",
            color: "#F6EFE6",
            fontWeight: 600,
          }}
        >
          Como personalizar a sua peça
        </a>
      </div>
    </section>
  );
}
