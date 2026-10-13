export type Produto = {
  slug: string;
  numero: string;
  image: string;
  // TODO: preencher com o link externo de compra (checkout) de cada produto
  comprarUrl?: string;
};

export const PRODUTOS: Produto[] = Array.from({ length: 10 }, (_, i) => {
  const numero = String(i + 1).padStart(2, "0");
  return { slug: `dia-${numero}`, numero, image: `/assets/produtos/dia-${numero}.webp` };
});

export function getProduto(slug: string) {
  return PRODUTOS.find((p) => p.slug === slug);
}
