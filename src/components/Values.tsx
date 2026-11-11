import { values } from '../content'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Values() {
  return (
    <section id="values" aria-labelledby="values-title" className="relative py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading id="values-title" eyebrow={values.eyebrow} title={values.heading} intro={values.intro} center />
        <ul className="mt-14 grid gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-5">
          {values.items.map((v, i) => (
            <Reveal
              as="li"
              key={v.title}
              delay={70 * i}
              className={`card group relative overflow-hidden p-6 transition hover:-translate-y-1 hover:border-cyan/30 ${
                i === values.items.length - 1 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <span aria-hidden="true" className="font-heading text-5xl font-extrabold text-cyan transition group-hover:text-primary">
                {v.letter}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-ink">{v.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{v.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
