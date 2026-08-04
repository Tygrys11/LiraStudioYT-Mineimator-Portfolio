'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Play, TvMinimalPlay as Youtube } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { GlowButton } from '@/components/glow-button'
import { VIDEOS, SOCIAL } from '@/lib/site'

export function YoutubeSection() {
  return (
    <section id="youtube" className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-ember/10 blur-[120px]" />
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <SectionHeading
            align="left"
            eyebrow="YouTube"
            title="Watch My Stories"
            description="Bringing Minecraft characters to life through animation. Subscribe to follow every cinematic journey as new worlds come alive."
            className="max-w-none"
          />
          <div className="flex flex-col items-start gap-4 md:items-end">
            <div className="glass flex items-center gap-4 rounded-2xl border border-border px-6 py-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-ember/15 text-ember ring-1 ring-ember/40">
                <Youtube className="h-6 w-6" />
              </span>
              <div>
                <p className="font-serif text-2xl font-semibold">1K+</p>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  Subscribers &amp; growing
                </p>
              </div>
            </div>
            <GlowButton href={SOCIAL.youtube} variant="ember" icon={<Youtube className="h-4 w-4" />}>
              Visit YouTube Channel
            </GlowButton>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {VIDEOS.map((video, i) => (
            <motion.a
              key={video.title}
              href={video.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group overflow-hidden rounded-2xl border border-border glass"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={video.image}
                  alt={`${video.title} video thumbnail`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/90 text-primary-foreground shadow-[0_0_30px_-4px_var(--primary)]">
                    <Play className="h-6 w-6 translate-x-0.5" fill="currentColor" />
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="line-clamp-1 font-medium">{video.title}</h3>
                <p className="mt-1.5 text-xs text-muted-foreground">
                  {video.views} · {video.date}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
