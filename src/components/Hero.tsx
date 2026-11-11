import { m, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion'
import { ArrowDown, ArrowRight } from 'lucide-react'
import { useRef, type PointerEvent } from 'react'
import { brand, hero, whatsappMessages } from '../content'
import { useFinePointer, useParallaxStrength, useReducedMotion } from '../lib/motion'
import { waLink } from '../lib/whatsapp'
import { DeviceMockup } from './DeviceMockup'
import { DotWave } from './DotWave'
import { Plexus } from './Plexus'
import { WhatsAppIcon } from './SocialIcons'

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const k = useParallaxStrength()
  const reduced = useReducedMotion()
  const finePointer = useFinePointer()

  // Layered parallax: wave slowest, mockup medium, headline fastest
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const waveY = useTransform(scrollYProgress, [0, 1], [0, 260 * k])
  const mockupY = useTransform(scrollYProgress, [0, 1], [0, 90 * k])
  const textY = useTransform(scrollYProgress, [0, 1], [0, -110 * k])
  const textOpacity = useTransform(scrollYProgress, [0, 0.8], [1, k ? 0.15 : 1])

  // Mouse tilt (desktop only)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const spring = { stiffness: 120, damping: 18, mass: 0.6 }
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), spring)
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), spring)
  const tilt = finePointer && !reduced

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!tilt) return
    const r = e.currentTarget.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width - 0.5)
    my.set((e.clientY - r.top) / r.height - 0.5)
  }
  const onLeave = () => {
    mx.set(0)
    my.set(0)
  }

  return (
    <section
      ref={ref}
      id="top"
      className="relative isolate overflow-hidden bg-[radial-gradient(ellipse_80%_60%_at_70%_20%,#0B2E66_0%,#041A3D_55%,#020B1F_100%)] pt-28 pb-40 sm:pt-32 lg:min-h-[100svh] lg:pt-36 lg:pb-48"
    >
      <Plexus seed={7} className="-top-10 -left-20 -z-10 size-[420px] opacity-60" fade="tl" />
      <Plexus seed={3} className="top-16 -right-24 -z-10 hidden size-[380px] opacity-40 md:block" fade="tr" />

      {/* Layer 1: dot wave (slowest) */}
      <m.div style={{ y: waveY }} className="absolute inset-x-0 bottom-0 -z-10 h-[240px] sm:h-[300px]">
        <DotWave />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-navy" />
      </m.div>

      <div className="container-x grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
        {/* Layer 3: headline (fastest) */}
        <m.div style={{ y: textY, opacity: textOpacity }} className="relative z-10 text-center lg:text-left">
          <p className="inline-flex max-w-full flex-wrap items-center justify-center gap-x-2 rounded-full border border-cyan/25 bg-cyan/8 px-4 py-1.5 text-[11px] font-medium tracking-wide text-cyan sm:text-xs">
            {hero.eyebrow}
          </p>
          <h1 className="mt-6 text-[2.6rem] leading-[1.05] font-bold tracking-tight text-ink xs:text-5xl sm:text-6xl xl:text-7xl">
            {hero.headline.split(' ').slice(0, -1).join(' ')}{' '}
            <span className="text-cyan">{hero.headline.split(' ').slice(-1)}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg lg:mx-0">{hero.subtext}</p>
          <div className="mt-9 flex flex-col items-stretch justify-center gap-3 xs:flex-row xs:items-center lg:justify-start">
            <a href={waLink(whatsappMessages.startProject)} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <WhatsAppIcon className="size-4" />
              {hero.primaryCta}
            </a>
            <a href="#services" className="btn btn-ghost">
              {hero.secondaryCta}
              <ArrowRight className="size-4" />
            </a>
          </div>
          <p className="mt-8 font-heading text-sm font-medium tracking-wide text-muted/90">{brand.tagline}</p>
        </m.div>

        {/* Layer 2: device mockup (medium) */}
        <m.div style={{ y: mockupY }} className="relative px-4 sm:px-10 lg:px-0">
          <div onPointerMove={onMove} onPointerLeave={onLeave} style={{ perspective: 1200 }} className="pb-[10%]">
            <m.div style={tilt ? { rotateX, rotateY, transformStyle: 'preserve-3d' } : undefined}>
              <DeviceMockup />
            </m.div>
          </div>
        </m.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to next section"
        className="absolute bottom-6 left-1/2 hidden size-11 -translate-x-1/2 place-items-center rounded-full border border-white/15 text-muted transition hover:text-ink lg:grid"
      >
        <ArrowDown className="size-4" style={{ animation: 'float-y 2.4s ease-in-out infinite' }} />
      </a>
    </section>
  )
}
