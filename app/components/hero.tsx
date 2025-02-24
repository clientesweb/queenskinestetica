"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const slides = [
  {
    image: "/belleza-integral-villa-del-dique-nadivas.jpg",
    title: ["Belleza Integral", "en Villa Del Dique"],
    subtitle: "Descubre nuestros tratamientos faciales, corporales y servicios de estética avanzados",
  },
  {
    image: "/aparatologia-villa-del-dique-nadivas.jpg",
    title: ["Tecnología", "de Vanguardia"],
    subtitle: "Experimenta resultados sorprendentes con nuestra aparatología de última generación",
  },
  {
    image: "/masajes-terapeuticos-villa-del-dique-nadivas.jpg",
    title: ["Relájate", "y Renuévate"],
    subtitle: "Disfruta de nuestros masajes terapéuticos y tratamientos de bienestar",
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
    <div className="relative h-screen overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={slides[currentSlide].image || "/placeholder.svg"}
            alt="Hero background"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            quality={100}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/60 to-secondary/20" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 font-serif"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-primary">{slides[currentSlide].title[0]}</span>{" "}
          <span className="text-white">{slides[currentSlide].title[1]}</span>
        </motion.h1>
        <motion.p
          className="text-xl sm:text-2xl md:text-3xl text-white mb-8 font-sans max-w-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {slides[currentSlide].subtitle}
        </motion.p>
        <motion.div
          className="flex gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-secondary text-lg px-8 py-6">
            <Link href="#servicios">Explora Servicios</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="bg-transparent border-white text-white hover:bg-white/20 text-lg px-8 py-6"
          >
            <a href="https://wa.me/5493546452819" target="_blank" rel="noopener noreferrer">
              Contáctanos
            </a>
          </Button>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-primary w-8" : "bg-white/50 hover:bg-white/80"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}
