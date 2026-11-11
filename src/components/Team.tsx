import { team } from '../content'
import { Plexus } from './Plexus'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Team() {
  return (
    <section id="team" aria-labelledby="team-title" className="relative overflow-hidden bg-navy-deep py-24 sm:py-32">
      <Plexus seed={31} className="-top-16 -right-20 size-[380px] opacity-50" fade="tr" />
      <div className="container-x">
        <SectionHeading id="team-title" eyebrow={team.eyebrow} title={team.heading} intro={team.intro} center />
        <ul className="mt-14 flex flex-wrap justify-center gap-5 sm:mt-16">
          {team.members.map((m, i) => (
            <Reveal
              as="li"
              key={m.name}
              delay={70 * i}
              className="card flex w-full flex-col items-center p-6 text-center xs:w-[calc(50%-0.625rem)] lg:w-[calc(20%-1rem)] lg:min-w-[200px]"
            >
              {m.photo ? (
                <img src={m.photo} alt={m.name} width={96} height={96} loading="lazy" className="size-24 rounded-full object-cover ring-2 ring-cyan/30" />
              ) : (
                <span
                  aria-hidden="true"
                  className="grid size-24 place-items-center rounded-full bg-gradient-to-br from-primary to-[#1550B8] font-heading text-2xl font-semibold text-ink ring-4 ring-cyan/15"
                >
                  {m.initials}
                </span>
              )}
              <h3 className="mt-5 text-base leading-snug font-semibold text-ink">{m.name}</h3>
              <p className="mt-1 text-sm text-cyan">{m.role}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
