'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: "¿Qué servicios ofrece Nadiva's?",
    answer: "Nadiva's ofrece una amplia gama de servicios de estética y belleza, incluyendo tratamientos faciales, corporales, depilación, masajes, cuidado de uñas, y más. También contamos con una tienda de productos de belleza de alta calidad."
  },
  {
    question: "¿Necesito hacer una cita previa?",
    answer: "Sí, recomendamos hacer una cita previa para garantizar la disponibilidad y ofrecerte el mejor servicio posible. Puedes reservar tu cita llamando a nuestro número de teléfono o a través de nuestras redes sociales."
  },
  {
    question: "¿Qué métodos de pago aceptan?",
    answer: "Aceptamos efectivo, tarjetas de crédito y débito (Visa y Mastercard), y también MercadoPago para tu comodidad."
  },
  {
    question: "¿Ofrecen descuentos o promociones?",
    answer: "Sí, regularmente ofrecemos promociones especiales y paquetes de tratamientos. Te recomendamos seguirnos en nuestras redes sociales o suscribirte a nuestro boletín para estar al tanto de las últimas ofertas."
  },
  {
    question: "¿Cuál es su política de cancelación?",
    answer: "Agradecemos que nos notifiques con al menos 24 horas de anticipación si necesitas cancelar o reprogramar tu cita. Esto nos permite ofrecer el espacio a otros clientes y mantener un servicio eficiente."
  },
  {
    question: "¿Venden productos para el cuidado en casa?",
    answer: "Sí, contamos con una selección de productos profesionales para el cuidado de la piel y el cabello que puedes usar en casa. Nuestro equipo estará encantado de recomendarte los productos más adecuados para tu rutina de belleza."
  }
]

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-accent to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl font-bold tracking-tight sm:text-5xl mb-4 font-serif text-secondary"
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
                className="flex justify-between items-center w-full text-left p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-200"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <span className="text-lg font-semibold text-secondary">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-primary transition-transform duration-200 ${activeIndex === index ? 'transform rotate-180' : ''}`}
                />
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="p-4 bg-muted text-muted-foreground rounded-b-lg">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

