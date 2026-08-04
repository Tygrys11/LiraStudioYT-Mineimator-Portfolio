'use client'

import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { GlowButton } from '@/components/glow-button'
import { Particles } from '@/components/particles'

export function Collaboration() {
  return (
    <section className="relative px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] border border-border glass px-6 py-20 text-center"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-primary/25 blur-[120px]" />
          <div className="absolute bottom-0 left-1/4 h-[280px] w-[280px] rounded-full bg-ember/15 blur-[110px]" />
          <div className="absolute bottom-0 right-1/4 h-[280px] w-[280px] rounded-full bg-blossom/15 blur-[110px]" />
        </div>
        <Particles count={24} />

        <div className="relative">
          <h2 className="mx-auto max-w-3xl text-balance font-serif text-4xl font-semibold tracking-tight md:text-6xl">
            Want To Create A World Together?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-lg text-muted-foreground">
            Let&apos;s build something unforgettable.
          </p>
          <div className="mt-10 flex justify-center">
            <GlowButton
              href="/contact"
              variant="primary"
              className="px-8 py-4 text-base"
              icon={<Sparkles className="h-5 w-5" />}
            >
              Start A Project
            </GlowButton>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
