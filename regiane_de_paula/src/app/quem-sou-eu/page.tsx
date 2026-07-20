import type { Metadata } from "next";
import Link from "next/link";
import QuemSouEu from "@/components/QuemSouEu";

export const metadata: Metadata = {
  title: "Quem sou eu | Regiane D'Paula — Psicóloga",
  description:
    "Conheça a trajetória de Regiane D'Paula: formação em Terapia Cognitivo-Comportamental, Neuropsicologia pela FMUSP e pós-graduação em Sono pelo Hospital Israelita Albert Einstein.",
  alternates: {
    canonical: "/quem-sou-eu",
  },
};

export default function QuemSouEuPage() {
  return (
    <div className="subpage-shell">
      <div className="subpage-inner">
        <Link href="/" className="politica-back">
          ← Voltar ao site
        </Link>
        <QuemSouEu />
      </div>
    </div>
  );
}
