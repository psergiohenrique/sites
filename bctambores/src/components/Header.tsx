import Link from "next/link";
import WhatsappIcon from "@/components/WhatsappIcon";
import { WHATSAPP_URL } from "@/lib/whatsapp";

export default function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 24,
        padding: "14px 40px",
        background: "rgba(246,239,230,0.92)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(30,24,21,0.1)",
      }}
    >
      <Link href="/" style={{ display: "flex", alignItems: "center", gap: 12, color: "#1E1815" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/logo.png"
          alt="BC Tambores Decorativos"
          style={{ width: 40, height: 40, borderRadius: 6, objectFit: "cover" }}
        />
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: 16,
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
          }}
        >
          BC Tambores
          <br />
          <span
            style={{
              fontWeight: 500,
              fontSize: 12,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#16716F",
            }}
          >
            Decorativos
          </span>
        </span>
      </Link>
      <nav
        className="main-nav"
        style={{ display: "flex", alignItems: "center", gap: 28, fontSize: 15, fontWeight: 500 }}
      >
        <a href="/galeria" style={{ color: "#1E1815" }}>
          Galeria
        </a>
        <a href="/sob-medida" style={{ color: "#1E1815" }}>
          Sob medida
        </a>
        <a href="#como-funciona" style={{ color: "#1E1815" }}>
          Como funciona
        </a>
        <a href="#atendimento" style={{ color: "#1E1815" }}>
          Onde atendemos
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp-nav"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "11px 20px",
            borderRadius: 999,
            background: "#16716F",
            color: "#fff",
            fontWeight: 600,
          }}
        >
          <WhatsappIcon size={16} fill="#fff" />
          WhatsApp
        </a>
      </nav>
    </header>
  );
}
