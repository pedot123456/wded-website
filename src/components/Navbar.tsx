import { AnimatePresence, m } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { brand, contactSection, nav } from '../content'
import { waLink } from '../lib/whatsapp'
import { WhatsAppIcon } from './SocialIcons'

export function Logo({ className = 'h-8 sm:h-9' }: { className?: string }) {
  return (
    <picture>
      <source srcSet="/logo-white.webp" type="image/webp" />
      <img src="/logo-white.png" alt={`${brand.name} · ${brand.fullName}`} width={334} height={80} className={`w-auto ${className}`} />
    </picture>
  )
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlight the link for the section currently in view
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const inNav = new Set(nav.map((n) => n.href))
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          const href = '#' + e.target.id
          if (e.isIntersecting) setActive(inNav.has(href) ? href : '')
        }
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    const onResize = () => window.innerWidth >= 1024 && setOpen(false)
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  const solid = scrolled || open

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
        open
          ? 'border-b border-white/8 bg-navy-deep'
          : solid
            ? 'border-b border-white/8 bg-navy-deep/85 backdrop-blur-lg'
            : 'border-b border-transparent'
      }`}
    >
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-navy-deep">
        Skip to content
      </a>
      <nav className="container-x flex h-16 items-center justify-between gap-4 sm:h-18" aria-label="Main">
        <a href="#top" aria-label={`${brand.name} home`} className="shrink-0" onClick={() => setOpen(false)}>
          <Logo />
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                aria-current={active === item.href ? 'true' : undefined}
                className={`flex flex-col items-center rounded-full px-4 pt-2 pb-1.5 text-sm font-medium transition hover:text-ink ${
                  active === item.href ? 'text-ink' : 'text-muted'
                }`}
              >
                {item.label}
                <span
                  className={`mt-1 block h-0.5 rounded-full bg-cyan transition-all duration-300 ${
                    active === item.href ? 'w-4 opacity-100' : 'w-0 opacity-0'
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn btn-primary hidden min-h-10 px-5 text-sm sm:inline-flex">
            <WhatsAppIcon className="size-4" />
            {contactSection.whatsappCta}
          </a>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-full border border-white/10 text-ink lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <m.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="border-t border-white/8 lg:hidden"
          >
            <ul className="container-x flex flex-col py-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex min-h-12 items-center border-b border-white/5 text-base font-medium text-ink"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="pt-4 pb-2">
                <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full">
                  <WhatsAppIcon className="size-4" />
                  {contactSection.whatsappCta}
                </a>
              </li>
            </ul>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  )
}
