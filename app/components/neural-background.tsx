"use client"

import { useEffect, useRef } from "react"

interface Point {
  x: number
  y: number
  vx: number
  vy: number
}

interface NeuralBackgroundProps {
  color?: string
  pointColor?: string
  lineColor?: string
  pointCount?: number
  connectionRadius?: number
}

export function NeuralBackground({
  color = "#F9D5C5",
  pointColor = "#F9D5C5",
  lineColor = "#F9D5C5",
  pointCount = 50,
  connectionRadius = 150,
}: NeuralBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const points = useRef<Point[]>([])
  const animationFrameId = useRef<number>()
  const mousePosition = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initPoints()
    }

    const handleMouseMove = (event: MouseEvent) => {
      mousePosition.current = {
        x: event.clientX,
        y: event.clientY,
      }
    }

    const initPoints = () => {
      points.current = Array.from({ length: pointCount }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      }))
    }

    const drawPoints = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Actualizar y dibujar puntos
      points.current.forEach((point, i) => {
        // Mover puntos
        point.x += point.vx
        point.y += point.vy

        // Rebotar en los bordes
        if (point.x < 0 || point.x > canvas.width) point.vx *= -1
        if (point.y < 0 || point.y > canvas.height) point.vy *= -1

        // Mantener puntos dentro del canvas
        point.x = Math.max(0, Math.min(canvas.width, point.x))
        point.y = Math.max(0, Math.min(canvas.height, point.y))

        // Dibujar punto
        ctx.beginPath()
        ctx.arc(point.x, point.y, 2, 0, Math.PI * 2)
        ctx.fillStyle = pointColor
        ctx.fill()

        // Conectar puntos cercanos
        points.current.forEach((otherPoint, j) => {
          if (i === j) return

          const dx = otherPoint.x - point.x
          const dy = otherPoint.y - point.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectionRadius) {
            ctx.beginPath()
            ctx.moveTo(point.x, point.y)
            ctx.lineTo(otherPoint.x, otherPoint.y)
            ctx.strokeStyle = lineColor
            ctx.globalAlpha = 1 - distance / connectionRadius
            ctx.lineWidth = 0.5
            ctx.stroke()
            ctx.globalAlpha = 1
          }
        })

        // Conectar con el cursor
        const dx = mousePosition.current.x - point.x
        const dy = mousePosition.current.y - point.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < connectionRadius * 1.5) {
          ctx.beginPath()
          ctx.moveTo(point.x, point.y)
          ctx.lineTo(mousePosition.current.x, mousePosition.current.y)
          ctx.strokeStyle = color
          ctx.globalAlpha = 1 - distance / (connectionRadius * 1.5)
          ctx.lineWidth = 1
          ctx.stroke()
          ctx.globalAlpha = 1
        }
      })

      animationFrameId.current = requestAnimationFrame(drawPoints)
    }

    window.addEventListener("resize", handleResize)
    window.addEventListener("mousemove", handleMouseMove)
    handleResize()
    drawPoints()

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }
    }
  }, [color, pointColor, lineColor, pointCount, connectionRadius])

  return (
    <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.6 }} />
  )
}

