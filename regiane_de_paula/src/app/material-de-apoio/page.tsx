import type { Metadata } from "next";
import Link from "next/link";
import MaterialDeApoio from "@/components/MaterialDeApoio";

export const metadata: Metadata = {
  title: "Material de Apoio | Regiane D'Paula — Psicóloga",
  description:
    "Fichas, exercícios e textos em PDF para complementar o trabalho feito em sessão: organizar pensamentos, registrar emoções e preparar-se para a terapia.",
  alternates: {
    canonical: "/material-de-apoio",
  },
};

export default function MaterialDeApoioPage() {
  return (
    <div className="subpage-shell">
      <div className="subpage-inner">
        <Link href="/" className="politica-back">
          ← Voltar ao site
        </Link>
        <MaterialDeApoio />
      </div>
    </div>
  );
}
