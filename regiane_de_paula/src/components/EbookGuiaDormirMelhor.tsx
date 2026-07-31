export default function EbookGuiaDormirMelhor() {
  return (
    <>
      <div className="section-head">
        <p className="eyebrow">Material gratuito</p>
        <h1>Guia prático para dormir melhor</h1>
        <p>
          Um e-book com orientações práticas e baseadas em evidências para
          quem quer entender melhor o próprio sono e dar os primeiros passos
          rumo a noites mais tranquilas.
        </p>
        <div className="nota-clinica">
          <strong>Importante:</strong> este material tem caráter educativo e
          não substitui uma avaliação clínica individualizada.
        </div>
      </div>

      <div className="ebook-card">
        <div className="ebook-card-info">
          <span className="escala-sigla">E-BOOK</span>
          <h2>Guia prático para dormir melhor</h2>
          <p>Baixe gratuitamente em PDF e leia no seu ritmo.</p>
        </div>
        <a
          className="btn btn-primary escala-btn"
          href="/assets/Guia_Pratico_Para_Dormir_Melhor.pdf"
          download
        >
          Baixar e-book em PDF
        </a>
      </div>
    </>
  );
}
