"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Facebook, Instagram } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Servicios", href: "#servicios" },
  { name: "Tienda", href: "#tienda" },
  { name: "Instagram", href: "#instagram" },
  { name: "FAQ", href: "#faq" },
  { name: "Contacto", href: "#contacto" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-lg" : "bg-transparent"
      }`}
    >
      <div className="relative">
        {/* Líneas decorativas */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          <motion.div
            className="absolute top-0 left-0 w-1/4 h-[1px] bg-secondary"
            animate={{
              x: ["0%", "400%"],
            }}
            transition={{
              duration: 3,
              ease: "linear",
              repeat: Number.POSITIVE_INFINITY,
            }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-1/4 h-[1px] bg-primary"
            animate={{
              x: ["0%", "-400%"],
            }}
            transition={{
              duration: 3,
              ease: "linear",
              repeat: Number.POSITIVE_INFINITY,
            }}
          />
        </div>

        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3" aria-label="Global">
          <div className="flex items-center gap-4">
            <motion.a
              href="https://m.facebook.com/@Nadivasok"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Facebook className="h-5 w-5" />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/nadivas_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Instagram className="h-5 w-5" />
            </motion.a>
          </div>

          <div className="flex justify-center flex-grow">
            <Link href="/" className="relative group">
              <span className="sr-only">Duality Domain</span>
              <Image
                className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
                src="/logo.png"
                alt="Duality Domain Logo"
                width={180}
                height={48}
                priority
              />
              <motion.div
                className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-primary via-secondary to-primary"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: [0, 1, 0] }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />
            </Link>
          </div>

          <div className="flex items-center">
            <motion.button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2.5 text-secondary hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(true)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="sr-only">Abrir menú principal</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </motion.button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-background/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background/90 backdrop-blur-lg px-6 py-6 sm:max-w-sm"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 20, stiffness: 100 }}
            >
              <div className="flex items-center justify-between">
                <Link href="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">Duality Domain</span>
                  <Image className="h-8 w-auto" src="/logo.png" alt="Duality Domain Logo" width={120} height={32} />
                </Link>
                <motion.button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-secondary hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="sr-only">Cerrar menú</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </motion.button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/20">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <motion.div key={item.name} whileHover={{ x: 10 }} whileTap={{ scale: 0.95 }}>
                        <Link
                          href={item.href}
                          className="group -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-secondary hover:text-primary transition-colors relative overflow-hidden"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <span className="relative z-10">{item.name}</span>
                          <motion.div
                            className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-primary to-secondary"
                            initial={{ width: 0 }}
                            whileHover={{ width: "100%" }}
                            transition={{ duration: 0.3 }}
                          />
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}

