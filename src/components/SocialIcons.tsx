import { siFacebook, siInstagram, siThreads, siTiktok, siWhatsapp, siYoutube } from 'simple-icons'
import { contact } from '../content'

// LinkedIn is not in simple-icons, so its glyph is drawn here
const linkedinPath =
  'M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z'

export function BrandIcon({ path, className = 'size-5' }: { path: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d={path} />
    </svg>
  )
}

export const WhatsAppIcon = ({ className }: { className?: string }) => (
  <BrandIcon path={siWhatsapp.path} className={className} />
)

const socials = [
  { key: 'instagram', label: 'Instagram', path: siInstagram.path },
  { key: 'tiktok', label: 'TikTok', path: siTiktok.path },
  { key: 'threads', label: 'Threads', path: siThreads.path },
  { key: 'linkedin', label: 'LinkedIn', path: linkedinPath },
  { key: 'facebook', label: 'Facebook', path: siFacebook.path },
  { key: 'youtube', label: 'YouTube', path: siYoutube.path },
] as const

export function SocialIcons({ className = '' }: { className?: string }) {
  return (
    <ul className={`flex flex-wrap gap-2 sm:gap-2.5 ${className}`}>
      {socials.map((s) => (
        <li key={s.key}>
          <a
            href={contact.socials[s.key]}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`WDED on ${s.label}`}
            className="grid size-10 place-items-center sm:size-11 rounded-full border border-white/10 bg-white/5 text-muted transition hover:-translate-y-0.5 hover:border-cyan/50 hover:text-cyan"
          >
            <BrandIcon path={s.path} className="size-[18px]" />
          </a>
        </li>
      ))}
    </ul>
  )
}
