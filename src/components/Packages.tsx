import { Check, Info } from 'lucide-react'
import { packages } from '../content'
import { waLink } from '../lib/whatsapp'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Packages() {
  return (
    <section id="packages" aria-labelledby="packages-title" className="relative bg-navy-deep py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading id="packages-title" eyebrow={packages.eyebrow} title={packages.heading} intro={packages.intro} center />

        <div className="mt-14 grid gap-5 sm:mt-16 md:grid-cols-2 xl:grid-cols-4">
          {packages.items.map((p, i) => (
            <Reveal
              key={p.name}
              delay={80 * i}
              className={`relative flex flex-col rounded-2xl border p-6 sm:p-7 ${
                p.highlight ? 'glow border-cyan/40 bg-card/70' : 'border-white/8 bg-card/40'
              }`}
            >
              {'badge' in p && p.badge && (
                <span className="absolute -top-3 left-6 rounded-full bg-cyan px-3 py-1 text-xs font-semibold text-navy-deep">{p.badge}</span>
              )}
              <h3 className="text-lg font-semibold text-ink">{p.name}</h3>
              <p className="mt-1 text-sm text-muted">{p.description}</p>
              <p className="mt-6 flex flex-wrap items-baseline gap-x-1.5">
                <span className="text-sm text-muted">from</span>
                <span className="font-heading text-4xl font-bold text-ink">{p.priceFrom}</span>
                {p.priceSuffix && <span className="text-sm text-muted">{p.priceSuffix}</span>}
              </p>
              <ul className="mt-6 flex-1 space-y-3 border-t border-white/8 pt-6">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-ink">
                    <Check className="mt-0.5 size-4 shrink-0 text-cyan" strokeWidth={2.5} />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={waLink(`Hi WDED! I'm interested in the ${p.name} package (from ${p.priceFrom}).`)}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn mt-8 w-full ${p.highlight ? 'btn-primary' : 'btn-ghost'}`}
                aria-label={`${packages.ctaLabel} for ${p.name}`}
              >
                {packages.ctaLabel}
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 flex items-start justify-center gap-2 text-center text-sm text-muted sm:items-center sm:text-base">
          <Info className="mt-0.5 size-4 shrink-0 text-cyan sm:mt-0" />
          <p>{packages.note}</p>
        </Reveal>
      </div>
    </section>
  )
}
