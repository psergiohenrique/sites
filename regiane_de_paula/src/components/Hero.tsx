export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-row">
        <div className="hero-copy">
          <blockquote className="hero-quote">
            “O mais importante do bordado é o avesso. O mais importante em
            mim é o que eu não conheço.”
          </blockquote>
          <p className="hero-quote-credit">
            Trecho da canção <em>O Que Eu Não Conheço</em>, de Jorge Vercillo
            e J. Velloso, eternizada na interpretação de Maria Bethânia.
          </p>

          <div className="hero-rule" />

          <p className="body">
            Assim como no bordado, também em nós há um avesso — pensamentos,
            sentimentos e histórias que nem sempre enxergamos com clareza,
            mas que sustentam quem somos. É justamente esse avesso que a
            psicoterapia ajuda a revelar.
          </p>
          <p className="body">
            Nós, psicólogos, precisamos nos lembrar de algo essencial: não
            somos os únicos a ter sabedoria dentro do consultório. Somos
            convidados na história de cada paciente. Levamos nosso preparo e
            nossa experiência, mas é o paciente que conhece a própria vida,
            sua trajetória, seus valores e o significado do que viveu.
          </p>
          <p className="body">
            A psicoterapia não acontece quando o psicólogo assume o lugar de
            quem tem todas as respostas. Ela acontece quando há espaço para
            construir, junto, novas compreensões e possibilidades. Um bom
            processo terapêutico não silencia a voz do paciente — ele ajuda
            essa voz a ser ouvida, inclusive por ele mesmo.
          </p>
          <p className="body" style={{ fontWeight: 500 }}>
            É com esse olhar que conduzo meu trabalho: unindo o que aprendi
            com uma escuta verdadeira, para que cada pessoa encontre, com meu
            apoio, suas próprias respostas.
          </p>

          <div className="hero-actions">
            <a href="#quem-sou-eu" className="btn btn-primary">
              Conheça minha trajetória
            </a>
            <a href="#servicos" className="btn btn-outline">
              Veja os serviços
            </a>
            <a href="#contato" className="btn btn-outline-wine">
              Entre em contato
            </a>
          </div>
        </div>

        <div className="hero-figure">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/logo-main.png" alt="Regiane Paula — Psicóloga" />
        </div>
      </div>
    </section>
  );
}
