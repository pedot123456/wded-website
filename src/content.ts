// ─────────────────────────────────────────────────────────────
//  WDED website content
//  Edit texts, prices, team and contact details here.
//  You don't need to touch any component to update the site.
// ─────────────────────────────────────────────────────────────

export const contact = {
  /** Country code + number, digits only. Example: "60123456789" */
  whatsappNumber: '60XXXXXXXXX',
  email: 'wded.my@gmail.com',
  location: 'Kuala Lumpur, Malaysia',
  socials: {
    instagram: 'https://www.instagram.com/wded.my',
    tiktok: 'https://www.tiktok.com/@wded.my',
    threads: 'https://www.threads.com/@wded.my',
    linkedin: 'https://www.linkedin.com/company/wded-my',
    facebook: 'https://www.facebook.com/wded.my',
    youtube: 'https://www.youtube.com/@wded.my',
  },
}

/** Pre-filled WhatsApp messages for each button */
export const whatsappMessages = {
  general: "Hi WDED! I'd like to know more about your services.",
  startProject: "Hi WDED! I'd like to start a project. Here's a bit about what I need:",
  community:
    "Hi WDED! I'd like to apply as a community partner.\n\nOrganisation name:\nType (NGO / school / community group):\nWhat we need:",
}

export const brand = {
  name: 'WDED',
  fullName: 'We Do Everything Digital',
  tagline: 'Go digital. Grow faster.',
}

/** Used for <title>, meta tags and social previews */
export const seo = {
  /** Your live domain, no trailing slash. Update after deploying. */
  siteUrl: 'https://wded.vercel.app',
  title: 'WDED · We Do Everything Digital | Websites, PWA Apps & AI Agents in Malaysia',
  description:
    'WDED is a Malaysian tech company helping SMEs, communities and people go digital with fast websites, installable PWA apps and AI agent workflows. Go digital. Grow faster.',
  ogImage: '/og-image.png',
}

