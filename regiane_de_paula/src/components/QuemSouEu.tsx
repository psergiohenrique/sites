import { WHATSAPP_URL } from "@/lib/whatsapp";

export default function QuemSouEu() {
  return (
    <div className="sobre-row">
      <div className="sobre-photo">
        <div className="sobre-photo-frame">
          <span className="placeholder">Foto da Regiane</span>
        </div>
      </div>

      <div className="sobre-copy">
        <p className="eyebrow">Quem sou eu</p>
        <h1>Olá, sou Regiane.</h1>

        <p>
          Acredito que cada pessoa é única, e que o cuidado em psicologia só
          faz sentido quando essa singularidade é respeitada. Por isso,
          procuro entender profundamente a história e as necessidades de
          quem chega até mim, antes de pensar em qualquer intervenção.
        </p>
        <p>
          Sou psicóloga com formação em Terapia Cognitivo-Comportamental
          (TCC), e ao longo da minha trajetória, me especializei em
          Neuropsicologia, com formação em Reabilitação Cognitiva pela
          Faculdade de Medicina da Universidade de São Paulo (FMUSP). Essa
          formação me deu uma base sólida para compreender os processos
          cognitivos e seu funcionamento, conhecimento que aprofundei
          atuando no Ambulatório de Hidrocefalia de Pressão Normal do
          Instituto de Psiquiatria do Hospital das Clínicas da FMUSP
          (IPq-HC-FMUSP), na avaliação de funções cognitivas em idosos.
        </p>
        <p>
          Fiz também pós-graduação em Sono pelo Hospital Israelita Albert
          Einstein, o que aprofundou meu olhar sobre os transtornos do
          sono, especialmente a insônia, tema que segue no centro da minha
          atuação.
        </p>
        <p style={{ fontWeight: 500 }}>
          Minha prática clínica une, hoje, a Terapia Cognitivo-Comportamental
          e o tratamento dos transtornos do sono, sempre com base
          científica, ética e sensibilidade ao momento de cada pessoa.
        </p>

        <div style={{ marginTop: 8 }}>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Entre em contato
          </a>
        </div>
      </div>
    </div>
  );
}
