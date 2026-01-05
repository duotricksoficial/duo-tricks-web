import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";



const seo = {
  es: {
    title: "Duo Tricks | Acrobacia en pareja · Shows y Entrenamiento",
    description:
      "Duo Tricks es una compañía de acrobacia en pareja especializada en entrenamiento profesional, shows escénicos y performances.",
  },
  en: {
    title: "Duo Tricks | Partner Acrobatics · Shows & Training",
    description:
      "Duo Tricks is a partner acrobatics company specialized in professional training, stage shows and performances.",
  },
};


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});




export async function generateMetadata(
  { searchParams }: { searchParams?: { lang?: string } }
): Promise<Metadata> {
  const lang = searchParams?.lang === "en" ? "en" : "es";
  const t = seo[lang];

return {
  metadataBase: new URL("https://duotricksoficial.com"),

  title: t.title,
  description: t.description,

  alternates: {
    canonical: "https://duotricksoficial.com/",
    languages: {
      "es-AR": "https://duotricksoficial.com/?lang=es",
      "en-US": "https://duotricksoficial.com/?lang=en",
    },
  },

  openGraph: {
    title: t.title,
    description: t.description,
    url: "https://duotricksoficial.com",
    siteName: "Duo Tricks",
    locale: lang === "es" ? "es_AR" : "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Duo Tricks · Acrobacia en pareja",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: t.title,
    description: t.description,
    images: ["/og-image.jpg"],
  },
};



export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