export const nav = [
  { label: 'Services', href: '#services' },
  { label: 'Packages', href: '#packages' },
  { label: 'Community', href: '#community' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
]

export const hero = {
  eyebrow: 'Websites · PWA Apps · AI Agent Workflows · Malaysia',
  headline: 'We do everything digital.',
  subtext:
    'A Malaysian tech company helping SMEs, communities and people go digital with websites, installable apps and AI that handles the busywork.',
  primaryCta: 'Start a project',
  secondaryCta: 'See our services',
}

export const about = {
  eyebrow: 'Why WDED',
  heading: 'Going digital should be simple.',
  paragraphs: [
    'Everything is going digital: how people find a shop, book a class, join a club or ask a question. But many businesses and communities are being left behind, because going digital feels technical and expensive.',
    'WDED makes it simple. We explain things in plain language, recommend only what you actually need, and build it for you from start to finish, at a price that makes sense for SMEs and communities.',
  ],
  points: [
    { title: 'Plain language', text: 'No jargon. We explain every option and what it means for you.' },
    { title: 'Fair pricing', text: 'Clear packages with a starting price, confirmed after a free consultation.' },
    { title: 'End to end', text: 'From idea to launch and beyond, one team handles everything.' },
  ],
  visionLabel: 'Our vision',
  vision:
    'To become a trusted digital partner for SMEs, communities and people across Malaysia, helping them go digital and grow.',
}

export type ServiceIcon = 'website' | 'app' | 'ai'

export const services = {
  eyebrow: 'Services',
  heading: 'Three ways we help you go digital.',
  intro: 'Start with one, or combine them as you grow.',
  items: [
    {
      number: '01',
      icon: 'website' as ServiceIcon,
      title: 'Website Development',
      description:
        'Fast, mobile-friendly websites that look professional, load quickly and help people find you on Google.',
      bullets: ['Portfolio and personal sites', 'Club, NGO and school sites', 'Business and landing pages'],
      cta: 'Ask about websites',
      message: "Hi WDED! I'm interested in a website.",
    },
    {
      number: '02',
      icon: 'app' as ServiceIcon,
      title: 'App Development (PWA)',
      description:
        'Web apps that install on any phone like a real app, with no app store needed. One link, works on Android and iPhone.',
      bullets: ['Booking and ordering apps', 'Member and event apps', 'Works offline'],
      cta: 'Ask about apps',
      message: "Hi WDED! I'm interested in a PWA app.",
    },
    {
      number: '03',
      icon: 'ai' as ServiceIcon,
      title: 'AI Agent Workflows',
      description:
        'AI assistants and automations that handle repetitive work 24/7, so you and your team can focus on what matters.',
      bullets: ['FAQ and customer-service bots', 'Lead capture and auto-replies', 'Reports and admin automation'],
      cta: 'Ask about AI agents',
      message: "Hi WDED! I'm interested in an AI agent workflow.",
    },
  ],
}

export const process = {
  eyebrow: 'How we work',
  heading: 'A clear process, from first chat to launch.',
  steps: [
    { title: 'Discover', text: 'A free chat to understand your goals, audience and budget.' },
    { title: 'Plan & scope', text: 'We agree on pages, features and timeline in writing.' },
    { title: 'Quote', text: 'A clear, fixed quote with no hidden costs.' },
    { title: 'Build & test', text: 'We build, share previews and refine with your feedback.' },
    { title: 'Launch & train', text: 'We go live and show you how to manage it yourself.' },
    { title: 'Care & support', text: 'Optional care plan for updates, backups and help.' },
  ],
}

export const packages = {
  eyebrow: 'Packages',
  heading: 'Simple packages, honest starting prices.',
  intro: 'Every project starts with a free consultation, so you only pay for what you need.',
  ctaLabel: 'Get a quote',
  items: [
    {
      name: 'Starter Website',
      priceFrom: 'RM150',
      priceSuffix: '',
      description: 'For portfolios, clubs, NGOs and events.',
      features: ['Portfolio, club, NGO or event site', '1–3 pages', 'Mobile-friendly design', 'Contact links'],
      highlight: false,
    },
    {
      name: 'Business Website',
      priceFrom: 'RM800',
      priceSuffix: '',
      description: 'For SMEs ready to be found online.',
      features: ['3–5 pages', 'Google Business Profile setup', 'WhatsApp button', 'Basic SEO'],
      highlight: true,
      badge: 'For SMEs',
    },
    {
      name: 'PWA App',
      priceFrom: 'RM2,000',
      priceSuffix: '',
      description: 'An app your customers install from a link.',
      features: ['Installable web app', 'Android and iPhone', 'Works offline', 'Scoped after a meeting'],
      highlight: false,
    },
    {
      name: 'AI Agent Workflow',
      priceFrom: 'RM800',
      priceSuffix: 'setup',
      description: 'Let AI take care of the repetitive work.',
      features: ['FAQ bot or auto-reply agent', 'One workflow automated', 'Trained on your info', 'Handover and guide'],
      highlight: false,
    },
  ],
  note: 'Care Plan from RM30/month · Final price after a free consultation.',
}

export const community = {
  eyebrow: 'Community',
  heading: 'Giving back is how we prove our work.',
  text: 'We build selected websites for NGOs, schools and community groups free or at cost. If your organisation does good work but lacks an online presence, we want to hear from you.',
  cta: 'Apply as a community partner',
}

export const values = {
  eyebrow: 'Our values',
  heading: 'D.I.G.I.T.',
  intro: 'Five values that guide how we work with every client.',
  items: [
    { letter: 'D', title: 'Dedication', text: 'We treat every project like our own business.' },
    { letter: 'I', title: 'Integrity', text: 'Honest advice, clear prices and promises we keep.' },
    { letter: 'G', title: 'Growth', text: 'We grow by helping our clients grow.' },
    { letter: 'I', title: 'Innovation', text: 'We use modern tools to solve real problems simply.' },
    { letter: 'T', title: 'Teamwork', text: 'We work with you, not just for you.' },
  ],
}

export const team = {
  eyebrow: 'Team',
  heading: 'The people behind WDED.',
  intro: 'A young Malaysian team with one goal: making digital simple for everyone.',
  // To use a photo, put it in /public/team/ and set photo: '/team/firdaus.jpg'
  members: [
    { name: 'Muhammad Firdaus Zahin', role: 'Founder & Business Lead', initials: 'FZ', photo: '' },
    { name: 'Aiman Asyraf', role: 'Co-Founder & Tech Lead', initials: 'AA', photo: '' },
    { name: 'Muhammad Aiman Hazimin', role: 'Co-Founder & Operations Lead', initials: 'AH', photo: '' },
    { name: 'Muhammad Haiqal Aiman', role: 'Co-Founder & Marketing Lead', initials: 'HA', photo: '' },
    { name: 'Muhammad Mikhail Nazran', role: 'Co-Founder & Finance Lead', initials: 'MN', photo: '' },
  ],
}

export const contactSection = {
  eyebrow: 'Contact',
  heading: 'Ready to go digital?',
  text: 'Tell us what you need. We reply on WhatsApp, and the first consultation is always free.',
  whatsappCta: 'Chat on WhatsApp',
}

export const footer = {
  copyright: '© 2026 WDED. All rights reserved.',
}
