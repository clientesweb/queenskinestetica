'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Instagram } from 'lucide-react'

const reels = [
  {
    id: 'DDt_MNbOjbC',
    url: 'https://www.instagram.com/reel/DDt_MNbOjbC/',
    description: 'Descubre nuestros tratamientos exclusivos'
  },
  {
    id: 'DDh7Kjaveg_',
    url: 'https://www.instagram.com/reel/DDh7Kjaveg_/',
    description: 'Resultados increíbles en nuestro centro'
  },
  {
    id: 'DDQpulKuiej',
    url: 'https://www.instagram.com/reel/DDQpulKuiej/',
    description: 'Conoce nuestros servicios premium'
  },
  {
    id: 'DDE4tu1OOyn',
    url: 'https://www.instagram.com/reel/DDE4tu1OOyn/',
    description: 'Transformaciones sorprendentes'
  }
]

export function InstagramReels() {
  const [selectedReel, setSelectedReel] = useState<string | null>(null)

  return (
    <section className="py-24 bg-gradient-to-b from-background to-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl font-bold tracking-tight sm:text-5xl mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Síguenos en Instagram
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Mantente al día con nuestros últimos tratamientos y resultados
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reels.map((reel, index) => (
            <motion.div
              key={reel.id}
              className="aspect-[9/16] bg-secondary rounded-lg overflow-hidden relative group"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <iframe
                src={`https://www.instagram.com/reel/${reel.id}/embed/`}
                className="w-full h-full"
                frameBorder="0"
                scrolling="no"
                allowFullScreen
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <p className="text-sm">{reel.description}</p>
                  <a
                    href={reel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center mt-2 text-primary hover:text-primary/80 transition-colors"
                  >
                    <Instagram className="w-4 h-4 mr-2" />
                    Ver en Instagram
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

