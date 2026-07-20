const SERVICES = [
  {
    index: "01",
    title: "Ansiedade",
    desc: "Ferramentas práticas pra acalmar a mente acelerada e recuperar o controle do seu dia a dia.",
    bg: "#FF66C4",
    color: "#FFFFFF",
  },
  {
    index: "02",
    title: "Depressão",
    desc: "Acolhimento sem julgamento pra ressignificar crenças limitantes e reencontrar sentido.",
    bg: "#F7EFE5",
    color: "#2A1D18",
  },
  {
    index: "03",
    title: "Terapia Integrativa",
    desc: "Um olhar único pra você, combinando abordagens conforme a sua história.",
    bg: "#4A382F",
    color: "#F7EFE5",
  },
];

export default function Abordagem() {
  return (
    <section id="abordagem" className="abordagem">
      <div className="abordagem-inner">
        <div className="abordagem-head">
          <span className="eyebrow">Como eu trabalho</span>
          <h2 className="title">Cuidado que respeita seu tempo e sua história</h2>
        </div>
        <div className="abordagem-grid">
          {SERVICES.map((s) => (
            <div key={s.index} className="abordagem-card" style={{ background: s.bg, color: s.color }}>
              <span className="index">{s.index}</span>
              <h3 className="title">{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
