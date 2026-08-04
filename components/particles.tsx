'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ParticlesProps {
  count?: number
  className?: string
  color?: string
}

interface Particle {
  id: number
  left: number
  size: number
  delay: number
  duration: number
  drift: number
}

export function Particles({
  count = 26,
  className,
  color = 'var(--primary)',
}: ParticlesProps) {
  // Generate only on the client to avoid SSR hydration mismatches.
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    setParticles(
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: Math.random() * 3 + 1.5,
        delay: Math.random() * 6,
        duration: Math.random() * 8 + 8,
        drift: (Math.random() - 0.5) * 60,
      })),
    )
  }, [count])

  return (
    <div
      className={cn(
        'pointer-events-none absolute inset-0 overflow-hidden',
        className,
      )}
      aria-hidden="true"
    >
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.left}%`,
            bottom: -10,
            width: p.size,
            height: p.size,
            backgroundColor: color,
            boxShadow: `0 0 ${p.size * 4}px ${color}`,
          }}
          initial={{ y: 0, opacity: 0 }}
          animate={{
            y: [0, -600],
            x: [0, p.drift],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
