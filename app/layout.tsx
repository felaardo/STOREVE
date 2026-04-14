import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Storefe — Crecimiento con IA para Negocios Locales",
  description:
    "Storefe construye sitios web de alta conversión y sistemas de automatización con IA que ayudan a los negocios locales a conseguir más clientes, más reservas y más ingresos.",
  keywords: ["negocio local", "automatización con IA", "diseño web", "captación de clientes", "marketing digital"],
  openGraph: {
    title: "Storefe — Conseguí Más Clientes con IA",
    description: "Construimos sitios web y sistemas con IA que hacen crecer tu negocio local.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
