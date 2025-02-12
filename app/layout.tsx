import type { Metadata } from "next"
import { Cormorant_Garamond, Montserrat } from "next/font/google"
import "./globals.css"
import type React from "react"
import Script from "next/script"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: {
    default: "Nadiva's Estética e Insumos",
    template: "%s | Nadiva's Estética e Insumos",
  },
  description:
    "Centro de estética integral e insumos de belleza en Villa Del Dique, Córdoba. Ofrecemos tratamientos faciales, corporales, depilación, y más.",
  keywords: [
    "estética",
    "belleza",
    "tratamientos faciales",
    "tratamientos corporales",
    "depilación",
    "Villa Del Dique",
    "Córdoba",
  ],
  authors: [{ name: "Nadiva's", url: "https://www.nadivas.com.ar" }],
  creator: "Nadiva's",
  publisher: "Nadiva's",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.nadivas.com.ar"),
  alternates: {
    canonical: "/",
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
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/android-icon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon-57x57.png", sizes: "57x57" },
      { url: "/apple-icon-60x60.png", sizes: "60x60" },
      { url: "/apple-icon-72x72.png", sizes: "72x72" },
      { url: "/apple-icon-76x76.png", sizes: "76x76" },
      { url: "/apple-icon-114x114.png", sizes: "114x114" },
      { url: "/apple-icon-120x120.png", sizes: "120x120" },
      { url: "/apple-icon-144x144.png", sizes: "144x144" },
      { url: "/apple-icon-152x152.png", sizes: "152x152" },
      { url: "/apple-icon-180x180.png", sizes: "180x180" },
    ],
  },
  manifest: "/site.webmanifest",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F9D5C5" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://www.nadivas.com.ar/",
    siteName: "Nadiva's Estética e Insumos",
    title: "Nadiva's Estética e Insumos - Belleza y Bienestar en Villa Del Dique",
    description:
      "Centro de estética integral e insumos de belleza en Villa Del Dique. Tratamientos faciales, corporales, depilación, y productos de calidad.",
    images: [
      {
        url: "https://www.nadivas.com.ar/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nadiva's Estética e Insumos - Servicios de belleza y bienestar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nadiva's Estética e Insumos - Belleza y Bienestar",
    description:
      "Centro de estética integral e insumos de belleza en Villa Del Dique. Descubre nuestros tratamientos y productos.",
    images: ["https://www.nadivas.com.ar/twitter-image.jpg"],
    creator: "@nadivas",
    site: "@nadivas",
  },
  other: {
    "msapplication-TileColor": "#F9D5C5",
    "msapplication-TileImage": "/ms-icon-144x144.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${cormorant.variable} ${montserrat.variable} font-sans`}>
        {children}
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BeautySalon",
              name: "Nadiva's Estética e Insumos",
              image: "https://www.nadivas.com.ar/logo.png",
              url: "https://www.nadivas.com.ar",
              telephone: "+5493546510458",
              address: {
                "@type": "PostalAddress",
                streetAddress: "San Martín 201",
                addressLocality: "Villa Del Dique",
                addressRegion: "Córdoba",
                postalCode: "5862",
                addressCountry: "AR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -32.1833,
                longitude: -64.4833,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  opens: "09:00",
                  closes: "19:00",
                },
              ],
              sameAs: ["https://www.facebook.com/Nadivasok", "https://www.instagram.com/nadivas_"],
            }),
          }}
        />
      </body>
    </html>
  )
}

