import { CIDADES } from "@/lib/solucoes";

export default function Atendimento() {
  return (
    <section className="section" style={{ paddingTop: 0 }} id="atendimento">
      <div className="atendimento-row">
        <div style={{ minWidth: 0 }}>
          <div className="eyebrow">ÁREA DE ATENDIMENTO</div>
          <h2 className="atendimento-title">
            MARINGÁ/PR
            <br />
            <span className="accent">E REGIÃO</span>
          </h2>
          <p className="atendimento-lead">
            Atendemos Maringá e cidades vizinhas. Não encontrou a sua? Mande uma mensagem:
            avaliamos o deslocamento caso a caso.
          </p>
          <div className="cidades-tags">
            {CIDADES.map((c) => (
              <span key={c} className="cidade-tag">
                {c}
              </span>
            ))}
            <span className="cidade-tag muted">outras cidades sob consulta</span>
          </div>
        </div>

        <div className="photo-frame">
          <span className="placeholder">Mapa ou foto da região atendida</span>
        </div>
      </div>
    </section>
  );
}
