import Link from "next/link"
import { Facebook, Instagram, MapPin, Phone, Mail, Clock, CreditCard } from 'lucide-react'
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="animate-fade-in">
            <Image
              src="/logo.png"
              alt="Nadiva's Logo"
              width={150}
              height={150}
              className="mb-4"
            />
            <p className="text-sm mt-4">
              En Nadiva's, nos dedicamos a realzar tu belleza natural y bienestar. Nuestro compromiso es ofrecerte servicios de alta calidad y productos premium para que te sientas y te veas radiante.
            </p>
          </div>
          <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
            <h3 className="text-2xl font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span>San Martín 201, Villa Del Dique, Cordoba</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:+5493546510458" className="hover:text-primary transition-colors">
                  +54 9 3546 51-0458
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:info@nadivas.com" className="hover:text-primary transition-colors">
                  info@nadivas.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                <span>Lun - Sáb: 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
          <div className="animate-fade-in" style={{animationDelay: '0.4s'}}>
            <h3 className="text-2xl font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#servicios" className="hover:text-primary transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="#tienda" className="hover:text-primary transition-colors">
                  Tienda
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="hover:text-primary transition-colors">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="/politica-privacidad" className="hover:text-primary transition-colors">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/terminos-condiciones" className="hover:text-primary transition-colors">
                  Términos y Condiciones
                </Link>
              </li>
            </ul>
          </div>
          <div className="animate-fade-in" style={{animationDelay: '0.6s'}}>
            <h3 className="text-2xl font-semibold mb-4">Síguenos</h3>
            <div className="flex gap-4 mb-4">
              <a
                href="https://m.facebook.com/@Nadivasok/?ref=xav_ig_profile_page&wtsid=rdr_0qlvH37LXnRUdD6GV&hr=1"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-8 w-8" />
              </a>
              <a
                href="https://www.instagram.com/nadivas_?igsh=aGxzdnRhZXJoZDFz"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-8 w-8" />
              </a>
            </div>
            <h4 className="text-lg font-semibold mb-2">Métodos de Pago</h4>
            <div className="flex gap-2 mb-4">
              <CreditCard className="h-8 w-8" />
              <Image src="/visa.png" alt="Visa" width={32} height={32} />
              <Image src="/mastercard.png" alt="Mastercard" width={32} height={32} />
              <Image src="/mercadopago.png" alt="MercadoPago" width={32} height={32} />
            </div>
            <h4 className="text-lg font-semibold mb-2">Boletín Informativo</h4>
            <form className="flex">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="px-3 py-2 bg-white text-black rounded-l-md w-full"
                required
              />
              <button
                type="submit"
                className="bg-primary text-white px-4 py-2 rounded-r-md hover:bg-primary/90 transition-colors"
              >
                Suscribir
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 text-center animate-fade-in" style={{animationDelay: '0.8s'}}>
          <p>&copy; {new Date().getFullYear()} Nadiva's. Todos los derechos reservados.</p>
          <p className="mt-2 text-sm text-white/60">Diseñado y desarrollado por Duality Domain</p>
        </div>
      </div>
    </footer>
  )
}

