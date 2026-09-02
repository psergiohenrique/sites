import type { Metadata } from "next";
import { Archivo, Barlow } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const archivo = Archivo({
  weight: ["500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

const barlow = Barlow({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-barlow",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mult Digital — Segurança Eletrônica em Maringá/PR",
  description:
    "Câmeras de segurança, cerca elétrica, alarmes, automação e redes Wi-Fi para residências e empresas em Maringá/PR e região. Orçamento pelo WhatsApp.",
  keywords: [
    "segurança eletrônica Maringá",
    "câmeras de segurança",
    "cerca elétrica",
    "alarme residencial",
    "automação residencial",
    "redes Wi-Fi",
    "Mult Digital",
  ],
  authors: [{ name: "Mult Digital" }],
  creator: "Mult Digital",
  metadataBase: new URL("https://multdigital.com.br"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://multdigital.com.br",
    title: "Mult Digital — Segurança Eletrônica em Maringá/PR",
    description:
      "Câmeras, cerca elétrica, alarmes, automação e redes Wi-Fi. Instalação profissional e suporte pós-venda em Maringá/PR e região.",
    siteName: "Mult Digital",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mult Digital — Segurança Eletrônica em Maringá/PR",
    description:
      "Câmeras, cerca elétrica, alarmes, automação e redes Wi-Fi em Maringá/PR e região.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${archivo.variable} ${barlow.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "LocalBusiness",
                  "@id": "https://multdigital.com.br/#business",
                  name: "Mult Digital",
                  description:
                    "Especialista em eletrônicos, segurança eletrônica e redes: câmeras, alarmes, cerca elétrica, automação e Wi-Fi.",
                  url: "https://multdigital.com.br",
                  telephone: "+5544991666660",
                  areaServed: "Maringá/PR e região",
                  hasOfferCatalog: {
                    "@type": "OfferCatalog",
                    name: "Soluções em segurança eletrônica",
                    itemListElement: [
                      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Câmeras de segurança" } },
                      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cerca elétrica" } },
                      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Alarmes" } },
                      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Automação residencial" } },
                      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Redes Wi-Fi" } },
                    ],
                  },
                },
                {
                  "@type": "WebSite",
                  "@id": "https://multdigital.com.br/#website",
                  url: "https://multdigital.com.br",
                  name: "Mult Digital",
                  description: "Site oficial da Mult Digital.",
                  publisher: { "@id": "https://multdigital.com.br/#business" },
                  inLanguage: "pt-BR",
                },
              ],
            }),
          }}
        />
      </head>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
