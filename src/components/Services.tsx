import { m, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Bot, Check, CheckCircle2, Download, Globe, Smartphone, WifiOff, Zap } from 'lucide-react'
import { useRef } from 'react'
import { services, type ServiceIcon } from '../content'
import { useParallaxStrength } from '../lib/motion'
import { waLink } from '../lib/whatsapp'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

const icons: Record<ServiceIcon, typeof Globe> = { website: Globe, app: Smartphone, ai: Bot }

type Service = (typeof services.items)[number]

export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="relative bg-navy-deep py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading id="services-title" eyebrow={services.eyebrow} title={services.heading} intro={services.intro} />
        <div className="mt-16 flex flex-col gap-24 sm:mt-20 sm:gap-32">
          {services.items.map((s, i) => (
            <ServiceRow key={s.number} service={s} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceRow({ service: s, reverse }: { service: Service; reverse: boolean }) {
  const ref = useRef<HTMLDivElement>(null)
  const k = useParallaxStrength()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const numberY = useTransform(scrollYProgress, [0, 1], [120 * k, -120 * k])
  const Icon = icons[s.icon]

  return (
    <div ref={ref} className="relative grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
      {/* Large outlined number, moves at its own scroll speed */}
      <m.span
        aria-hidden="true"
        style={{ y: numberY }}
        className={`outline-number pointer-events-none absolute -top-16 -z-0 text-[8rem] sm:-top-24 sm:text-[12rem] lg:text-[16rem] ${
          reverse ? 'right-0 lg:right-auto lg:left-[48%]' : 'right-0 lg:right-[48%]'
        }`}
      >
        {s.number}
      </m.span>

      <div className={`relative ${reverse ? 'lg:order-2' : ''}`}>
        <Reveal>
          <span className="grid size-14 place-items-center rounded-2xl bg-primary/15 text-cyan ring-1 ring-cyan/20">
            <Icon className="size-7" />
          </span>
          <p className="mt-6 font-heading text-sm font-semibold tracking-widest text-cyan">{s.number}</p>
          <h3 className="mt-1 text-2xl font-bold text-ink sm:text-3xl lg:text-4xl">{s.title}</h3>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-muted sm:text-lg">{s.description}</p>
        </Reveal>
        <ul className="mt-6 space-y-3">
          {s.bullets.map((b, j) => (
            <Reveal as="li" key={b} delay={80 * (j + 1)} className="flex items-center gap-3 text-ink">
              <span className="grid size-6 shrink-0 place-items-center rounded-full bg-cyan/15 text-cyan">
                <Check className="size-3.5" strokeWidth={3} />
              </span>
              {b}
            </Reveal>
          ))}
        </ul>
        <Reveal delay={320}>
          <a
            href={waLink(s.message)}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 inline-flex min-h-11 items-center gap-2 font-semibold text-cyan hover:text-ink"
          >
            {s.cta}
            <ArrowRight className="size-4 transition group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>

      <Reveal delay={120} className={`relative ${reverse ? 'lg:order-1' : ''}`}>
        <ServiceVisual icon={s.icon} />
      </Reveal>
    </div>
  )
}

/** Small CSS illustrations for each service (decorative) */
function ServiceVisual({ icon }: { icon: ServiceIcon }) {
  return (
    <div aria-hidden="true" className="card relative overflow-hidden p-5 sm:p-8">
      <div className="absolute -top-20 -right-20 size-60 rounded-full bg-primary/20 blur-3xl" />
      {icon === 'website' && <WebsiteVisual />}
      {icon === 'app' && <AppVisual />}
      {icon === 'ai' && <AiVisual />}
    </div>
  )
}

function WebsiteVisual() {
  return (
    <div className="relative grid grid-cols-[1fr_auto] items-end gap-4">
      <div className="overflow-hidden rounded-xl border border-white/10 bg-navy-deep">
        <div className="flex gap-1.5 border-b border-white/8 px-3 py-2.5">
          <span className="size-2 rounded-full bg-white/20" />
          <span className="size-2 rounded-full bg-white/20" />
          <span className="size-2 rounded-full bg-white/20" />
        </div>
        <div className="space-y-2.5 p-4">
          <div className="h-3 w-2/3 rounded-full bg-ink/80" />
          <div className="h-2 w-full rounded-full bg-muted/30" />
          <div className="h-2 w-4/5 rounded-full bg-muted/30" />
          <div className="grid grid-cols-3 gap-2 pt-2">
            {[0, 1, 2].map((i) => (
              <div key={i} className="aspect-[4/3] rounded-lg bg-gradient-to-br from-primary/40 to-cyan/10" />
            ))}
          </div>
        </div>
      </div>
      <div className="w-20 overflow-hidden rounded-2xl border border-white/15 bg-navy-deep p-1.5 sm:w-24">
        <div className="space-y-1.5 rounded-xl bg-navy p-2">
          <div className="h-2 w-3/4 rounded-full bg-ink/80" />
          <div className="aspect-square rounded-md bg-gradient-to-br from-primary/40 to-cyan/10" />
          <div className="h-1.5 w-full rounded-full bg-muted/30" />
          <div className="h-3 w-full rounded-full bg-primary" />
        </div>
      </div>
      <div className="col-span-2 flex flex-wrap gap-2">
        <Chip icon={<Zap className="size-3.5" />} text="Loads fast" />
        <Chip icon={<Smartphone className="size-3.5" />} text="Mobile-first" />
        <Chip icon={<Globe className="size-3.5" />} text="Found on Google" />
      </div>
    </div>
  )
}

function AppVisual() {
  return (
    <div className="relative flex flex-col items-center gap-5 sm:flex-row sm:items-center sm:justify-center sm:gap-8">
      <div className="w-44 rounded-[26px] border border-white/15 bg-navy-deep p-2">
        <div className="rounded-[20px] bg-navy p-3">
          <div className="grid grid-cols-4 gap-2.5">
            {Array.from({ length: 8 }, (_, i) => (
              <div key={i} className={`aspect-square rounded-lg ${i === 5 ? 'bg-primary ring-2 ring-cyan/60' : 'bg-white/10'}`} />
            ))}
          </div>
          <div className="mt-4 rounded-xl border border-white/10 bg-card p-2.5">
            <p className="text-[11px] font-semibold text-ink">Add to Home Screen?</p>
            <p className="mt-0.5 text-[10px] text-muted">Install this app on your phone</p>
            <div className="mt-2 flex justify-end gap-1.5 text-[10px] font-semibold">
              <span className="rounded-full px-2 py-0.5 text-muted">Later</span>
              <span className="rounded-full bg-primary px-2.5 py-0.5 text-navy-deep">Install</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-2 sm:flex-col">
        <Chip icon={<Download className="size-3.5" />} text="No app store" />
        <Chip icon={<Smartphone className="size-3.5" />} text="Android & iPhone" />
        <Chip icon={<WifiOff className="size-3.5" />} text="Works offline" />
      </div>
    </div>
  )
}

function AiVisual() {
  return (
    <div className="relative space-y-3 text-sm">
      <div className="ml-auto w-fit max-w-[80%] rounded-2xl rounded-br-md bg-primary px-4 py-2.5 text-navy-deep">
        What time do you open on Sunday?
      </div>
      <div className="flex max-w-[88%] gap-2.5">
        <span className="grid size-8 shrink-0 place-items-center rounded-full bg-cyan/15 text-cyan">
          <Bot className="size-4" />
        </span>
        <div className="rounded-2xl rounded-bl-md bg-navy-deep px-4 py-2.5 text-ink">
          We're open 10am to 6pm on Sundays. Would you like me to book a slot for you?
        </div>
      </div>
      <div className="rounded-xl border border-white/10 bg-navy-deep/70 p-3.5">
        <p className="text-xs font-semibold tracking-wide text-muted uppercase">Automations today</p>
        <ul className="mt-2 space-y-1.5 text-ink">
          {['New lead saved to sheet', 'Auto-reply sent', 'Weekly report emailed'].map((t) => (
            <li key={t} className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-[#28C840]" />
              {t}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function Chip({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-ink">
      <span className="text-cyan">{icon}</span>
      {text}
    </span>
  )
}
