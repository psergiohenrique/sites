import { WHATSAPP_URL } from "@/lib/whatsapp";

const SERVICOS = [
  {
    title: "Psicoterapia Clínica – TCC",
    paragraphs: [
      "A Terapia Cognitivo-Comportamental (TCC) é uma abordagem psicoterapêutica amplamente estudada, que parte do princípio de que pensamentos, emoções e comportamentos estão profundamente conectados, e que essa relação influencia diretamente a forma como vivemos e lidamos com os desafios do dia a dia.",
      "O processo terapêutico é colaborativo e estruturado, respeitando as necessidades e os objetivos de cada pessoa. Ao longo das sessões, trabalhamos estratégias práticas que ajudam a desenvolver novas formas de pensar e agir diante das situações da vida.",
      "O objetivo vai além do alívio dos sintomas: a TCC busca fortalecer a autonomia e o bem-estar, para que o que é construído em terapia continue fazendo sentido também fora do consultório.",
    ],
  },
  {
    title: "TCC-I – Terapia Cognitivo-Comportamental para Insônia",
    paragraphs: [
      "A TCC-I é um tratamento breve e estruturado, reconhecido como abordagem de primeira linha no tratamento da insônia, sem a necessidade de medicamentos na maioria dos casos.",
      "Seu objetivo é identificar e tratar os fatores comportamentais e cognitivos que mantêm a insônia, promovendo uma melhora consistente e duradoura na qualidade do sono.",
      "A eficácia da TCC-I é comprovada cientificamente, independentemente da idade do paciente, do uso de medicação para dormir ou da presença de outras condições associadas. Costuma ser indicada também para quem deseja reduzir gradualmente o uso de medicação, sempre com acompanhamento do médico responsável.",
    ],
  },
  {
    title: "Avaliação Neuropsicológica",
    paragraphs: [
      "A avaliação neuropsicológica é um processo estruturado que investiga o funcionamento cognitivo, incluindo memória, atenção, linguagem e funções executivas, buscando compreender como esses processos estão relacionados ao comportamento e ao dia a dia da pessoa.",
      "É indicada em situações como queixas de memória, dificuldades de concentração, alterações cognitivas associadas ao envelhecimento, ou como parte da investigação de quadros neurológicos e psiquiátricos.",
      "O processo envolve entrevistas, testes padronizados e cientificamente validados, e a elaboração de um relatório detalhado, com devolutiva clara sobre os resultados — servindo como base para orientações, encaminhamentos e planejamento de intervenções futuras.",
    ],
  },
];

export default function Servicos() {
  return (
    <>
      <div className="section-head">
        <p className="eyebrow">Serviços</p>
        <h1>Áreas de atuação</h1>
        <p>
          Atendo adultos e idosos. Acredito que o cuidado em psicologia
          funciona melhor quando é fundamentado em evidências científicas
          e, ao mesmo tempo, adaptado à realidade de quem estou atendendo.
        </p>
      </div>

      <div className="servicos-full-list">
        {SERVICOS.map((s) => (
          <div className="servico-full-card" key={s.title}>
            <h2>{s.title}</h2>
            {s.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        ))}
      </div>

      <div>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          Entre em contato
        </a>
      </div>
    </>
  );
}
