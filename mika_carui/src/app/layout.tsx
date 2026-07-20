import type { Metadata } from "next";
import { Anton, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const anton = Anton({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mika Carui — Psicóloga Clínica | Terapia Integrativa",
  description:
    "Psicóloga clínica especialista em terapia integrativa, ansiedade, depressão e autoestima. Atendimento online e presencial, com acolhimento e leveza.",
  keywords: [
    "psicóloga",
    "terapia integrativa",
    "ansiedade",
    "depressão",
    "autoestima",
    "psicoterapia online",
    "Mika Carui",
  ],
  authors: [{ name: "Mika Carui" }],
  creator: "Mika Carui",
  metadataBase: new URL("https://mikacarui.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://mikacarui.com",
    title: "Mika Carui — Psicóloga Clínica | Terapia Integrativa",
    description:
      "Terapia integrativa pra você sair da ansiedade e da autocrítica e viver com mais confiança. Atendimento online e presencial.",
    siteName: "Mika Carui — Psicóloga Clínica",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mika Carui — Psicóloga Clínica | Terapia Integrativa",
    description:
      "Terapia integrativa pra você sair da ansiedade e da autocrítica e viver com mais confiança.",
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
    <html lang="pt-BR" className={`${anton.variable} ${plusJakarta.variable}`}>
      <head>
        <meta name="color-scheme" content="light only" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "ProfessionalService",
                  "@id": "https://mikacarui.com/#business",
                  name: "Mika Carui — Psicóloga Clínica",
                  description:
                    "Psicóloga clínica especialista em terapia integrativa, ansiedade, depressão e autoestima. Atendimento online e presencial.",
                  url: "https://mikacarui.com",
                  areaServed: "Brasil",
                  telephone: "+5511975434251",
                  hasOfferCatalog: {
                    "@type": "OfferCatalog",
                    name: "Áreas de atuação",
                    itemListElement: [
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Ansiedade",
                          description:
                            "Ferramentas práticas pra acalmar a mente acelerada e recuperar o controle do seu dia a dia.",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Depressão",
                          description:
                            "Acolhimento sem julgamento pra ressignificar crenças limitantes e reencontrar sentido.",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Terapia Integrativa",
                          description:
                            "Um olhar único pra você, combinando abordagens conforme a sua história.",
                        },
                      },
                    ],
                  },
                },
                {
                  "@type": "WebSite",
                  "@id": "https://mikacarui.com/#website",
                  url: "https://mikacarui.com",
                  name: "Mika Carui — Psicóloga Clínica",
                  description: "Site oficial de Mika Carui, psicóloga clínica.",
                  publisher: {
                    "@id": "https://mikacarui.com/#business",
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
