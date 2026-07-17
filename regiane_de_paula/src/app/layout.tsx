import type { Metadata } from "next";
import { Lora, Public_Sans } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const lora = Lora({
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

const publicSans = Public_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-public-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Regiane Paula — Psicóloga | Atendimento online",
  description:
    "Psicóloga especialista em Terapia Cognitivo-Comportamental (TCC), Neuropsicologia e Transtornos do Sono. Atendimento 100% online, com sigilo e escuta verdadeira.",
  keywords: [
    "psicóloga online",
    "terapia cognitivo comportamental",
    "TCC",
    "neuropsicologia",
    "tratamento insônia",
    "transtornos do sono",
    "psicoterapia online",
    "Regiane Paula",
  ],
  authors: [{ name: "Regiane Paula" }],
  creator: "Regiane Paula",
  metadataBase: new URL("https://regianepsicologa.com.br"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://regianepsicologa.com.br",
    title: "Regiane Paula — Psicóloga | Atendimento online",
    description:
      "Terapia Cognitivo-Comportamental, Neuropsicologia e Transtornos do Sono — atendimento 100% online, com sigilo e escuta verdadeira.",
    siteName: "Regiane Paula — Psicóloga",
  },
  twitter: {
    card: "summary_large_image",
    title: "Regiane Paula — Psicóloga | Atendimento online",
    description:
      "Terapia Cognitivo-Comportamental, Neuropsicologia e Transtornos do Sono — atendimento 100% online.",
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
    <html lang="pt-BR" className={`${lora.variable} ${publicSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "ProfessionalService",
                  "@id": "https://regianepsicologa.com.br/#business",
                  name: "Regiane Paula — Psicóloga",
                  description:
                    "Psicóloga especialista em Terapia Cognitivo-Comportamental, Neuropsicologia e Transtornos do Sono. Atendimento 100% online.",
                  url: "https://regianepsicologa.com.br",
                  areaServed: "Online — todo o Brasil",
                  hasOfferCatalog: {
                    "@type": "OfferCatalog",
                    name: "Áreas de atuação",
                    itemListElement: [
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Terapia Cognitivo-Comportamental",
                          description:
                            "Abordagem estruturada e baseada em evidências, adaptada à história e ao ritmo de cada pessoa.",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Neuropsicologia",
                          description:
                            "Avaliação e reabilitação cognitiva, com formação pela FMUSP e experiência no cuidado a idosos.",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Transtornos do Sono",
                          description:
                            "Pós-graduação pelo Hospital Israelita Albert Einstein, com foco no tratamento da insônia.",
                        },
                      },
                    ],
                  },
                },
                {
                  "@type": "WebSite",
                  "@id": "https://regianepsicologa.com.br/#website",
                  url: "https://regianepsicologa.com.br",
                  name: "Regiane Paula — Psicóloga",
                  description: "Site oficial de Regiane Paula, psicóloga.",
                  publisher: {
                    "@id": "https://regianepsicologa.com.br/#business",
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
