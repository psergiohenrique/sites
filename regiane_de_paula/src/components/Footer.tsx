export default function Footer() {
  return (
    <footer>
      <div className="footer-row">
        <div className="footer-brand">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/logo-main.png" alt="Regiane Paula" className="footer-logo" />
          <span>Regiane Paula — Psicóloga</span>
        </div>
        <span className="footer-note">Atendimento 100% online · CRP a inserir</span>
      </div>
    </footer>
  );
}
