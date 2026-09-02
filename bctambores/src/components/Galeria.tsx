const PECAS = [
  {
    src: "/assets/bar-jd-led.png",
    alt: "Bar de tambor Jack Daniel's com iluminação LED azul",
    caption: "Bar com LED · Jack Daniel's",
    colSpan: 5,
    rowSpan: 2,
  },
  {
    src: "/assets/bar-chanel.png",
    alt: "Adega de tambor rosa com tampo de vidro e LED",
    caption: "Adega com tampo de vidro",
    colSpan: 4,
    rowSpan: 2,
  },
  {
    src: "/assets/poltrona-53.png",
    alt: "Poltrona feita de tambor com estofado marrom",
    colSpan: 3,
  },
  {
    src: "/assets/mesa-amarela.png",
    alt: "Mesa lateral amarela feita de tambor",
    colSpan: 3,
  },
  {
    src: "/assets/mesa-jd-pecas.png",
    alt: "Peças de um conjunto bistrô antes da montagem",
    caption: "Tudo montado peça por peça",
    colSpan: 7,
    objectPosition: "center 40%",
  },
  {
    src: "/assets/mesa-jd-bistro.png",
    alt: "Conjunto bistrô preto de tambor",
    colSpan: 5,
  },
];

export default function Galeria() {
  return (
    <section id="galeria" style={{ padding: "90px 40px" }}>
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: 32,
          marginBottom: 40,
          flexWrap: "wrap",
        }}
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
            Galeria
          </span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: 46,
              letterSpacing: "-0.03em",
              margin: "10px 0 0",
              lineHeight: 1.05,
            }}
          >
            Algumas peças que já saíram da oficina
          </h2>
        </div>
        <a
          href="/galeria"
          style={{
            fontWeight: 600,
            fontSize: 16,
            borderBottom: "2px solid #E8863A",
            paddingBottom: 3,
            color: "#1E1815",
          }}
        >
          Ver todas as peças
        </a>
      </div>
      <div
        className="gallery-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          gridAutoRows: 200,
          gap: 16,
        }}
      >
        {PECAS.map((p) => (
          <figure
            key={p.src}
            style={{
              gridColumn: `span ${p.colSpan}`,
              gridRow: p.rowSpan ? `span ${p.rowSpan}` : undefined,
              margin: 0,
              position: "relative",
              borderRadius: 14,
              overflow: "hidden",
              background: "#1E1815",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={p.src}
              alt={p.alt}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: p.objectPosition,
                display: "block",
              }}
            />
            {p.caption && (
              <figcaption
                style={{
                  position: "absolute",
                  left: 16,
                  bottom: 16,
                  padding: "9px 14px",
                  borderRadius: 999,
                  background: "rgba(246,239,230,0.93)",
                  fontSize: 13,
                  fontWeight: 600,
                }}
              >
                {p.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </section>
  );
}
