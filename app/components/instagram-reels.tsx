"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Instagram, Loader2 } from "lucide-react"

const reels = [
  {
    id: "DF2petyOgV4",
    url: "https://www.instagram.com/reel/DF2petyOgV4/",
    description: "Descubre nuestros tratamientos faciales",
  },
  {
    id: "DFgJ0UTxtpw",
    url: "https://www.instagram.com/reel/DFgJ0UTxtpw/",
    description: "Resultados increíbles en Queen Skin",
  },
  {
    id: "DFDb1OQOflk",
    url: "https://www.instagram.com/reel/DFDb1OQOflk/",
    description: "Experiencia única en cuidado de la piel",
  },
  {
    id: "DE3KUDouMyO",
    url: "https://www.instagram.com/reel/DE3KUDouMyO/",
    description: "Transformaciones sorprendentes",
  },
]

export function InstagramReels() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadInstagramScript = () => {
      const script = document.createElement("script")
      script.src = "//www.instagram.com/embed.js"
      script.async = true
      document.body.appendChild(script)
      script.onload = () => {
        // @ts-ignore
        if (window.instgrm) {
          // @ts-ignore
          window.instgrm.Embeds.process()
        }
        setLoading(false)
      }
    }

    loadInstagramScript()

    return () => {
      const script = document.querySelector('script[src="//www.instagram.com/embed.js"]')
      if (script) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <section id="instagram" className="py-24 bg-gradient-to-b from-background to-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl font-bold tracking-tight sm:text-5xl mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Nuestros Momentos
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Descubre nuestros tratamientos y resultados más destacados
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reels.map((reel, index) => (
            <motion.div
              key={reel.id}
              className="aspect-[9/16] bg-white rounded-lg overflow-hidden relative group"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {loading ? (
                <div className="absolute inset-0 flex items-center justify-center bg-secondary">
                  <Loader2 className="w-8 h-8 animate-spin text-primary" />
                </div>
              ) : (
                <blockquote
                  className="instagram-media w-full h-full"
                  data-instgrm-captioned
                  data-instgrm-permalink={reel.url}
                  data-instgrm-version="14"
                >
                  <div style={{ padding: "16px" }}>
                    <a href={reel.url} target="_blank" rel="noopener noreferrer">
                      {reel.description}
                    </a>
                  </div>
                </blockquote>
              )}
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="https://www.instagram.com/queenskin.estetica"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Instagram className="w-6 h-6 mr-2" />
            Seguir en Instagram
          </a>
        </div>
      </div>
    </section>
  )
}

