'use client'

import { motion } from 'framer-motion'
import { Mail, TvMinimalPlay as Youtube, MessageCircle, FolderOpen, ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { SOCIAL } from '@/lib/site'

const CHANNELS = [
  {
    label: 'Email',
    value: SOCIAL.email,
    href: `mailto:${SOCIAL.email}`,
    icon: Mail,
  },
  {
    label: 'YouTube',
    value: 'Lira Studio',
    href: SOCIAL.youtube,
    icon: Youtube,
  },
  {
    label: 'Discord',
    value: 'Join the community',
    href: SOCIAL.discord,
    icon: MessageCircle,
  },
  {
    label: 'Portfolio',
    value: 'View all animations',
    href: SOCIAL.portfolio,
    icon: FolderOpen,
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Connect"
          description="Reach out for collaborations, commissions, or to simply say hello."
        />

        <div className="mx-auto mt-16 grid max-w-3xl gap-4 sm:grid-cols-2">
          {CHANNELS.map((channel, i) => {
            const Icon = channel.icon
            return (
              <motion.a
                key={channel.label}
                href={channel.href}
                target={channel.href.startsWith('http') ? '_blank' : undefined}
                rel={channel.href.startsWith('http') ? 'noreferrer' : undefined}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group flex items-center justify-between rounded-2xl border border-border glass p-6 transition-all hover:border-primary/50"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/30">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                      {channel.label}
                    </p>
                    <p className="mt-0.5 font-medium">{channel.value}</p>
                  </div>
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
