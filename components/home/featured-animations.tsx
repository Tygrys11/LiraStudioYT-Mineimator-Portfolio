"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Clapperboard, Clock3, Eye } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { PROJECTS } from "@/lib/site";

export function FeaturedAnimations() {
  return (
    <section id="work" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Portfolio"
          title="Featured Animations"
          description="A collection of cinematic Minecraft stories created with Mine-imator."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-3xl border border-border glass shadow-[0_20px_60px_-30px_rgba(0,0,0,0.9)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.title} — cinematic Minecraft animation still`}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-xs font-medium uppercase tracking-wider text-foreground backdrop-blur-sm">
                  {project.category}
                </span>
              </div>

              <div className="p-6 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <Eye className="h-3.5 w-3.5" />
                  <span>{project.views}</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <Clock3 className="h-3.5 w-3.5" />
                  <span>{project.duration}</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <Clapperboard className="h-3.5 w-3.5" />
                  <span>{project.type}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-serif text-2xl font-semibold">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <Link
                  href={project.href}
                  target="_blank"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-foreground"
                >
                  Watch Animation
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
