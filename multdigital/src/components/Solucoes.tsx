import Icon from "@/components/Icon";
import { SOLUCOES, DIFERENCIAIS } from "@/lib/solucoes";

export default function Solucoes() {
  return (
    <section className="section solucoes-section" id="solucoes">
      <div className="section-head">
        <div>
          <div className="eyebrow">NOSSAS SOLUÇÕES</div>
          <h2 className="section-title">
            PROTEÇÃO COMPLETA PARA SUA <span className="accent">RESIDÊNCIA OU EMPRESA</span>
          </h2>
        </div>
        <p className="section-lead">
          Trabalhamos com equipamentos de marcas reconhecidas, instalação profissional e suporte
          pós-venda.
        </p>
      </div>

      <div className="solucoes-grid">
        {SOLUCOES.map((s) => (
          <div key={s.titulo} className="solucao-card">
            <div className="solucao-glow" aria-hidden="true" />
            <div className="solucao-icon">
              <Icon paths={s.paths} size={24} />
            </div>
            <h3 className="solucao-titulo">{s.titulo}</h3>
            <p className="solucao-desc">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="diferenciais-grid">
        {DIFERENCIAIS.map((d) => (
          <div key={d.titulo} className="diferencial-item">
            <Icon paths={["M20 6L9 17l-5-5"]} size={22} />
            <div>
              <div className="diferencial-titulo">{d.titulo}</div>
              <div className="diferencial-desc">{d.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
