import { HandCoins, MessagesSquare, Route, Telescope } from 'lucide-react'
import { about } from '../content'
import { Plexus } from './Plexus'
import { Reveal } from './Reveal'

const pointIcons = [MessagesSquare, HandCoins, Route]

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="relative overflow-hidden py-24 sm:py-32">
      <Plexus seed={11} className="-right-16 -bottom-24 size-[380px] opacity-50" fade="br" />
      <div className="container-x grid gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <Reveal>
            <p className="eyebrow">{about.eyebrow}</p>
            <h2 id="about-title" className="section-title">
              {about.heading}
            </h2>
          </Reveal>
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={80 * (i + 1)}>
              <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">{p}</p>
            </Reveal>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          {about.points.map((pt, i) => {
            const Icon = pointIcons[i % pointIcons.length]
            return (
              <Reveal key={pt.title} delay={90 * i} className="card flex items-start gap-4 p-5 sm:p-6">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/15 text-cyan">
                  <Icon className="size-5" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-ink">{pt.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted sm:text-base">{pt.text}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>

      <div className="container-x mt-16 sm:mt-20">
        <Reveal className="glow relative overflow-hidden rounded-3xl border border-cyan/20 bg-gradient-to-br from-card/70 to-navy-deep/60 p-7 sm:p-10 lg:p-12">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-8">
            <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-cyan/15 text-cyan">
              <Telescope className="size-7" />
            </span>
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] text-cyan uppercase">{about.visionLabel}</p>
              <p className="mt-2 font-heading text-xl leading-snug font-semibold text-ink sm:text-2xl lg:text-[1.75rem]">
                “{about.vision}”
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
