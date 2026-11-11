import { brand, contact, footer, nav } from '../content'
import { Logo } from './Navbar'
import { SocialIcons } from './SocialIcons'

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-navy-deep pt-14 pb-24 sm:pb-12">
      <div className="container-x grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <a href="#top" aria-label={`${brand.name} home`} className="inline-block">
            <Logo className="h-9" />
          </a>
          <p className="mt-4 font-heading text-lg font-semibold text-ink">{brand.tagline}</p>
          <p className="mt-1 text-sm text-muted">{brand.fullName}</p>
        </div>
        <nav aria-label="Footer">
          <h2 className="text-sm font-semibold tracking-wider text-ink uppercase">Quick links</h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-1 md:grid-cols-1">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="inline-flex min-h-9 items-center text-sm text-muted hover:text-cyan">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h2 className="text-sm font-semibold tracking-wider text-ink uppercase">Follow us</h2>
          <SocialIcons className="mt-4" />
          <a href={`mailto:${contact.email}`} className="mt-4 inline-flex min-h-9 items-center text-sm text-muted hover:text-cyan">
            {contact.email}
          </a>
        </div>
      </div>
      <div className="container-x mt-12 border-t border-white/8 pt-6 text-sm text-muted">
        <p>{footer.copyright}</p>
      </div>
    </footer>
  )
}
