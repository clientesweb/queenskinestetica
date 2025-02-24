"use client"

import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/5493546510458"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <MessageCircle className="w-7 h-7 text-white" />
      <span className="sr-only">Contactar por WhatsApp</span>

      {/* Efecto de pulso */}
      <motion.div
        className="absolute inset-0 rounded-full border-4 border-[#25D366]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.8, 0, 0.8],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
    </motion.a>
  )
}

