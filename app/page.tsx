import { Hero } from "@/components/home/hero";
import { FeaturedAnimations } from "@/components/home/featured-animations";
import { YoutubeSection } from "@/components/home/youtube-section";
import { AboutSection } from "@/components/home/about-section";
import { CreativeProcess } from "@/components/home/creative-process";
import { Collaboration } from "@/components/home/collaboration";
import { ContactSection } from "@/components/home/contact-section";

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      
      <section id="home">
        <Hero />
      </section>

      <section id="portfolio">
        <FeaturedAnimations />
      </section>

      <section id="youtube" className="scroll-mt-28 min-h-screen">
        <YoutubeSection />
      </section>

      <section id="about">
        <AboutSection />
      </section>

      <CreativeProcess />
      <Collaboration />

      <section id="contact">
        <ContactSection />
      </section>
    </main>
  );
}
