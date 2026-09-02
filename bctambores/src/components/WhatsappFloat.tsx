import WhatsappIcon from "@/components/WhatsappIcon";
import { WHATSAPP_URL } from "@/lib/whatsapp";

export default function WhatsappFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="btn-fab"
      style={{
        position: "fixed",
        right: 26,
        bottom: 26,
        zIndex: 60,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 60,
        height: 60,
        borderRadius: 999,
        background: "#25D366",
        boxShadow: "0 10px 26px rgba(30,24,21,0.28)",
      }}
    >
      <WhatsappIcon size={30} fill="#fff" />
    </a>
  );
}
