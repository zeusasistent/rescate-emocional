import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans, Newsreader } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Método de Rescate Emocional — Recupera tu poder en 30 días",
  description:
    "Deja de sufrir por quien no te elige. +20 ejercicios reales. Un programa paso a paso para reconstruir tu amor propio desde cero.",
  openGraph: {
    title: "Método de Rescate Emocional",
    description:
      "Deja de sufrir por quien no te elige y recupera tu poder en 30 días.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${cormorant.variable} ${plusJakarta.variable} ${newsreader.variable}`}
    >
      <body className="min-h-screen" style={{ backgroundColor: "#FFF8F7" }}>
        {children}
      </body>
    </html>
  );
}
