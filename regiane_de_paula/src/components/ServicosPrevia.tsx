import Link from "next/link";

const PREVIEWS = [
  {
    title: "Psicoterapia Clínica — TCC",
    tagline:
      "Abordagem estruturada e baseada em evidências, adaptada à história e ao ritmo de cada pessoa.",
  },
  {
    title: "TCC-I — Terapia para Insônia",
    tagline:
      "Tratamento breve e estruturado, referência no manejo da insônia sem necessidade de medicamentos na maioria dos casos.",
  },
  {
    title: "Avaliação Neuropsicológica",
    tagline:
      "Investigação do funcionamento cognitivo — memória, atenção, linguagem e funções executivas.",
  },
];

export default function ServicosPrevia() {
  return (
    <section className="section section-alt">
      <div className="wrap">
        <div className="section-head" style={{ margin: "0 auto 32px", textAlign: "center", alignItems: "center" }}>
          <p className="eyebrow">Áreas de atuação</p>
          <h2>Como posso ajudar</h2>
        </div>

        <div className="servicos-previa-grid">
          {PREVIEWS.map((s) => (
            <div className="servico-previa-card" key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.tagline}</p>
              <Link href="/servicos">Saiba mais →</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
