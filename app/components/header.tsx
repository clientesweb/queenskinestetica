'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Facebook, Instagram } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navigation = [
  { name: 'Inicio', href: '/' },
  { name: 'Servicios', href: '#servicios' },
  { name: 'Tienda', href: '#tienda' },
  { name: 'Instagram', href: '#instagram' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contacto', href: '#contacto' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4" aria-label="Global">
        <div className="flex items-center">
          <a
            href="https://m.facebook.com/@Nadivasok/?ref=xav_ig_profile_page&wtsid=rdr_0qlvH37LXnRUdD6GV&hr=1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-primary transition-colors mr-4"
          >
            <Facebook className="h-6 w-6" />
          </a>
          <a
            href="https://www.instagram.com/nadivas_?igsh=aGxzdnRhZXJoZDFz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-primary transition-colors"
          >
            <Instagram className="h-6 w-6" />
          </a>
        </div>

        <div className="flex justify-center flex-grow">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Nadiva's</span>
            <Image
              className="h-16 w-auto"
              src="/logo.png"
              alt="Nadiva's Logo"
              width={240}
              height={64}
              priority
            />
          </Link>
        </div>

        <div className="flex items-center">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2.5 text-secondary"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Abrir menú principal</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 20, stiffness: 100 }}
            >
              <div className="flex items-center justify-between">
                <Link href="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">Nadiva's</span>
                  <Image
                    className="h-12 w-auto"
                    src="/logo.png"
                    alt="Nadiva's Logo"
                    width={180}
                    height={48}
                  />
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-secondary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Cerrar menú</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-secondary hover:bg-muted hover:text-primary transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

