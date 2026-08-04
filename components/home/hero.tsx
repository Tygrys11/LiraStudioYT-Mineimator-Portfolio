'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Play, TvMinimalPlay as Youtube, Sparkles } from 'lucide-react'
import { GlowButton } from '@/components/glow-button'

interface Petal {
  id: number
  left: number
  delay: number
  duration: number
  drift: number
  size: number
  rotate: number
}

export function Hero() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 50, damping: 22 })
  const springY = useSpring(mouseY, { stiffness: 50, damping: 22 })

  // Very subtle parallax — tree drifts a touch more than the text for depth.
  const contentX = useTransform(springX, [-0.5, 0.5], [-6, 6])
  const contentY = useTransform(springY, [-0.5, 0.5], [-4, 4])

  // Falling petals/leaves — generated on the client to avoid hydration drift.
  const [petals, setPetals] = useState<Petal[]>([])
  useEffect(() => {
    setPetals(
      Array.from({ length: 18 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 10,
        duration: Math.random() * 8 + 10,
        drift: (Math.random() - 0.5) * 120,
        size: Math.random() * 6 + 4,
        rotate: Math.random() * 360,
      })),
    )
  }, [])
  
  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24"
    >
      {/* Dark gradient base */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(139,92,246,0.10),transparent_60%)]" />

      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '54px 54px',
        }}
      />

      {/* Fine noise */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Falling petals */}
      <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
        {petals.map((p) => (
          <motion.span
            key={p.id}
            initial={{ y: -40, x: 0, opacity: 0, rotate: p.rotate }}
            animate={{
              y: ['-5%', '105%'],
              x: [0, p.drift],
              opacity: [0, 0.9, 0.9, 0],
              rotate: [p.rotate, p.rotate + 180],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-0 rounded-[2px] bg-blossom shadow-[0_0_8px_var(--primary)]"
            style={{ left: `${p.left}%`, width: p.size, height: p.size }}
          />
        ))}
      </div>

      {/* Center content */}
      <motion.div
        style={{ x: contentX, y: contentY }}
        className="relative z-10 flex flex-col items-center px-6 text-center"
      >
        {/* Profile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="relative"
        >
          <div className="absolute inset-0 -z-10 scale-150 rounded-full bg-primary/30 blur-3xl" />
          <div className="animate-float-slow relative h-42 w-42 overflow-hidden rounded-full border border-white/20 shadow-[0_0_60px_-10px_var(--primary)] ring-1 ring-primary/40 md:h-36 md:w-36">
            <div className="glass absolute inset-0 rounded-full" />
            <Image
              src="/creator-profile.png"
              alt="Lira Studio creator portrait"
              fill
              priority
              className="rounded-full object-cover p-1"
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 text-balance font-serif text-6xl font-semibold tracking-tight text-glow-primary [text-shadow:0_2px_40px_rgba(11,12,24,0.9)] md:text-8xl"
        >
          Lira Studio
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-4 max-w-xl text-balance text-lg text-foreground/90 [text-shadow:0_1px_20px_rgba(11,12,24,0.9)] md:text-2xl"
        >
          Creating cinematic Minecraft stories through animation.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-3 text-sm uppercase tracking-[0.2em] text-muted-foreground"
        >
          Mine-imator creator · YouTuber · Building worlds, characters and stories
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
        >
          <GlowButton href="/portfolio" variant="primary" icon={<Sparkles className="h-4 w-4" />}>
            Explore Animations
          </GlowButton>
          <GlowButton href="https://www.youtube.com/@Lira_StudioYT" target='_blank' variant="ember" icon={<Youtube className="h-4 w-4" />}>
            Watch YouTube
          </GlowButton>
          <GlowButton href="/contact" variant="blossom" icon={<Play className="h-4 w-4" />}>
            Create Together
          </GlowButton>
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-40 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
