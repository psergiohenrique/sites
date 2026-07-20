import Link from "next/link";
import { WHATSAPP_URL } from "@/lib/whatsapp";

export default function Footer() {
  return (
    <footer>
      <div className="footer-row">
        <div className="footer-brand">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/logo-main.png" alt="Regiane D'Paula" className="footer-logo" />
          <span>Regiane D&apos;Paula — Psicóloga</span>
        </div>
        <div className="footer-links">
          <span>CRP 06/100895</span>
          <span>·</span>
          <span>Atendimento 100% online</span>
          <span>·</span>
          <a href="https://instagram.com/psico.regianedpaula" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <span>·</span>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
          <span>·</span>
          <Link href="/politica-de-privacidade">Política de Privacidade</Link>
        </div>
      </div>
    </footer>
  );
}
