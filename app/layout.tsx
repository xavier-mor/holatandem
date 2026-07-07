import type { Metadata } from "next";
import "./globals.css";

const FAVICON =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='51 59 456 456'%3E%3Cpath d='M200.08 355.54C181.733 394.527 171.413 422.62 169.12 439.82C202.373 423.767 232.187 402.553 258.56 376.18L200.08 355.54Z' fill='%230D2B45'/%3E%3Ccircle cx='219' cy='257.5' r='148' fill='%230D2B45'/%3E%3Ccircle cx='348' cy='278.14' r='139' fill='%232DA5AE'/%3E%3Ccircle cx='440.29' cy='118.24' r='34.92' fill='%23E26031'/%3E%3C/svg%3E";

export const metadata: Metadata = {
  title: "HolaTandem — WhatsApp AI that answers every lead, in any language",
  description:
    "Done-for-you WhatsApp AI for Costa del Sol salons, clinics and estate agents. Answers leads in seconds, books appointments and follows up — in your customer's language. Set up for you, end to end.",
  metadataBase: new URL("https://holatandem.com"),
  alternates: { canonical: "https://holatandem.com/" },
  icons: { icon: FAVICON },
  openGraph: {
    type: "website",
    siteName: "HolaTandem",
    url: "https://holatandem.com/",
    title: "HolaTandem — WhatsApp AI that answers every lead, in any language",
    description:
      "Done-for-you WhatsApp AI for Costa del Sol salons, clinics and estate agents. Replies in seconds, books appointments and follows up — in your customer's language.",
    images: [
      {
        url: "https://holatandem.com/og-image.png",
        width: 1200,
        height: 630,
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
    images: ["https://holatandem.com/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Playfair+Display:wght@700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
