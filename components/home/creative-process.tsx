'use client'

import { motion } from 'framer-motion'
import { Lightbulb, Film, Scissors, Sparkles } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const STEPS = [
  {
    number: '01',
    title: 'Idea',
    description: 'Every world begins as a spark — a story, a character, a feeling to capture.',
    icon: Lightbulb,
  },
  {
    number: '02',
    title: 'Animation',
    description: 'Scenes are brought to life frame by frame inside Mine-imator.',
    icon: Film,
  },
  {
    number: '03',
    title: 'Editing',
    description: 'Lighting, sound and pacing are crafted into a cinematic cut.',
    icon: Scissors,
  },
  {
    number: '04',
    title: 'Final Story',
    description: 'The finished world is released for the world to experience.',
    icon: Sparkles,
  },
]

export function CreativeProcess() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="The Craft"
          title="Creative Process"
          description="From the first spark of an idea to the final cinematic release."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="group relative overflow-hidden rounded-3xl border border-border glass p-7"
              >
                <span className="font-serif text-5xl font-semibold text-primary/25 transition-colors duration-300 group-hover:text-primary/50">
                  {step.number}
                </span>
                <motion.span
                  whileHover={{ rotate: 8, scale: 1.1 }}
                  className="mt-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary ring-1 ring-primary/30"
                >
                  <Icon className="h-5 w-5" />
                </motion.span>
                <h3 className="mt-5 font-serif text-2xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
                <div className="pointer-events-none absolute -bottom-10 -right-10 h-28 w-28 rounded-full bg-primary/10 blur-2xl transition-opacity duration-300 group-hover:opacity-100 opacity-0" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
