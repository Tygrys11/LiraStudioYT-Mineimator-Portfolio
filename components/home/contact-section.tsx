"use client";

import { motion } from "framer-motion";
import {
  Mail,
  TvMinimalPlay as Youtube,
  ArrowUpRight,
  Send,
} from "lucide-react";
import { FaInstagram } from "react-icons/fa";

import { SectionHeading } from "@/components/section-heading";
import { SOCIAL } from "@/lib/site";

const CHANNELS = [
  {
    label: "Email",
    value: SOCIAL.email,
    href: `mailto:${SOCIAL.email}`,
    icon: Mail,
  },
  {
    label: "YouTube",
    value: "Lira Studio",
    href: SOCIAL.youtube,
    icon: Youtube,
  },
  {
    label: "Instagram",
    value: "Lira Studio Speedrenders",
    href: SOCIAL.instagram,
    icon: FaInstagram,
  },
  // {
  //   label: 'Discord',
  //   value: 'Join the community',
  //   href: SOCIAL.discord,
  //   icon: MessageCircle,
  // },
];

export function ContactSection() {
  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Create Something Together"
          description="Have an idea for a Minecraft project, animation, or creative collaboration? Feel free to reach out and let's discuss it."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-[380px_1fr]">
          {/* LEFT */}
          <div className="space-y-4">
            {CHANNELS.map((channel, i) => {
              const Icon = channel.icon;

              return (
                <motion.a
                  key={channel.label}
                  href={channel.href}
                  target={
                    channel.href.startsWith("http") ? "_blank" : undefined
                  }
                  rel={
                    channel.href.startsWith("http") ? "noreferrer" : undefined
                  }
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group flex items-center justify-between rounded-2xl border border-border glass p-6 transition-all hover:border-primary/50 hover:-translate-y-1"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/30">
                      <Icon className="h-5 w-5" />
                    </span>

                    <div>
                      <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                        {channel.label}
                      </p>

                      <p className="mt-1 font-medium">{channel.value}</p>
                    </div>
                  </div>

                  <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
                </motion.a>
              );
            })}
          </div>

          {/* RIGHT */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl border border-border glass p-8"
          >
            <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />

            <div className="relative">
              <span className="text-xs uppercase tracking-[0.25em] text-primary">
                Collaboration
              </span>

              <h3 className="mt-3 text-3xl font-bold">Got an idea?</h3>

              <p className="mt-3 max-w-xl text-muted-foreground">
                I'm always open to creative collaborations, Minecraft projects,
                and meeting people who enjoy creating things. Whether you have
                an idea, a concept, or just want to build something together,
                feel free to reach out.
              </p>

              <div className="mt-10 grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm text-muted-foreground">
                    Name
                  </label>

                  <input
                    type="text"
                    placeholder="Your Name"
                    className="h-12 w-full rounded-xl border border-border bg-background/40 px-4 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-muted-foreground">
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="h-12 w-full rounded-xl border border-border bg-background/40 px-4 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label className="mb-2 block text-sm text-muted-foreground">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="What would you like to work on?"
                  className="h-12 w-full rounded-xl border border-border bg-background/40 px-4 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div className="mt-5">
                <label className="mb-2 block text-sm text-muted-foreground">
                  Message
                </label>

                <textarea
                  rows={6}
                  placeholder="Tell me about your project, idea, or collaboration..."
                  className="w-full resize-none rounded-xl border border-border bg-background/40 p-4 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-muted-foreground">
                  Usually replying within a few days
                </p>

                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3 font-medium text-primary-foreground transition-all hover:shadow-[0_0_40px_rgba(var(--primary),0.35)]"
                >
                  <Send className="h-4 w-4 " />
                  Send Message
                </motion.button>
              </div>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
