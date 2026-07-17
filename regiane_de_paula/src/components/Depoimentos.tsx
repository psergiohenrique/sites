const TESTIMONIALS = [
  { quote: "Depoimento a inserir.", name: "Nome do paciente" },
  { quote: "Depoimento a inserir.", name: "Nome do paciente" },
  { quote: "Depoimento a inserir.", name: "Nome do paciente" },
];

export default function Depoimentos() {
  return (
    <section className="section section-alt" id="depoimentos">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Depoimentos</p>
          <h2>O que dizem os pacientes</h2>
          <p>
            Espaços reservados — substitua pelos depoimentos reais quando
            estiverem disponíveis.
          </p>
        </div>

        <div className="depoimentos-grid">
          {TESTIMONIALS.map((t, i) => (
            <div className="depoimento-card" key={i}>
              <p>“{t.quote}”</p>
              <div className="depoimento-author">
                <div className="depoimento-avatar" />
                <span>{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
