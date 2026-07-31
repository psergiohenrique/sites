import type { Metadata } from "next";
import Link from "next/link";
import EbookGuiaDormirMelhor from "@/components/EbookGuiaDormirMelhor";

export const metadata: Metadata = {
  title: "E-book: Guia prático para dormir melhor | Regiane D'Paula — Psicóloga",
  description:
    "Baixe gratuitamente o e-book Guia prático para dormir melhor, com orientações baseadas em evidências para melhorar a qualidade do sono.",
  alternates: {
    canonical: "/ebook-guia-dormir-melhor",
  },
};

export default function EbookGuiaDormirMelhorPage() {
  return (
    <div className="subpage-shell">
      <div className="subpage-inner narrow">
        <Link href="/" className="politica-back">
          ← Voltar ao site
        </Link>
        <EbookGuiaDormirMelhor />
      </div>
    </div>
  );
}
