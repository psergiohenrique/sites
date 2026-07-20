export default function Sobre() {
  return (
    <section id="sobre" className="sobre">
      <div className="sobre-row">
        <div className="sobre-figure">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/mika-brown-3.jpeg" alt="Mika Carui" className="sobre-photo" />
          <div className="sobre-badge">
            <div className="sobre-badge-value">8 anos</div>
            <div className="sobre-badge-label">de experiência clínica</div>
          </div>
        </div>
        <div className="sobre-copy">
          <span className="eyebrow">Quem sou eu</span>
          <h2 className="title">Oi, eu sou a Mika</h2>
          <p>
            Sou psicóloga clínica e acredito que terapia não precisa ser um lugar sério e distante —
            pode (e deve) ser um espaço acolhedor, humano e cheio de energia boa, mesmo quando o
            assunto dói.
          </p>
          <p>
            Trabalho com terapia integrativa, combinando técnicas de diferentes abordagens pra
            construir um processo que faça sentido pra sua história — não um molde pronto.
          </p>
          <div className="sobre-tags">
            <span className="tag-dark">Terapia Integrativa</span>
            <span className="tag-pink">Ansiedade</span>
            <span className="tag-outline">Depressão</span>
          </div>
        </div>
      </div>
    </section>
  );
}
