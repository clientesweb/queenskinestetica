'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export function Preloader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!loading) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-secondary">
      <div className="logo-reveal w-64 h-64 relative">
        <Image
          src="/logo.png"
          alt="Nadiva's Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  )
}

