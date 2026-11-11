import { Reveal } from './Reveal'

type Props = { eyebrow: string; title: string; intro?: string; center?: boolean; id?: string }

export function SectionHeading({ eyebrow, title, intro, center = false, id }: Props) {
  return (
    <Reveal className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id} className="section-title">
        {title}
      </h2>
      {intro && <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{intro}</p>}
    </Reveal>
  )
}
