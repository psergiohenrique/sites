export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-row">
        <div className="hero-copy">
          <span className="eyebrow">Psicologia · Neuropsicologia · Sono</span>
          <h1 className="hero-title">Regiane D&apos;Paula, Psicóloga</h1>
          <p className="hero-lead">
            Ciência e acolhimento caminhando juntos no seu cuidado.
          </p>

          <div className="hero-actions">
            <a href="#contato" className="btn btn-primary">
              Entre em contato
            </a>
          </div>
        </div>

        <div className="hero-figure">
          <div className="hero-photo-frame">
            <span className="placeholder">Foto profissional da Regiane</span>
          </div>
        </div>
      </div>
    </section>
  );
}
