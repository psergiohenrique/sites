"use client";

import { WHATSAPP_URL } from "@/lib/whatsapp";
import { INTERESSES } from "@/lib/solucoes";

export default function Contato() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    window.open(WHATSAPP_URL, "_blank");
  }

  return (
    <section className="section" style={{ paddingTop: 0 }} id="contato">
      <div className="contato-grid">
        <div className="contato-info">
          <div className="eyebrow">FALE COM A GENTE</div>
          <h2 className="contato-title">
            PEÇA SEU ORÇAMENTO
            <br />
            SEM COMPROMISSO
          </h2>
          <p className="contato-lead">
            Responda em poucos minutos pelo WhatsApp e ganhe descontos nos nossos produtos.
          </p>

          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="contato-link whatsapp">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="#3FD8F5" className="contato-link-icon" aria-hidden="true">
              <path d="M12 2a10 10 0 00-8.6 15.1L2 22l5.1-1.3A10 10 0 1012 2zm5.6 14.1c-.2.7-1.3 1.3-1.9 1.4-.5.1-1.1.1-1.8-.1-.4-.1-1-.3-1.7-.6-3-1.3-4.9-4.3-5-4.5-.2-.2-1.2-1.6-1.2-3s.7-2.1 1-2.4c.3-.3.6-.4.8-.4h.6c.2 0 .5-.1.7.5l1 2.4c.1.2.1.4 0 .6l-.4.5-.3.4c-.1.1-.3.3-.1.6.1.3.6 1.1 1.4 1.8 1 .9 1.8 1.1 2 1.2.3.1.4.1.6-.1l.9-1c.2-.2.4-.2.6-.1l2.2 1.1c.3.1.5.2.6.3.1.2.1.7-.1 1.4z" />
            </svg>
            <div>
              <div className="contato-link-label">WHATSAPP</div>
              <div className="contato-link-value">(44) 99166-6660</div>
            </div>
          </a>

          <a
            href="https://www.instagram.com/multdigital.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="contato-link insta"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3FD8F5" strokeWidth={1.7} className="contato-link-icon" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1.1" fill="#3FD8F5" stroke="none" />
            </svg>
            <div>
              <div className="contato-link-label">INSTAGRAM</div>
              <div className="contato-link-value">@multdigital.com.br</div>
            </div>
          </a>
        </div>

        <div className="contato-form">
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label" htmlFor="nome">NOME</label>
              <input id="nome" name="nome" type="text" placeholder="Seu nome" />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="whatsapp">WHATSAPP</label>
                <input id="whatsapp" name="whatsapp" type="tel" placeholder="(44) 90000-0000" />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="cidade">CIDADE</label>
                <input id="cidade" name="cidade" type="text" placeholder="Maringá" />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">O QUE VOCÊ PRECISA</label>
              <div className="interesses-tags">
                {INTERESSES.map((i) => (
                  <button key={i} type="button" className="interesse-tag">
                    {i}
                  </button>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="mensagem">MENSAGEM</label>
              <textarea
                id="mensagem"
                name="mensagem"
                rows={3}
                placeholder="Conte um pouco sobre o local e o que deseja instalar"
              />
            </div>

            <button type="submit" className="form-submit">
              Enviar pedido de orçamento
            </button>
            <div className="form-note">Retornamos em horário comercial, de segunda a sábado.</div>
          </form>
        </div>
      </div>
    </section>
  );
}
