const ESCALAS = [
  {
    sigla: "HAD",
    title: "Escala HAD",
    desc: "Rastreio validado para identificar sintomas de ansiedade e depressão em adultos.",
    file: "Escala_HAD.pdf",
  },
  {
    sigla: "PSQI",
    title: "Índice de Qualidade do Sono de Pittsburgh",
    desc: "Avalia a qualidade do sono no último mês, considerando duração, latência e eficiência do sono.",
    file: "PSQI_Qualidade_do_Sono.pdf",
  },
  {
    sigla: "ISI",
    title: "Índice de Gravidade de Insônia",
    desc: "Mede a gravidade da insônia percebida pelo paciente e seu impacto na vida diária.",
    file: "ISI_Indice_Gravidade_Insonia.pdf",
  },
  {
    sigla: "DBAS-10",
    title: "Crenças e Atitudes sobre o Sono",
    desc: "Identifica crenças e pensamentos disfuncionais que podem alimentar ou manter dificuldades de sono.",
    file: "DBAS10_Crencas_Atitudes_Sono.pdf",
  },
  {
    sigla: "AOS",
    title: "Questionário de Berlim",
    desc: "Rastreio de risco para Apneia Obstrutiva do Sono, a partir de ronco, sonolência e pressão arterial.",
    file: "Questionario_Berlim.pdf",
  },
  {
    sigla: "MCTQ",
    title: "Questionário de Cronotipo de Munique",
    desc: "Avalia o cronotipo e o jetlag social, comparando o padrão de sono em dias de trabalho e de folga.",
    file: "MCTQ_Cronotipo_Munique.pdf",
  },
  {
    sigla: "QPS",
    title: "Questionário de Perturbações do Sono",
    desc: "Investiga os fatores físicos, cognitivos e comportamentais que costumam atrapalhar o sono.",
    file: "QPS_Perturbacoes_do_Sono.pdf",
  },
  {
    sigla: "ESS",
    title: "Escala de Sonolência de Epworth",
    desc: "Avalia a probabilidade de cochilar em situações do dia a dia, indicando sonolência diurna excessiva.",
    file: "Escala_Epworth.pdf",
  },
  {
    sigla: "KRLS-QoL",
    title: "Questionário Kohnen — SPI",
    desc: "Avalia o impacto da Síndrome das Pernas Inquietas na qualidade de vida: sono, humor, atividades cotidianas e vida social.",
    file: "Kohnen_SPI_Qualidade_de_Vida.pdf",
  },
  {
    sigla: "NSS",
    title: "Escala de Gravidade da Narcolepsia",
    desc: "Avalia a frequência e a gravidade dos principais sintomas da narcolepsia: sonolência diurna, cataplexia, alucinações, paralisia do sono e sono noturno perturbado.",
    file: "Escala_Gravidade_Narcolepsia.pdf",
  },
  {
    sigla: "DIÁRIO",
    title: "Diário do Sono (15 dias)",
    desc: "Registro diário do padrão de sono ao longo de 15 dias, útil para acompanhar rotina e hábitos.",
    file: "Diario_do_Sono_Linear_15d.pdf",
    destaque: true,
  },
];

export default function EscalasDoSono() {
  return (
    <>
      <div className="section-head">
        <p className="eyebrow">Instrumentos de avaliação</p>
        <h1>Escalas do Sono para download</h1>
        <p>
          Aqui você encontra, em formato PDF para imprimir e preencher à mão,
          os principais instrumentos utilizados na avaliação clínica do sono
          e de aspectos emocionais relacionados a ele. São escalas e
          questionários validados cientificamente, amplamente utilizados na
          prática clínica e na pesquisa em Medicina do Sono e Psicologia.
        </p>
        <div className="nota-clinica">
          <strong>Importante:</strong> nenhum desses instrumentos substitui
          uma avaliação clínica. Eles são ferramentas de rastreio e
          acompanhamento, e seus resultados devem ser sempre interpretados
          junto a um profissional de saúde.
        </div>
      </div>

      <div className="escalas-grid">
        {ESCALAS.map((e) => (
          <div
            className={`escala-card${e.destaque ? " destaque" : ""}`}
            key={e.file}
          >
            <span className="escala-sigla">{e.sigla}</span>
            <h3>{e.title}</h3>
            <p>{e.desc}</p>
            <a
              className="btn btn-primary escala-btn"
              href={`/assets/${e.file}`}
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
