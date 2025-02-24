"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "¿Qué servicios ofrece Duality Domain?",
    answer:
      "Ofrecemos servicios integrales de desarrollo web, incluyendo diseño UI/UX, desarrollo frontend y backend, optimización SEO, y soluciones de comercio electrónico personalizadas.",
  },
  {
    question: "¿Cómo puedo solicitar una cotización?",
    answer:
      "Puedes contactarnos a través del botón de WhatsApp o completando el formulario de contacto. Nos pondremos en contacto contigo para discutir tu proyecto y proporcionar una cotización detallada.",
  },
  {
    question: "¿Cuál es el tiempo promedio de desarrollo?",
    answer:
      "El tiempo de desarrollo varía según la complejidad del proyecto. Típicamente, un sitio web básico puede estar listo en 2-3 semanas, mientras que proyectos más complejos pueden tomar 1-3 meses.",
  },
  {
    question: "¿Ofrecen mantenimiento post-desarrollo?",
    answer:
      "Sí, ofrecemos servicios de mantenimiento y soporte continuo para asegurar que tu sitio web funcione de manera óptima. Esto incluye actualizaciones de seguridad, respaldos y modificaciones menores.",
  },
  {
    question: "¿Qué tecnologías utilizan?",
    answer:
      "Trabajamos con las últimas tecnologías web, incluyendo React, Next.js, Node.js, y otras herramientas modernas de desarrollo. Nos mantenemos actualizados con las mejores prácticas de la industria.",
  },
  {
    question: "¿Ofrecen servicios de hosting?",
    answer:
      "Sí, podemos ayudarte con el hosting de tu sitio web. Trabajamos con proveedores confiables y ofrecemos soluciones de hosting optimizadas para el rendimiento y la seguridad.",
  },
]

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl font-bold tracking-tight sm:text-5xl mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Preguntas Frecuentes
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Encuentra respuestas a las preguntas más comunes sobre nuestros servicios
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                className="flex justify-between items-center w-full text-left p-4 rounded-lg bg-secondary/5 hover:bg-secondary/10 transition-colors duration-200"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <span className="text-lg font-semibold text-primary">{faq.question}</span>
                <motion.div animate={{ rotate: activeIndex === index ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  <ChevronDown className="w-5 h-5 text-secondary" />
                </motion.div>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 bg-secondary/5 text-secondary/80 rounded-b-lg">{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Elementos decorativos */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"
            animate={{
              x: [0, -100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </div>
      </div>
    </section>
  )
}

