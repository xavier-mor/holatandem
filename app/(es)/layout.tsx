import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "../globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
  variable: "--font-manrope",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
  variable: "--font-playfair",
});

const FAVICON =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='51 59 456 456'%3E%3Cpath d='M200.08 355.54C181.733 394.527 171.413 422.62 169.12 439.82C202.373 423.767 232.187 402.553 258.56 376.18L200.08 355.54Z' fill='%230D2B45'/%3E%3Ccircle cx='219' cy='257.5' r='148' fill='%230D2B45'/%3E%3Ccircle cx='348' cy='278.14' r='139' fill='%232DA5AE'/%3E%3Ccircle cx='440.29' cy='118.24' r='34.92' fill='%23E26031'/%3E%3C/svg%3E";

const globalSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://holatandem.com/#website",
      name: "HolaTandem",
      url: "https://holatandem.com/",
      description:
        "IA para WhatsApp hecha para ti, para salones, clínicas e inmobiliarias de la Costa del Sol.",
      inLanguage: ["es", "en"],
      publisher: { "@id": "https://holatandem.com/#organization" },
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://holatandem.com/#organization",
      name: "HolaTandem",
      description:
        "IA para WhatsApp hecha para ti, para salones, clínicas e inmobiliarias de la Costa del Sol. Responde leads al instante, agenda citas y hace seguimiento en el idioma de tu cliente.",
      url: "https://holatandem.com/",
      image: "https://holatandem.com/assets/og_image.png",
      telephone: "+34638054941",
      email: "info@holatandem.com",
      areaServed: { "@type": "Place", name: "Costa del Sol, Málaga, Spain" },
      knowsLanguage: ["es", "en", "ru", "de", "fr", "ro"],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Fuengirola",
        postalCode: "29640",
        addressRegion: "Málaga",
        addressCountry: "ES",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 36.54006,
        longitude: -4.62504,
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: "+34638054941",
        url: "https://wa.me/34638054941",
        availableLanguage: [
          "Spanish",
          "English",
          "Russian",
          "German",
          "French",
          "Romanian",
        ],
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
      founder: { "@id": "https://holatandem.com/#elena-ignat" },
    },
  ],
};

export const metadata: Metadata = {
  title: "HolaTandem — IA para WhatsApp que responde cada cliente, en cualquier idioma",
  description:
    "IA para WhatsApp hecha para ti, para salones, clínicas e inmobiliarias de la Costa del Sol. Responde en segundos, agenda citas y hace seguimiento — en el idioma de tu cliente. Lo configuramos todo.",
  metadataBase: new URL("https://holatandem.com"),
  alternates: {
    canonical: "/",
    languages: { es: "/", en: "/en", "x-default": "/" },
  },
  icons: { icon: FAVICON },
  openGraph: {
    type: "website",
    siteName: "HolaTandem",
    url: "https://holatandem.com/",
    title:
      "HolaTandem — IA para WhatsApp que responde cada cliente, en cualquier idioma",
    description:
      "IA para WhatsApp hecha para ti, para salones, clínicas e inmobiliarias de la Costa del Sol. Responde en segundos, agenda citas y hace seguimiento.",
    images: [
      {
        url: "https://holatandem.com/assets/og_image.png",
        width: 1200,
        height: 630,
        alt: "HolaTandem — IA para WhatsApp para salones, clínicas e inmobiliarias de la Costa del Sol",
      },
    ],
    locale: "es_ES",
    alternateLocale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "HolaTandem — IA para WhatsApp que responde cada cliente, en cualquier idioma",
    description:
      "IA para WhatsApp hecha para ti, para salones, clínicas e inmobiliarias de la Costa del Sol.",
    images: ["https://holatandem.com/assets/og_image.png"],
  },
};

export default function SpanishRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${manrope.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalSchema) }}
        />
      </head>
      <body>
        {children}
        <script src="/assets/analytics.js" defer></script>
      </body>
    </html>
  );
}
