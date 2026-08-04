import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { FeaturedAnimations } from '@/components/home/featured-animations'
import { Collaboration } from '@/components/home/collaboration'

export const metadata: Metadata = {
  title: 'Portfolio — Lira Studio',
  description: 'A collection of cinematic Minecraft stories created with Mine-imator.',
}

export default function PortfolioPage() {
  return (
    <main className="relative overflow-hidden">
      <PageHero
        eyebrow="Portfolio"
        title="Worlds & Stories"
        description="Explore cinematic Minecraft animations crafted with Mine-imator — from epic adventures to quiet, dreamlike tales."
      />
      <FeaturedAnimations />
      <Collaboration />
    </main>
  )
}
