const MATERIAIS = [
  {
    tipo: "FICHA",
    title: "Analise seus Problemas",
    desc: "Ficha para organizar o pensamento diante de uma situação-problema, observando-a de forma mais concreta e menos automática.",
    file: "Analise_Seus_Problemas.pdf",
  },
  {
    tipo: "FICHA",
    title: "Diário de Emoções",
    desc: "Registro semanal para observar quais emoções você sentiu ao longo dos dias, identificando padrões com mais clareza.",
    file: "Diario_de_Emocoes.pdf",
  },
  {
    tipo: "FICHA",
    title: "Preparando-se para uma Sessão de Terapia",
    desc: "Perguntas para organizar o que você quer trazer para o próximo atendimento, aproveitando melhor o tempo em sessão.",
    file: "Preparando_se_para_Sessao_de_Terapia.pdf",
  },
  {
    tipo: "TEXTO",
    title: "Pensar Rápido, Pensar Devagar",
    desc: "Um texto sobre os dois modos do nosso pensamento, o automático e o reflexivo, e como equilibrá-los com mais gentileza.",
    file: "Pensar_Rapido_Pensar_Devagar.pdf",
  },
];

export default function MaterialDeApoio() {
  return (
    <>
      <div className="section-head">
        <p className="eyebrow">Recursos para apoiar sua jornada terapêutica</p>
        <h1>Material de Apoio</h1>
        <p>
          Aqui você encontra fichas, exercícios e textos pensados para
          complementar o trabalho feito em sessão. São materiais de apoio
          para organizar pensamentos, registrar emoções e refletir sobre
          temas comuns na prática clínica, disponíveis em PDF para baixar e
          usar no seu ritmo.
        </p>
        <div className="nota-clinica">
          <strong>Importante:</strong> esses materiais são complementares e
          não substituem o acompanhamento terapêutico. Use-os como um apoio
          entre as sessões, e sinta-se à vontade para trazer suas anotações e
          reflexões para conversarmos.
        </div>
      </div>

      <div className="escalas-grid">
        {MATERIAIS.map((m) => (
          <div className="escala-card" key={m.file}>
            <span className="escala-sigla">{m.tipo}</span>
            <h3>{m.title}</h3>
            <p>{m.desc}</p>
            <a
              className="btn btn-primary escala-btn"
              href={`/assets/${m.file}`}
              download
            >
              Baixar PDF
            </a>
          </div>
        ))}
      </div>
    </>
  );
}
