'use client'

import { Dialog, DialogContent } from "@/app/components/ui/dialog"
import { Button } from "@/app/components/ui/button"
import { X, Plus, Minus } from 'lucide-react'
import { CartItem } from '@/types/cart'
import React from 'react'

interface CartSidebarProps {
  open: boolean;
  onClose: () => void;
  items: CartItem[];
  updateItems: (updateFn: (items: CartItem[]) => CartItem[]) => void;
}

export function CartSidebar({ open, onClose, items, updateItems }: CartSidebarProps) {
  const formatPrice = (price: number) => {
    return `$${price.toFixed(2)}`
  }

  const updateQuantity = (id: number, quantity: number) => {
    updateItems((currentItems: CartItem[]) => 
      currentItems
        .map(item => item.id === id ? { ...item, quantity: Math.max(0, quantity) } : item)
        .filter(item => item.quantity > 0)
    );
  };

  const removeFromCart = (id: number) => {
    updateItems((currentItems: CartItem[]) => 
      currentItems.filter(item => item.id !== id)
    );
  };

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const sendToWhatsApp = () => {
    const message = `Hola, me gustaría hacer un pedido:

${items.map(item => 
    `${item.name} x${item.quantity} - ${formatPrice(item.price * item.quantity)}`
  ).join('\n')}

Total: ${formatPrice(total)}`
  
    const whatsappUrl = `https://wa.me/5493546510458?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] h-[90vh] flex flex-col">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Carrito</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-6 w-6" />
          </Button>
        </div>
        <div className="flex-grow overflow-y-auto py-4">
          {items.length === 0 ? (
            <p className="text-center text-muted-foreground">Tu carrito está vacío</p>
          ) : (
            <div className="space-y-4">
              {items.map(item => (
                <div key={item.id} className="flex items-center gap-4 p-4 bg-muted rounded-lg">
                  <div className="flex-1">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">{formatPrice(item.price)}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button 
                      variant="outline" 
                      size="icon"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-8 text-center">{item.quantity.toString()}</span>
                    <Button 
                      variant="outline" 
                      size="icon"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="border-t pt-4">
          <div className="flex justify-between items-center mb-4">
            <span className="font-semibold">Total:</span>
            <span className="text-xl font-bold">{formatPrice(total)}</span>
          </div>
          <Button 
            className="w-full" 
            size="lg"
            onClick={sendToWhatsApp}
            disabled={items.length === 0}
          >
            Enviar pedido por WhatsApp
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

