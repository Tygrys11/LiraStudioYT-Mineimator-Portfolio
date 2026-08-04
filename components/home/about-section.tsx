'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/section-heading'

const STATS = [
  { value: '300K+', label: 'Views' },
  { value: '50+', label: 'Animations' },
  { value: '5', label: 'Years Creating' },
  { value: '∞', label: 'Blocks Imagined' },
]

export function AboutSection() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-14 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-primary/15 blur-3xl" />
            <div className="relative aspect-[3.5/5] overflow-hidden rounded-3xl border border-border">
              <Image
                src="/magic-forest.png"
                alt="Portrait of the Lira Studio creator"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
          </motion.div>

          <div>
            <SectionHeading
              align="left"
              eyebrow="Behind The Worlds"
              title="Where stories become worlds"
              description="Lira Studio is a Minecraft animation creator focused on storytelling, cinematic scenes and unforgettable worlds created with Mine-imator."
              className="max-w-none"
            />

            <div className="mt-10 grid grid-cols-2 gap-4">
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="glass rounded-2xl border border-border p-6"
                >
                  <p className="font-serif text-4xl font-semibold text-glow-primary">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.15em] text-muted-foreground">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
