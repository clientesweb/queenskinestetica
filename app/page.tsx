'use client'

import dynamic from 'next/dynamic'
import { useState, useEffect } from 'react'
import { TopBanner } from "@/app/components/top-banner"
import { Header } from "@/app/components/header"
import { Hero } from "@/app/components/hero"
import { Services } from "@/app/components/services"
import { Store } from "@/app/components/store"
import { Footer } from "@/app/components/footer"
import { CartButton } from "@/app/components/cart-button"
import { WhatsAppButton } from "@/app/components/whatsapp-button"
import { AdBanner } from "@/app/components/ad-banner"
import { FAQ } from "@/app/components/faq"
import type { CartItem } from "@/types/cart"

// Carga dinámica del Preloader para evitar problemas de hidratación
const Preloader = dynamic(() => import('@/app/components/preloader').then(mod => mod.Preloader), {
  ssr: false
})

// Carga dinámica de InstagramReels para evitar problemas de hidratación
const InstagramReels = dynamic(() => import('@/app/components/instagram-reels').then(mod => mod.InstagramReels), {
  ssr: false
})

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  useEffect(() => {
    setMounted(true)
    try {
      const storedItems = localStorage.getItem('cartItems')
      if (storedItems) {
        setCartItems(JSON.parse(storedItems))
      }
    } catch (error) {
      console.error('Error loading cart items:', error)
    }
  }, [])

  useEffect(() => {
    if (mounted) {
      try {
        localStorage.setItem('cartItems', JSON.stringify(cartItems))
      } catch (error) {
        console.error('Error saving cart items:', error)
      }
    }
  }, [cartItems, mounted])

  const addToCart = (item: CartItem) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(i => i.id === item.id)
      if (existingItem) {
        return prevItems.map(i => 
          i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
        )
      }
      return [...prevItems, item]
    })
  }

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen">
      <Preloader />
      <TopBanner />
      <Header />
      <main>
        <Hero />
        <Services />
        <AdBanner />
        <Store addToCart={addToCart} />
        <InstagramReels />
        <FAQ />
      </main>
      <Footer />
      <CartButton items={cartItems} setItems={setCartItems} />
      <WhatsAppButton />
    </div>
  )
}
