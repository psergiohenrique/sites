import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { Produto } from "@/lib/produtos";

export default function ProdutoCard({ produto }: { produto: Produto }) {
  const t = useTranslations("Produtos");
  const title = t("itemTitle", { n: produto.numero });

  return (
    <Link href={`/produtos/${produto.slug}`} className="produto-card" aria-label={`${t("cta")}: ${title}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={produto.image} alt="" aria-hidden className="produto-glow" loading="lazy" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={produto.image} alt={title} width={326} height={381} loading="lazy" className="produto-img" />
    </Link>
  );
}
