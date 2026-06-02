import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "HolaTandem — Tu asistente de WhatsApp · Your WhatsApp Assistant",
  description:
    "HolaTandem es un asistente de IA por WhatsApp para pequeños negocios de la Costa del Sol. Responde a tus clientes al instante, agenda citas y te avisa cuando un cliente importa de verdad — en su idioma. An AI WhatsApp assistant for Costa del Sol small businesses.",
  metadataBase: new URL("https://holatandem.com"),
  icons: { icon: "/favicon.png" },
  openGraph: {
    title: "HolaTandem — Your WhatsApp Assistant",
    description:
      "An AI WhatsApp assistant for Costa del Sol small businesses. Replies in seconds, books appointments, speaks every customer's language.",
    images: ["/og-image.png"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${playfair.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
