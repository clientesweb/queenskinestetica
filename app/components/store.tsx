"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import Image from "next/image"
import { motion } from "framer-motion"
import { ShoppingCart, Plus, Minus, Eye } from "lucide-react"
import type { CartItem } from "@/types/cart"

const products = [
  {
    id: 1,
    name: "Suero Facial Nano Hialurónico",
    price: 4999,
    image: "/products/suero-facial-nano-hialuronico.webp",
    description:
      "Serum Nano Hialurónico concentrado antiage de hidratación y elasticidad. La exquisita combinación de Hialurónico de distinto peso molecular otorga a este Serum una cualidad específica y única, penetrando en los distintos niveles de nuestra piel ya que las moléculas pequeñas del Hialurónico BPM penetran más y más profundo en tu piel. 100 % Antiedad.",
  },
  {
    id: 2,
    name: "SkinCer - Emulsión Facial Ultra Hidratante Ceramidas",
    price: 3999,
    image: "/products/skincer-emulsion-facial.webp",
    description:
      "Gracias a su fórmula ultra hidratante mantiene la humedad, promueve la hidratación epidérmica y aumenta la cohesión celular. Además, evita la descamación y previene el envejecimiento. ¡Es apta para todo tipo de piel!",
  },
  {
    id: 3,
    name: "Skincer Retil Max (retinol 0.1 %)",
    price: 5499,
    image: "/products/skincer-retil-max.webp",
    description:
      "SKINCER RETIL MAX ✨ ¡Con Retinol Puro, Ceramidas y Niacinamida! | 50 ml. Atenúa signos de envejecimiento, acelera la renovación celular, empareja el tono de la piel, atenúa manchas y líneas de expresión, brinda una luminosidad única. Formula única: el retinol potencia los efectos del resto de los activos. Ideal pieles secas y maduras.",
  },
  {
    id: 4,
    name: "Suero Facial Iluminador con Vitamina C",
    price: 4499,
    image: "/products/suero-facial-iluminador.webp",
    description:
      "Realmente Iluminaremos tu rostro con este nuevo Suero Iluminador. Buscamos la alquimia perfecta para que tu rostro refleje esa luz que adoramos. Todos sus principios activos logran un efecto de renovación celular, y brillar.",
  },
  {
    id: 5,
    name: "Suero Equilibre",
    price: 3999,
    image: "/products/suero-equilibre.webp",
    description:
      "El equilibrio de nuestra mente, nuestras emociones y nuestro cuerpo es aquello que permite una vida plena y coherente.",
  },
  {
    id: 6,
    name: "Suero Facial Niacinamida",
    price: 4299,
    image: "/products/suero-facial-niacinamida.webp",
    description:
      "Este Nuevo serum Niacinamida es un producto 'Apto para todo Público'. Y con esto queremos decir que la Niacinamida es un principio activo tan versátil que tiene beneficios para todos los tipos de rostro. Regula la secreción de sebo e hidrata, reduce visiblemente la apariencia de poros, y al favorecer la barrera que protege la humedad de tu rostro, logra una hidratación y restaura el equilibrio cutáneo.",
  },
]

interface StoreProps {
  addToCart: (item: CartItem) => void
}

export function Store({ addToCart }: StoreProps) {
  const [selectedProduct, setSelectedProduct] = useState<(typeof products)[0] | null>(null)
  const [quantity, setQuantity] = useState(1)

  const handleAddToCart = (product: (typeof products)[0], quantity: number) => {
    addToCart({ ...product, quantity })
    setSelectedProduct(null)
    setQuantity(1)
  }

  return (
    <section id="tienda" className="py-24 bg-gradient-to-b from-background to-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4 animate-fade-in">Tienda de Insumos</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up">
            Productos profesionales para tu cuidado personal
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="bg-white rounded-lg shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-64 w-full">
                <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-3xl font-bold text-primary mb-4">${product.price.toFixed(2)}</p>
                <div className="flex justify-between">
                  <Button className="flex-1 mr-2" onClick={() => handleAddToCart(product, 1)}>
                    <ShoppingCart className="mr-2 h-4 w-4" /> Agregar
                  </Button>
                  <Button variant="outline" onClick={() => setSelectedProduct(product)}>
                    <Eye className="mr-2 h-4 w-4" /> Ver más
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog
        open={!!selectedProduct}
        onOpenChange={() => {
          setSelectedProduct(null)
          setQuantity(1)
        }}
      >
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{selectedProduct?.name}</DialogTitle>
            <DialogDescription>{selectedProduct?.description}</DialogDescription>
          </DialogHeader>
          <div className="mt-4 relative w-full h-[300px] rounded-lg overflow-hidden">
            {selectedProduct && (
              <Image
                src={selectedProduct.image || "/placeholder.svg"}
                alt={selectedProduct.name}
                fill
                className="object-cover"
              />
            )}
          </div>
          <div className="flex items-center justify-between mt-4">
            <span className="text-2xl font-bold text-primary">${selectedProduct?.price.toFixed(2)}</span>
            <div className="flex items-center">
              <Button variant="outline" size="icon" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                <Minus className="h-4 w-4" />
              </Button>
              <span className="mx-4 text-xl font-semibold">{quantity}</span>
              <Button variant="outline" size="icon" onClick={() => setQuantity(quantity + 1)}>
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <DialogFooter>
            <Button
              onClick={() => {
                if (selectedProduct) {
                  handleAddToCart(selectedProduct, quantity)
                }
              }}
            >
              Agregar al Carrito
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  )
}

