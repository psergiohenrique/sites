import Link from "next/link";

export default function EbookCta() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="ebook-promo">
          <div className="ebook-promo-figure">
            <span className="ebook-promo-badge">E-BOOK GRATUITO</span>
          </div>
          <div className="ebook-promo-copy">
            <p className="eyebrow">Material gratuito</p>
            <h2>Guia prático para dormir melhor</h2>
            <p>
              Orientações práticas e baseadas em evidências para você
              entender melhor o seu sono e dar os primeiros passos rumo a
              noites mais tranquilas. Baixe gratuitamente em PDF.
            </p>
            <Link href="/ebook-guia-dormir-melhor" className="btn btn-primary">
              Baixar e-book gratuito
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
