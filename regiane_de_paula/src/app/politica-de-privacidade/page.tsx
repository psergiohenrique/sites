import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidade | Regiane D'Paula — Psicóloga",
  description:
    "Política de privacidade e proteção de dados de Regiane D'Paula, psicóloga, em conformidade com a LGPD.",
  alternates: {
    canonical: "/politica-de-privacidade",
  },
};

export default function PoliticaDePrivacidade() {
  return (
    <div className="politica-page">
      <div className="politica-inner">
        <Link href="/" className="politica-back">
          ← Voltar ao site
        </Link>
        <h1>Política de Privacidade</h1>
        <p className="politica-sub">Regiane D&apos;Paula — Psicóloga · CRP 06/100895</p>

        <p>
          Esta política explica, de forma simples, como os dados de contato
          enviados através deste site são tratados, em conformidade com a Lei
          Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018).
        </p>

        <h2>Quais dados são coletados</h2>
        <p>
          Ao entrar em contato por WhatsApp, e-mail ou Instagram, podem ser
          coletados nome, telefone, e-mail e o conteúdo da mensagem enviada.
        </p>

        <h2>Finalidade do uso</h2>
        <p>
          Esses dados são usados exclusivamente para responder ao seu
          contato e, caso avance, organizar o agendamento e o acompanhamento
          do atendimento psicológico. Não são utilizados para envio de
          publicidade nem compartilhados com terceiros para fins comerciais.
        </p>

        <h2>Sigilo profissional</h2>
        <p>
          Todo o conteúdo trocado durante o atendimento psicológico é
          protegido pelo sigilo profissional previsto no Código de Ética do
          Psicólogo, regulamentado pelo Conselho Federal de Psicologia
          (CFP).
        </p>

        <h2>Seus direitos</h2>
        <p>
          Você pode, a qualquer momento, solicitar informações sobre os
          dados armazenados, correção ou exclusão, entrando em contato pelos
          canais informados no site.
        </p>

        <h2>Contato</h2>
        <p>
          Dúvidas sobre esta política podem ser enviadas para{" "}
          <a href="mailto:contato@rp-psicologia.com.br">
            contato@rp-psicologia.com.br
          </a>
          .
        </p>

        <p className="politica-updated">Última atualização: julho de 2026.</p>
      </div>
    </div>
  );
}
