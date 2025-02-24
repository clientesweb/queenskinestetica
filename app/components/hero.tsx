"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { NeuralBackground } from "./neural-background"

const slides = [
  {
    title: ["Innovación", "Tecnológica"],
    subtitle: "Transformando el futuro del desarrollo web",
  },
  {
    title: ["Soluciones", "Creativas"],
    subtitle: "Diseño y desarrollo de próxima generación",
  },
  {
    title: ["Código", "Artesanal"],
    subtitle: "Crafteando experiencias digitales únicas",
  },
]

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative h-screen overflow-hidden bg-background pt-20">
      <NeuralBackground
        color="rgba(255, 87, 51, 0.8)"
        pointColor="rgba(64, 224, 208, 0.6)"
        lineColor="rgba(255, 160, 122, 0.3)"
        pointCount={100}
        connectionRadius={150}
      />

      {/* Elementos decorativos */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Líneas diagonales */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute top-0 left-0 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent transform -rotate-45" />
          <div className="absolute bottom-0 right-0 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-secondary to-transparent transform -rotate-45" />
        </motion.div>

        {/* Círculos pulsantes */}
        <div className="absolute top-1/4 left-1/4">
          <motion.div
            className="w-4 h-4 rounded-full border border-primary"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 0.2, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </div>
        <div className="absolute bottom-1/4 right-1/4">
          <motion.div
            className="w-4 h-4 rounded-full border border-secondary"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 0.2, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </div>

        {/* Hexágonos flotantes */}
        <motion.div
          className="absolute top-1/3 right-1/4"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <div className="w-8 h-8 border-2 border-primary transform rotate-45" />
        </motion.div>
        <motion.div
          className="absolute bottom-1/3 left-1/4"
          animate={{
            y: [0, 20, 0],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          <div className="w-8 h-8 border-2 border-secondary transform rotate-45" />
        </motion.div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent via-primary to-transparent"
          animate={{
            scaleY: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 font-sans relative"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.span
            className="text-primary inline-block"
            animate={{
              textShadow: [
                "0 0 10px rgba(255,87,51,0.5)",
                "0 0 20px rgba(255,87,51,0.3)",
                "0 0 10px rgba(255,87,51,0.5)",
              ],
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            {slides[currentSlide].title[0]}
          </motion.span>{" "}
          <motion.span
            className="text-secondary inline-block"
            animate={{
              textShadow: [
                "0 0 10px rgba(64,224,208,0.5)",
                "0 0 20px rgba(64,224,208,0.3)",
                "0 0 10px rgba(64,224,208,0.5)",
              ],
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
          >
            {slides[currentSlide].title[1]}
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-xl sm:text-2xl md:text-3xl text-white mb-8 font-sans relative"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {slides[currentSlide].subtitle}
          <motion.div
            className="absolute -bottom-2 left-0 w-full h-[1px]"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            style={{
              background: "linear-gradient(90deg, transparent, rgba(64,224,208,0.5), transparent)",
            }}
          />
        </motion.p>

        <motion.div
          className="flex gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 relative overflow-hidden group"
          >
            <Link href="#servicios">
              <span className="relative z-10">Explora Servicios</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary"
                initial={{ x: "100%" }}
                whileHover={{ x: "-100%" }}
                transition={{ duration: 1 }}
              />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-2 border-secondary text-secondary hover:bg-secondary/10 text-lg px-8 py-6 relative overflow-hidden group"
          >
            <a href="https://wa.me/5493546510458" target="_blank" rel="noopener noreferrer" className="relative z-10">
              <span className="relative z-10">Contáctanos</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-secondary via-primary to-secondary opacity-20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 1 }}
              />
            </a>
          </Button>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`relative h-3 transition-all duration-300 overflow-hidden ${
              index === currentSlide ? "w-8" : "w-3"
            }`}
            onClick={() => setCurrentSlide(index)}
          >
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary"
              animate={{
                x: index === currentSlide ? ["100%", "0%"] : "0%",
              }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
            />
            <div
              className={`absolute inset-0 rounded-full ${
                index === currentSlide ? "bg-transparent" : "bg-white/50 hover:bg-white/80"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  )
}

