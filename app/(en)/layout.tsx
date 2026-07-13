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


const globalSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://holatandem.com/#website",
      name: "HolaTandem",
      url: "https://holatandem.com/",
      description:
        "Done-for-you WhatsApp AI for Costa del Sol salons, clinics and estate agents.",
      inLanguage: ["es", "en"],
      publisher: { "@id": "https://holatandem.com/#organization" },
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://holatandem.com/#organization",
      name: "HolaTandem",
      description:
        "Done-for-you WhatsApp AI automation for Costa del Sol salons, aesthetic clinics and estate agents. Answers leads instantly, books appointments and follows up in your customer's language.",
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
  title: "HolaTandem — WhatsApp AI that answers every lead, in any language",
  description:
    "Done-for-you WhatsApp AI for Costa del Sol salons, clinics and estate agents. Answers leads in seconds, books appointments and follows up — in your customer's language. Set up for you, end to end.",
  metadataBase: new URL("https://holatandem.com"),
  alternates: {
    canonical: "/en",
    languages: { es: "/", en: "/en", "x-default": "/" },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/assets/favicon-32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/assets/apple-touch-icon-180.png',
    shortcut: '/favicon.ico',
  },
  openGraph: {
    type: "website",
    siteName: "HolaTandem",
    url: "https://holatandem.com/en",
    title: "HolaTandem — WhatsApp AI that answers every lead, in any language",
    description:
      "Done-for-you WhatsApp AI for Costa del Sol salons, clinics and estate agents. Replies in seconds, books appointments and follows up — in your customer's language.",
    images: [
      {
        url: "https://holatandem.com/assets/og_image.png",
        width: 1200,
        height: 630,
        alt: "HolaTandem — WhatsApp AI for Costa del Sol salons, clinics and estate agents",
      },
    ],
    locale: "en_GB",
    alternateLocale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "HolaTandem — WhatsApp AI that answers every lead, in any language",
    description:
      "Done-for-you WhatsApp AI for Costa del Sol salons, clinics and estate agents. Replies in seconds, in your customer's language.",
    images: ["https://holatandem.com/assets/og_image.png"],
  },
};

export default function EnglishRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${playfair.variable}`}>
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
