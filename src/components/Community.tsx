import { m, useScroll, useTransform } from 'framer-motion'
import { HeartHandshake } from 'lucide-react'
import { useRef } from 'react'
import { community, whatsappMessages } from '../content'
import { useParallaxStrength } from '../lib/motion'
import { waLink } from '../lib/whatsapp'
import { Plexus } from './Plexus'
import { Reveal } from './Reveal'
import { WhatsAppIcon } from './SocialIcons'

export function Community() {
  const ref = useRef<HTMLElement>(null)
  const k = useParallaxStrength()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const bandY = useTransform(scrollYProgress, [0, 1], [-140 * k, 140 * k])

  return (
    <section id="community" ref={ref} aria-labelledby="community-title" className="relative isolate overflow-hidden py-28 sm:py-36">
      {/* Parallax band */}
      <m.div aria-hidden="true" style={{ y: bandY }} className="absolute inset-x-0 -top-[160px] -bottom-[160px] -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,#123B7A_0%,#041A3D_70%)]" />
        <Plexus seed={5} points={40} className="top-[12%] left-[-6%] size-[520px] opacity-60" fade="tl" />
        <Plexus seed={9} points={40} className="right-[-6%] bottom-[12%] size-[520px] opacity-60" fade="br" />
        <div className="absolute inset-0 bg-[repeating-linear-gradient(115deg,transparent_0_60px,rgb(56_182_255/0.035)_60px_61px)]" />
      </m.div>
      <div aria-hidden="true" className="absolute inset-x-0 top-0 -z-10 h-24 bg-gradient-to-b from-navy-deep to-transparent" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-navy to-transparent" />

      <div className="container-x">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="mx-auto grid size-16 place-items-center rounded-2xl bg-cyan/15 text-cyan ring-1 ring-cyan/25">
            <HeartHandshake className="size-8" />
          </span>
          <p className="eyebrow mt-8">{community.eyebrow}</p>
          <h2 id="community-title" className="section-title">
            {community.heading}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{community.text}</p>
          <a href={waLink(whatsappMessages.community)} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-9">
            <WhatsAppIcon className="size-4" />
            {community.cta}
          </a>
        </Reveal>
      </div>
    </section>
  )
}
