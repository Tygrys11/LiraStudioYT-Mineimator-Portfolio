"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";
import { NAV_LINKS } from "@/lib/site";
import { GlowButton } from "@/components/glow-button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [activeSection, setActiveSection] = useState("#home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = NAV_LINKS.map((link) => ({
      id: link.href,
      element: document.querySelector(link.href) as HTMLElement | null,
    }));

    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      const scrollPosition = window.scrollY + 140;

      let current = "#home";

      for (const section of sections) {
        if (!section.element) continue;

        if (scrollPosition >= section.element.offsetTop) {
          current = section.id;
        }
      }

      setActiveSection(current);
    };

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          onScroll();
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={cn(
          "flex w-full max-w-6xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 md:px-6",
          scrolled
            ? "glass border border-border shadow-[0_8px_40px_-12px_rgba(0,0,0,0.7)]"
            : "border border-transparent"
        )}
      >
        <Link href="#home" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/15 ring-1 ring-primary/40">
            <Sparkles className="h-4 w-4 text-primary" />
          </span>
          <span className="font-serif text-lg font-semibold tracking-wide text-foreground">
            Lira Studio
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => {
            const active = activeSection === link.href;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    "group relative isolate rounded-full px-4 py-2 text-xs font-medium uppercase tracking-[0.15em] transition-colors",
                    active
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <span className="relative z-10">{link.label}</span>

                  {active && (
                    <motion.span
                      layoutId="active-nav"
                      transition={{
                        layout: {
                          duration: 0.35,
                          ease: [0.22, 1, 0.36, 1],
                        },
                      }}
                      className="absolute inset-0 -z-10 rounded-full bg-white/5 ring-1 ring-primary/30"
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <GlowButton
              href="#contact"
              variant="primary"
              icon={<Sparkles className="h-4 w-4" />}
            >
              Create Together
            </GlowButton>
          </div>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="glass-mobile absolute inset-x-4 top-20 rounded-3xl border border-border p-4 md:hidden"
          >
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "block rounded-2xl px-4 py-3 text-sm font-medium uppercase tracking-[0.12em] text-center",
                      activeSection === link.href
                        ? "bg-white/5 text-foreground"
                        : "text-muted-foreground"
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-3">
              <GlowButton href="#contact" variant="primary" className="w-full">
                Create Together
              </GlowButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
