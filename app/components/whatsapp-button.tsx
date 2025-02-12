import Image from "next/image"
import { motion } from "framer-motion"

export function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/5493546510458"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <Image
        src="/logo.png"
        alt="Nadiva's Logo"
        fill
        className="object-cover"
      />
    </motion.a>
  )
}

