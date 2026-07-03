export default function Footer() {
  return (
    <footer>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/assets/fca-logo.png" alt="FCA" className="footer-logo" />
      <span>Transporte executivo e corretora de seguros · Paulínia, Campinas e região</span>
      <span className="footer-credit">
        © 2026 · Desenvolvido por{" "}
        <a href="https://codepath.dev.br" target="_blank" rel="noopener noreferrer">
          Codepath
        </a>
      </span>
    </footer>
  );
}
