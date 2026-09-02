import { WHATSAPP_URL } from "@/lib/whatsapp";

export default function Sobre() {
  return (
    <section className="section" style={{ paddingTop: 40 }} id="sobre">
      <div className="sobre-card">
        <div className="sobre-glow" aria-hidden="true" />

        <div className="photo-frame">
          <span className="placeholder">Foto da equipe ou de uma instalação</span>
        </div>

        <div className="sobre-copy" style={{ minWidth: 0 }}>
          <div className="eyebrow">SOBRE A MULT DIGITAL</div>
          <h2 className="sobre-title">
            TECNOLOGIA QUE CONECTA.
            <br />
            <span className="accent">QUALIDADE QUE TRANSFORMA.</span>
          </h2>
          <p>
            A Mult Digital é especializada em eletrônicos, segurança eletrônica e redes.
            Atendemos residências, comércios e empresas com projeto, instalação e manutenção — do
            ponto de câmera à automação completa.
          </p>
          <p>
            Cada ambiente recebe uma avaliação antes do orçamento, para você investir apenas no
            que faz diferença na sua proteção.
          </p>
          <div className="sobre-actions">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Falar com um especialista
            </a>
            <a
              href="https://www.instagram.com/multdigital.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              @multdigital.com.br
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
