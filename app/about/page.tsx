import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { AboutSection } from '@/components/home/about-section'
import { CreativeProcess } from '@/components/home/creative-process'
import { Collaboration } from '@/components/home/collaboration'

export const metadata: Metadata = {
  title: 'About — Lira Studio',
  description: 'Behind the worlds of Lira Studio — a Minecraft animation creator focused on storytelling.',
}

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden">
      <PageHero
        eyebrow="About"
        title="Behind The Worlds"
        description="A Minecraft animation creator focused on storytelling, cinematic scenes and unforgettable worlds created with Mine-imator."
      />
      <AboutSection />
      <CreativeProcess />
      <Collaboration />
    </main>
  )
}
