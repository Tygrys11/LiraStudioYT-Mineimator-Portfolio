import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { ContactSection } from '@/components/home/contact-section'

export const metadata: Metadata = {
  title: 'Contact — Lira Studio',
  description: "Let's build something unforgettable together. Reach out for collaborations and commissions.",
}

export default function ContactPage() {
  return (
    <main className="relative overflow-hidden">
      <PageHero
        eyebrow="Create Together"
        title="Start A Project"
        description="Let's build something unforgettable. Reach out for collaborations, commissions, or to simply say hello."
      />
      <ContactSection />
    </main>
  )
}
