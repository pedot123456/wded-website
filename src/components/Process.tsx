import { process } from '../content'
import { Plexus } from './Plexus'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Process() {
  return (
    <section id="process" aria-labelledby="process-title" className="relative overflow-hidden py-24 sm:py-32">
      <Plexus seed={21} className="-top-20 -left-24 size-[360px] opacity-50" fade="tl" />
      <div className="container-x">
        <SectionHeading id="process-title" eyebrow={process.eyebrow} title={process.heading} center />

        <ol className="relative mt-14 grid gap-0 sm:mt-20 lg:grid-cols-6 lg:gap-6">
          {/* connector: vertical on mobile, horizontal on desktop */}
          <span aria-hidden="true" className="absolute top-2 bottom-2 left-[21px] w-px bg-gradient-to-b from-cyan/60 via-primary/40 to-transparent lg:hidden" />
          <span aria-hidden="true" className="absolute top-[22px] right-[8%] left-[8%] hidden h-px bg-gradient-to-r from-cyan/60 via-primary/40 to-cyan/10 lg:block" />

          {process.steps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={70 * i} className="relative flex gap-5 pb-10 last:pb-0 lg:flex-col lg:items-center lg:gap-0 lg:pb-0 lg:text-center">
              <span className="relative z-10 grid size-11 shrink-0 place-items-center rounded-full border border-cyan/40 bg-navy font-heading text-sm font-semibold text-cyan shadow-[0_0_0_6px_var(--color-navy)]">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="pt-1.5 lg:mt-5 lg:pt-0">
                <h3 className="text-lg font-semibold text-ink">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
