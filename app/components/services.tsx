"use client"

import { useState, useId } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"
import {
  Sparkles,
  Zap,
  Fingerprint,
  Sun,
  Bed,
  Scissors,
  Infinity,
  GiftIcon as Massage,
  Eye,
  Paintbrush,
} from "lucide-react"

const services = [
  {
    title: "Tratamientos Corporales",
    description: "Reductores, Modeladores, Celulitis, Flacidez, Estrías",
    icon: Sparkles,
    image:
      "/images/tratamientos-corporales-en-nadivas.jpg",
  },
  {
    title: "Tratamientos Faciales",
    description:
      "Limpieza facial profunda, Peeling químico, Dermaplaning, Tratamientos para flacidez, arrugas, manchas, rosácea, acné",
    icon: Fingerprint,
    image:
      "/images/tratamientos-faciales-estetica-en-nadivas.jpg",
  },
  {
    title: "Aparatología",
    description: "Ultracavitación, Lipoláser, Radiofrecuencia, Presoterapia, Electrodos, Hifu 20D, Luz pulsada láser",
    icon: Zap,
    image:
      "/images/ultracavitacion-tratamiento-corporal-nadivas.jpg",
  },
  {
    title: "Cama Solar",
    description: "Bronceado seguro y controlado para un resplandor saludable todo el año.",
    icon: Sun,
    image:
      "/images/cama-solar-nadivas.jpg",
  },
  {
    title: "Cama de Masajes",
    description: "Experimenta la relajación profunda con nuestra cama de masajes con piedras de jade Syogra.",
    icon: Bed,
    image:
      "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
  },
  {
    title: "Depilación Sistema Descartable",
    description: "Depilación higiénica y segura con cera, sistema descartable para una piel suave y libre de vello.",
    icon: Scissors,
    image:
      "/images/depilacion-descartable-nadivas.jpg",
  },
  {
    title: "Depilación Definitiva",
    description: "Di adiós al vello no deseado con nuestros tratamientos de depilación permanente.",
    icon: Infinity,
    image:
      "/images/primera-sesion-de-depilacion-laser-nadivas.jpg",
  },
  {
    title: "Masajes",
    description:
      "Descontracturantes, Relajantes, Piedras calientes, Drenaje linfático manual (método vodder), Reductores",
    icon: Massage,
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    title: "Uñas y Pedicuría",
    description: "Servicios profesionales de manicura, pedicura y cuidado de uñas.",
    icon: Paintbrush,
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    title: "Cejas y Pestañas",
    description: "Perfilado y diagramado de cejas, Lifting de cejas, Lifting de pestañas",
    icon: Eye,
    image:
      "/images/cejas-pestañas-nadivas.jpg",
  },
]

export function Services() {
  const [selectedService, setSelectedService] = useState<(typeof services)[0] | null>(null)
  const descriptionId = useId()

  return (
    <section id="servicios" className="py-24 bg-gradient-to-b from-accent to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl font-bold tracking-tight sm:text-5xl mb-4 font-serif text-secondary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Nuestros Servicios
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Descubre nuestra amplia gama de servicios de belleza y bienestar
          </motion.p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative h-[300px] overflow-hidden rounded-lg shadow-lg cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedService(service)}
            >
              <Image
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/50 to-transparent transition-opacity group-hover:opacity-90" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <service.icon className="text-primary w-12 h-12 mb-4" />
                <h3 className="text-2xl font-serif text-primary mb-2">{service.title}</h3>
                <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="sm:max-w-[625px]" aria-describedby={descriptionId}>
          <DialogHeader>
            <DialogTitle className="text-2xl font-serif text-secondary">{selectedService?.title}</DialogTitle>
            <DialogDescription id={descriptionId}>{selectedService?.description}</DialogDescription>
          </DialogHeader>
          {selectedService && (
            <div className="mt-4 relative w-full h-[300px] rounded-lg overflow-hidden">
              <Image
                src={selectedService.image || "/placeholder.svg"}
                alt={selectedService.title}
                fill
                className="object-cover"
              />
            </div>
          )}
          <DialogFooter>
            <Button onClick={() => setSelectedService(null)}>Cerrar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  )
}

