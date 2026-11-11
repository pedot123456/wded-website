import { waLink } from '../lib/whatsapp'
import { WhatsAppIcon } from './SocialIcons'

export function FloatingWhatsApp() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with WDED on WhatsApp"
      className="fixed right-[max(1rem,env(safe-area-inset-right))] bottom-[max(1rem,env(safe-area-inset-bottom))] z-40 grid size-14 place-items-center rounded-full bg-whatsapp text-white shadow-[0_10px_30px_-6px_rgb(37_211_102/0.6)] transition hover:scale-105 sm:right-6 sm:bottom-6"
    >
      <span aria-hidden="true" className="absolute inset-0 rounded-full bg-whatsapp" style={{ animation: 'pulse-ring 2.4s ease-out 3' }} />
      <WhatsAppIcon className="relative size-7" />
    </a>
  )
}
