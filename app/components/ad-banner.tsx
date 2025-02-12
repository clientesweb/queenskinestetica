'use client'

import { Button } from "@/app/components/ui/button"
import Image from "next/image"

export function AdBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-primary to-secondary overflow-hidden relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif text-white">¡Oferta Especial de Verano!</h2>
            <p className="text-xl md:text-2xl mb-8 text-white/90 font-sans">Obtén un 30% de descuento en tu primer tratamiento completo</p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              ¡Reserva Ahora!
            </Button>
          </div>
          <div className="relative h-64 md:h-full">
            <Image
              src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt="Oferta Especial"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-secondary/50 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

