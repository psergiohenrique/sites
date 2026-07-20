import type { Metadata } from "next";
import Link from "next/link";
import Servicos from "@/components/Servicos";

export const metadata: Metadata = {
  title: "Serviços | Regiane D'Paula — Psicóloga",
  description:
    "Psicoterapia Clínica (TCC), TCC-I para insônia e Avaliação Neuropsicológica — atendimento 100% online para adultos e idosos.",
  alternates: {
    canonical: "/servicos",
  },
};

export default function ServicosPage() {
  return (
    <div className="subpage-shell">
      <div className="subpage-inner narrow">
        <Link href="/" className="politica-back">
          ← Voltar ao site
        </Link>
        <Servicos />
      </div>
    </div>
  );
}
