import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Anton, Plus_Jakarta_Sans } from "next/font/google";
import "../globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { routing } from "@/i18n/routing";

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

const BASE = "https://mikacarui.com";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  const path = locale === routing.defaultLocale ? "" : `/${locale}`;

  return {
    title: t("title"),
    description: t("description"),
    keywords: t.raw("keywords") as string[],
    authors: [{ name: "Mika Carui" }],
    creator: "Mika Carui",
    metadataBase: new URL(BASE),
    alternates: {
      canonical: path || "/",
      languages: {
        pt: "/",
        en: "/en",
        "x-default": "/",
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "pt" ? "pt_BR" : "en_US",
      url: `${BASE}${path}`,
      title: t("title"),
      description: t("ogDescription"),
      siteName: t("siteName"),
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("twitterDescription"),
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
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "JsonLd" });
  const path = locale === routing.defaultLocale ? "" : `/${locale}`;
  const url = `${BASE}${path}`;

  return (
    <html lang={locale === "pt" ? "pt-BR" : "en"} className={`${anton.variable} ${plusJakarta.variable}`}>
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
                  "@id": `${url}/#business`,
                  name: t("businessName"),
                  description: t("businessDescription"),
                  url,
                  areaServed: t("areaServed"),
                  telephone: "+5511975434251",
                  hasOfferCatalog: {
                    "@type": "OfferCatalog",
                    name: t("catalogName"),
                    itemListElement: [
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: t("ansiedadeName"),
                          description: t("ansiedadeDesc"),
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: t("depressaoName"),
                          description: t("depressaoDesc"),
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: t("integrativaName"),
                          description: t("integrativaDesc"),
                        },
                      },
                    ],
                  },
                },
                {
                  "@type": "WebSite",
                  "@id": `${url}/#website`,
                  url,
                  name: t("businessName"),
                  description: t("websiteDescription"),
                  publisher: {
                    "@id": `${url}/#business`,
                  },
                  inLanguage: locale === "pt" ? "pt-BR" : "en",
                },
              ],
            }),
          }}
        />
      </head>
      <body>
        <NextIntlClientProvider>
          {children}
        </NextIntlClientProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
