import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "StoreVER — Crecimiento con IA para Negocios Locales",
  description:
    "StoreVER construye sitios web de alta conversión y sistemas de automatización con IA que ayudan a los negocios locales a conseguir más clientes, más reservas y más ingresos.",
  keywords: ["negocio local", "automatización con IA", "diseño web", "captación de clientes", "marketing digital"],
  openGraph: {
    title: "StoreVER — Conseguí Más Clientes con IA",
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
      <body>
        <div className="bg-pattern bg-[#0a0f1e] min-h-screen">
          <div className="relative z-10">
            {children}
          </div>
          <WhatsAppButton />
        </div>
        <Script src="//code.tidio.co/yb9chsikpqjasle6tgwzc7pzccms2ilf.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
