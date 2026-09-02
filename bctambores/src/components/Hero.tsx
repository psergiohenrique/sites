import { WHATSAPP_URL } from "@/lib/whatsapp";

const STATS = [
  { title: "Sob medida", sub: "tema, cor e tamanho" },
  { title: "8 cidades", sub: "na região de Maringá" },
  { title: "Grátis", sub: "consulta e projeto" },
];

export default function Hero() {
  return (
    <section
      className="hero-grid"
      style={{
        display: "grid",
        gridTemplateColumns: "1.05fr 1fr",
        alignItems: "stretch",
        minHeight: 640,
        borderBottom: "1px solid rgba(30,24,21,0.1)",
      }}
    >
      <div
        className="hero-copy"
        style={{
          padding: "86px 64px 86px 40px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 26,
          maxWidth: 720,
        }}
      >
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            alignSelf: "flex-start",
            padding: "7px 14px",
            borderRadius: 999,
            border: "1px solid rgba(22,113,111,0.4)",
            color: "#16716F",
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          Feito à mão em Maringá / PR
        </span>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: 72,
            lineHeight: 0.98,
            letterSpacing: "-0.035em",
            margin: 0,
          }}
        >
          Tambores que viram móveis de verdade.
        </h1>
        <p
          style={{
            fontSize: 19,
            lineHeight: 1.6,
            color: "#4A3F39",
            margin: 0,
            maxWidth: "30em",
          }}
        >
          Bares, mesas, poltronas e caminhas para pet — cada peça é cortada, pintada e montada uma
          a uma. Você escolhe o tema, a cor e o tamanho.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 6 }}>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-orcamento"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "16px 28px",
              borderRadius: 999,
              background: "#E8863A",
              color: "#1E1815",
              fontWeight: 700,
              fontSize: 16,
            }}
          >
            Pedir orçamento no WhatsApp
          </a>
          <a
            href="/galeria"
            className="btn-galeria"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "16px 28px",
              borderRadius: 999,
              border: "1px solid rgba(30,24,21,0.25)",
              color: "#1E1815",
              fontWeight: 600,
              fontSize: 16,
            }}
          >
            Ver a galeria
          </a>
        </div>
        <div
          style={{
            display: "flex",
            gap: 34,
            marginTop: 22,
            paddingTop: 26,
            borderTop: "1px solid rgba(30,24,21,0.12)",
            flexWrap: "wrap",
          }}
        >
          {STATS.map((item) => (
            <div key={item.title} style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: 26,
                  letterSpacing: "-0.02em",
                }}
              >
                {item.title}
              </span>
              <span style={{ fontSize: 13, color: "#6B5D55" }}>{item.sub}</span>
            </div>
          ))}
        </div>
      </div>
      <div
        className="hero-image"
        style={{ position: "relative", background: "#1E1815", overflow: "hidden" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/mesa-jd-conjunto.png"
          alt="Mesa bistrô feita de tambor com dois banquinhos"
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
        <div
          style={{
            position: "absolute",
            left: 28,
            bottom: 28,
            padding: "12px 18px",
            borderRadius: 12,
            background: "rgba(246,239,230,0.94)",
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: "0.02em",
          }}
        >
          Conjunto bistrô · tambor 200L + 2 banquetas
        </div>
      </div>
    </section>
  );
}
