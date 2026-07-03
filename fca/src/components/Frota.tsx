const FROTA = [
  {
    image: "/assets/fca-car-audi-a4.webp",
    name: "Audi A4",
    description: "Elegância alemã e tecnologia de bordo para o executivo exigente.",
  },
  {
    image: "/assets/fca-car-c200.jpeg",
    name: "Mercedes-Benz C200",
    description: "O clássico do conforto premium — acabamento impecável em cada detalhe.",
    objectPosition: "center 40%",
  },
  {
    image: "/assets/fca-car-cruze.jpg",
    name: "Chevrolet Cruze",
    description: "Conforto e discrição para o dia a dia corporativo, com custo-benefício.",
  },
];

export default function Frota() {
  return (
    <section className="frota" id="frota">
      <div className="section-head on-dark">
        <p className="eyebrow">Nossos veículos</p>
        <h2>Frota</h2>
      </div>
      <div className="frota-grid">
        {FROTA.map((c) => (
          <div className="carro-card" key={c.name}>
            <div className="thumb">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={c.image}
                alt={c.name}
                style={c.objectPosition ? { objectPosition: c.objectPosition } : undefined}
              />
            </div>
            <div className="body">
              <h3>{c.name}</h3>
              <p>{c.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
