import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { YoutubeSection } from '@/components/home/youtube-section'
import { Collaboration } from '@/components/home/collaboration'

export const metadata: Metadata = {
  title: 'YouTube — Lira Studio',
  description: 'Bringing Minecraft characters to life through animation. Watch every cinematic story.',
}

export default function YoutubePage() {
  return (
    <main className="relative overflow-hidden">
      <PageHero
        eyebrow="YouTube"
        title="Watch My Stories"
        description="Bringing Minecraft characters to life through animation. Subscribe and follow every cinematic journey."
      />
      <YoutubeSection />
      <Collaboration />
    </main>
  )
}
