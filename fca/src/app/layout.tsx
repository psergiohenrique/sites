import type { Metadata } from "next";
import { Playfair_Display, Jost } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const playfair = Playfair_Display({
  weight: ["500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const jost = Jost({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FCA Transporte Executivo — Paulínia, Campinas e região",
  description:
    "Transporte executivo de luxo em Paulínia, Campinas e região. Transfer aeroporto, executivo corporativo, eventos e turismo — motoristas discretos e pontualidade absoluta.",
  keywords: [
    "transporte executivo",
    "transfer aeroporto",
    "carro executivo Campinas",
    "transporte executivo Paulínia",
    "motorista particular",
    "corretora de seguros",
    "FCA",
  ],
  authors: [{ name: "FCA Transporte Executivo" }],
  creator: "FCA Transporte Executivo",
  metadataBase: new URL("https://fcatransporteexecutivo.com.br"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://fcatransporteexecutivo.com.br",
    title: "FCA Transporte Executivo — Paulínia, Campinas e região",
    description:
      "Carros de luxo, motoristas discretos e pontualidade absoluta — para quem não pode chegar de qualquer jeito.",
    siteName: "FCA Transporte Executivo",
  },
  twitter: {
    card: "summary_large_image",
    title: "FCA Transporte Executivo — Paulínia, Campinas e região",
    description:
      "Carros de luxo, motoristas discretos e pontualidade absoluta.",
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
    <html lang="pt-BR" className={`${playfair.variable} ${jost.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "ProfessionalService",
                  "@id": "https://fcatransporteexecutivo.com.br/#business",
                  name: "FCA Transporte Executivo",
                  description:
                    "Transporte executivo de luxo e corretora de seguros em Paulínia, Campinas e região.",
                  url: "https://fcatransporteexecutivo.com.br",
                  areaServed: "Paulínia, Campinas e região",
                  hasOfferCatalog: {
                    "@type": "OfferCatalog",
                    name: "Serviços FCA",
                    itemListElement: [
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Transfer aeroporto",
                          description:
                            "Chegadas e partidas com monitoramento de voo, sem atrasos e sem estresse.",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Executivo corporativo",
                          description:
                            "Diárias e contratos para agendas cheias — reuniões, visitas e compromissos em sequência.",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Eventos e casamentos",
                          description:
                            "Chegadas marcantes para ocasiões que merecem um carro à altura do momento.",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Turismo executivo",
                          description:
                            "City tours e roteiros sob medida, com motorista à disposição o dia inteiro.",
                        },
                      },
                    ],
                  },
                },
                {
                  "@type": "WebSite",
                  "@id": "https://fcatransporteexecutivo.com.br/#website",
                  url: "https://fcatransporteexecutivo.com.br",
                  name: "FCA Transporte Executivo",
                  description: "Site oficial da FCA Transporte Executivo.",
                  publisher: {
                    "@id": "https://fcatransporteexecutivo.com.br/#business",
                  },
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
