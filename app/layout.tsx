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
    default: "Queen Skin Estética - Belleza y Cuidado Personal",
    template: "%s | Queen Skin Estética",
  },
  description:
    "Centro de estética integral y cuidado personal en Villa Del Dique, Córdoba. Ofrecemos tratamientos faciales, corporales, y servicios de belleza profesionales.",
  keywords: [
    "estética",
    "belleza",
    "tratamientos faciales",
    "tratamientos corporales",
    "cuidado personal",
    "Villa Del Dique",
    "Córdoba",
    "Queen Skin",
  ],
  authors: [{ name: "Queen Skin", url: "https://www.queenskin.com.ar" }],
  creator: "Queen Skin",
  publisher: "Queen Skin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.queenskin.com.ar"),
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
    { media: "(prefers-color-scheme: light)", color: "#D53F8C" },
    { media: "(prefers-color-scheme: dark)", color: "#97266D" },
  ],
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://www.queenskin.com.ar/",
    siteName: "Queen Skin Estética",
    title: "Queen Skin Estética - Belleza y Cuidado Personal en Villa Del Dique",
    description:
      "Centro de estética integral y cuidado personal en Villa Del Dique. Tratamientos faciales, corporales, y servicios de belleza profesionales.",
    images: [
      {
        url: "https://www.queenskin.com.ar/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Queen Skin Estética - Servicios de belleza y bienestar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Queen Skin Estética - Belleza y Cuidado Personal",
    description:
      "Centro de estética integral y cuidado personal en Villa Del Dique. Descubre nuestros tratamientos y servicios.",
    images: ["https://www.queenskin.com.ar/twitter-image.jpg"],
    creator: "@queenskin",
    site: "@queenskin",
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
              name: "Queen Skin Estética",
              image: "https://www.queenskin.com.ar/logo.png",
              "@id": "https://www.queenskin.com.ar",
              url: "https://www.queenskin.com.ar",
              telephone: "+5493546452819",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Av. San Martin 363",
                addressLocality: "Villa Del Dique",
                addressRegion: "Córdoba",
                postalCode: "X5862",
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
                  opens: ["09:00", "15:00"],
                  closes: ["12:30", "20:00"],
                },
              ],
              sameAs: ["https://www.instagram.com/queenskin.estetica"],
            }),
          }}
        />
      </body>
    </html>
  )
}

