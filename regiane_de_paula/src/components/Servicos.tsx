const SERVICOS = [
  {
    color: "#5B6B44",
    title: "Terapia Cognitivo-Comportamental",
    description:
      "Abordagem estruturada e baseada em evidências, adaptada à história e ao ritmo de cada pessoa.",
  },
  {
    color: "#7C2029",
    title: "Neuropsicologia",
    description:
      "Avaliação e reabilitação cognitiva, com formação pela FMUSP e experiência no cuidado a idosos.",
  },
  {
    color: "#6C93AE",
    title: "Transtornos do Sono",
    description:
      "Pós-graduação pelo Hospital Israelita Albert Einstein, com foco especial no tratamento da insônia.",
  },
];

export default function Servicos() {
  return (
    <section className="section" id="servicos">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Serviços</p>
          <h2>Áreas de atuação</h2>
          <p>
            Página de serviços em revisão — descrições completas em breve.
            Enquanto isso, um panorama das áreas em que atuo:
          </p>
        </div>

        <div className="servicos-grid">
          {SERVICOS.map((s) => (
            <div className="servico-card" key={s.title}>
              <div className="dot" style={{ background: s.color }} />
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
