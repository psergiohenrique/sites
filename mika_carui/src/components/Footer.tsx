export default function Footer() {
  return (
    <footer>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/assets/logo-branca-rosa.png" alt="Mika Carui" className="footer-logo" />
      <div className="footer-links">
        <a href="https://instagram.com/mikacarui" target="_blank" rel="noopener noreferrer">
          @mikacarui
        </a>
        <span>CRP 06/123456</span>
        <span>© 2026</span>
      </div>
    </footer>
  );
}
