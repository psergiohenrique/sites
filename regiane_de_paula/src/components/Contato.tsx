import { WHATSAPP_URL } from "@/lib/whatsapp";

export default function Contato() {
  return (
    <section className="section" id="contato">
      <div className="contato-row">
        <div className="contato-copy">
          <p className="eyebrow">Contato</p>
          <h2>Vamos começar?</h2>
          <p>
            Atendo adultos e idosos. Se você está pensando em iniciar um
            processo terapêutico ou tem dúvidas sobre o atendimento, ficarei
            feliz em te atender.
            Escolha o canal que for mais conveniente e entre em contato —
            retornarei o quanto antes.
          </p>

          <div className="contato-links">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="contato-link primary">
              <span className="icon">📱</span>
              WhatsApp — 19 99902-2125
            </a>
            <a href="mailto:contato@rp-psicologia.com.br" className="contato-link outline">
              <span className="icon">✉️</span>
              contato@rp-psicologia.com.br
            </a>
            <a
              href="https://instagram.com/psico.regianedpaula"
              target="_blank"
              rel="noopener noreferrer"
              className="contato-link outline"
            >
              <span className="icon">📷</span>
              @psico.regianedpaula
            </a>
          </div>

          <p className="small" style={{ marginTop: 16 }}>
            Todo o atendimento é realizado de forma online, através de
            plataforma segura de videochamada, proporcionando o mesmo cuidado
            e qualidade terapêutica de um atendimento presencial, com a
            comodidade de você estar no ambiente em que se sente mais
            confortável.
          </p>
          <p className="small">
            Cada atendimento é conduzido com sigilo profissional e total
            discrição, para que este seja, acima de tudo, um espaço seguro
            para você.
          </p>
        </div>

        <div className="contato-card">
          <h3>Convênio médico</h3>
          <p>
            Os atendimentos são realizados de forma particular. Caso seu
            plano de saúde ofereça reembolso para consultas psicológicas,
            você poderá solicitar o ressarcimento conforme as regras e
            condições do seu contrato. Para isso, forneço toda a
            documentação necessária — incluindo nota fiscal e, quando exigido
            pela operadora, os formulários específicos para reembolso.
          </p>
          <p>
            Em caso de dúvidas sobre cobertura, valores e documentação, entre
            em contato diretamente com sua operadora de plano de saúde.
          </p>
          <p className="highlight">Cuidar da sua saúde mental é um direito seu!</p>
        </div>
      </div>
    </section>
  );
}
