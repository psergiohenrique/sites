import type { Metadata } from "next";
import Link from "next/link";
import EscalasDoSono from "@/components/EscalasDoSono";

export const metadata: Metadata = {
  title: "Escalas do Sono para download | Regiane D'Paula — Psicóloga",
  description:
    "Baixe em PDF os principais instrumentos de avaliação do sono: HAD, PSQI, ISI, DBAS-10, Questionário de Berlim, MCTQ, Epworth e mais.",
  alternates: {
    canonical: "/escalas-do-sono",
  },
};

export default function EscalasDoSonoPage() {
  return (
    <div className="subpage-shell">
      <div className="subpage-inner">
        <Link href="/" className="politica-back">
          ← Voltar ao site
        </Link>
        <EscalasDoSono />
      </div>
    </div>
  );
}
