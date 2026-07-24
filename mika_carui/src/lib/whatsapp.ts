const PHONE = "5511975434251";

export function whatsappUrl(message: string) {
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
}
