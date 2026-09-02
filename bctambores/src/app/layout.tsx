import type { Metadata } from "next";
import { Bricolage_Grotesque, Karla } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const bricolage = Bricolage_Grotesque({
  weight: ["500", "700", "800"],
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const karla = Karla({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-karla",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BC Tambores Decorativos — Móveis feitos de tambor",
  description:
    "Bares, mesas, poltronas e caminhas para pet feitos artesanalmente com tambores em Maringá — PR. Peça sob medida, escolha tema, cor e tamanho.",
  metadataBase: new URL("https://bctambores.com.br"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://bctambores.com.br",
    title: "BC Tambores Decorativos — Móveis feitos de tambor",
    description:
      "Bares, mesas, poltronas e caminhas para pet feitos artesanalmente com tambores em Maringá — PR.",
    siteName: "BC Tambores Decorativos",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${bricolage.variable} ${karla.variable}`}>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
