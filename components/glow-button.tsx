'use client'

import Link from 'next/link'
import { Target, motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

type Variant = 'primary' | 'ember' | 'blossom' | 'ghost'

const MotionLink = motion.create(Link)

const variants: Record<Variant, string> = {
  primary:
    'bg-primary text-primary-foreground shadow-[0_0_30px_-6px_var(--primary)] hover:shadow-[0_0_48px_-4px_var(--primary)]',
  ember:
    'bg-transparent text-foreground border border-ember/50 hover:border-ember hover:shadow-[0_0_40px_-8px_var(--ember)]',
  blossom:
    'bg-transparent text-foreground border border-blossom/50 hover:border-blossom hover:shadow-[0_0_40px_-8px_var(--blossom)]',
  ghost:
    'bg-white/5 text-foreground border border-border hover:bg-white/10 hover:border-primary/50',
}

interface GlowButtonProps {
  children: ReactNode
  href?: string
  target?: '_blank' | '_self' | '_parent' | '_top'
  variant?: Variant
  className?: string
  icon?: ReactNode
  onClick?: () => void
}

export function GlowButton({
  children,
  href,
  target,
  variant = 'primary',
  className,
  icon,
  onClick,
}: GlowButtonProps) {
  const classes = cn(
    'group relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-all duration-300',
    variants[variant],
    className,
  )

  const content = (
    <>
      {children}
      {icon && (
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          {icon}
        </span>
      )}
    </>
  )

  if (href) {
    return (
      <MotionLink
        href={href}
        target={target}
        className={classes}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
      >
        {content}
      </MotionLink>
    )
  }

  return (
    <motion.button
      type="button"
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
    >
      {content}
    </motion.button>
  )
}
