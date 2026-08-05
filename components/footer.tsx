import Link from 'next/link'
import { Sparkles, TvMinimalPlay as Youtube, MessageCircle, Mail } from 'lucide-react'
import { NAV_LINKS, SOCIAL } from '@/lib/site'
import { FaInstagram } from 'react-icons/fa6'

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/15 ring-1 ring-primary/40">
                <Sparkles className="h-4 w-4 text-primary" />
              </span>
              <span className="font-serif text-lg font-semibold tracking-wide">
                Lira Studio
              </span>
            </Link>
            <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground">
              Creating Minecraft stories beyond imagination.
            </p>
          </div>

          <div className="flex gap-16">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Explore
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Connect
              </h3>
              <div className="mt-4 flex gap-3">
                <a
                  href={SOCIAL.youtube}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-primary/50 hover:text-foreground"
                >
                  <Youtube className="h-4 w-4" />
                </a>
                <a
                  href={SOCIAL.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Discord"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-primary/50 hover:text-foreground"
                >
                  <FaInstagram className="h-4 w-4" />
                </a>
                <a
                  href={`mailto:${SOCIAL.email}`}
                  aria-label="Email"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-primary/50 hover:text-foreground"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Lira Studio. All rights reserved.</p>
          <p>Crafted with Mine-imator &amp; imagination.</p>
        </div>
      </div>
    </footer>
  )
}
