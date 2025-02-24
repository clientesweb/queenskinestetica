'use client'

import { useState, useEffect } from 'react'
import { Header } from "../app/components/header"
import { Hero } from "../app/components/hero"
import { Services } from "../app/components/services"
import { Store } from "../app/components/store"
import { Footer } from "../app/components/footer"
import { CartButton } from "../app/components/cart-button"
import { WhatsAppButton } from "../app/components/whatsapp-button"
import { Preloader } from "../app/components/preloader"
import { AdBanner } from "../app/components/ad-banner"
import { InstagramReels } from "../app/components/instagram-reels"
import { FAQ } from "../app/components/faq"
import type { CartItem } from "../app/types/cart"

export default function Home() {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  useEffect(() => {
    const storedItems = localStorage.getItem('cartItems')
    if (storedItems) {
      setCartItems(JSON.parse(storedItems))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
  }, [cartItems])

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

  return (
    <>
      <Preloader />
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
    </>
  )
}
