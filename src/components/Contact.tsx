import { Mail, MapPin } from 'lucide-react'
import { brand, contact, contactSection, whatsappMessages } from '../content'
import { waLink } from '../lib/whatsapp'
import { Plexus } from './Plexus'
import { Reveal } from './Reveal'
import { SocialIcons, WhatsAppIcon } from './SocialIcons'

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="relative py-24 sm:py-32">
      <div className="container-x">
        <Reveal className="glow relative isolate overflow-hidden rounded-[2rem] border border-cyan/20 bg-[radial-gradient(ellipse_at_top,#123B7A_0%,#0A2550_45%,#041A3D_100%)] px-6 py-14 text-center sm:px-12 sm:py-20">
          <Plexus seed={41} className="-top-10 -left-10 -z-10 size-[320px] opacity-60" fade="tl" />
          <Plexus seed={43} className="-right-10 -bottom-10 -z-10 size-[320px] opacity-60" fade="br" />
          <p className="eyebrow">{contactSection.eyebrow}</p>
          <h2 id="contact-title" className="mt-4 text-4xl leading-tight font-bold text-ink sm:text-5xl lg:text-6xl">
            {contactSection.heading}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-muted sm:text-lg">{contactSection.text}</p>

          <a href={waLink(whatsappMessages.startProject)} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp mt-9 min-h-14 px-8 text-base">
            <WhatsAppIcon className="size-5" />
            {contactSection.whatsappCta}
          </a>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 text-ink sm:flex-row sm:gap-8">
            <a href={`mailto:${contact.email}`} className="inline-flex min-h-11 items-center gap-2 break-all hover:text-cyan">
              <Mail className="size-5 shrink-0 text-cyan" />
              {contact.email}
            </a>
            <span className="inline-flex items-center gap-2">
              <MapPin className="size-5 shrink-0 text-cyan" />
              {contact.location}
            </span>
          </div>

          <SocialIcons className="mt-8 justify-center" />
          <p className="mt-8 font-heading text-sm font-medium text-muted">{brand.tagline}</p>
        </Reveal>
      </div>
    </section>
  )
}
