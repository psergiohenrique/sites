import { WHATSAPP_URL, WHATSAPP_DISPLAY } from "@/lib/whatsapp";

export default function Footer() {
  return (
    <footer
      style={{
        padding: 40,
        background: "#16110F",
        color: "rgba(246,239,230,0.6)",
        display: "flex",
        justifyContent: "space-between",
        gap: 24,
        flexWrap: "wrap",
        fontSize: 14,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/logo.png"
          alt=""
          style={{ width: 30, height: 30, borderRadius: 5, objectFit: "cover" }}
        />
        <span>BC Tambores Decorativos · Maringá — PR</span>
      </div>
      <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
        <a href="/galeria" style={{ color: "rgba(246,239,230,0.6)" }}>
          Galeria
        </a>
        <a href="/sob-medida" style={{ color: "rgba(246,239,230,0.6)" }}>
          Sob medida
        </a>
        <a href="mailto:contato@bctambores.com.br" style={{ color: "rgba(246,239,230,0.6)" }}>
          E-mail
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "rgba(246,239,230,0.6)" }}
        >
          {WHATSAPP_DISPLAY}
        </a>
      </div>
    </footer>
  );
}
