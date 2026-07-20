const STATS = [
  { value: "8+", label: "Anos de experiência" },
  { value: "300+", label: "Pacientes acompanhadas" },
  { value: "98%", label: "Recomendam pra uma amiga" },
  { value: "4.9", label: "Avaliação média" },
];

export default function Stats() {
  return (
    <section className="stats">
      <div className="stats-grid">
        {STATS.map((s) => (
          <div key={s.label}>
            <div className="stat-value">{s.value}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
