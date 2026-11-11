import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig, type Plugin } from 'vite'
import { brand, contact, seo } from './src/content.ts'

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

/** Injects title, meta description, Open Graph and JSON-LD from src/content.ts */
function seoTags(): Plugin {
  const url = seo.siteUrl.replace(/\/$/, '')
  const image = url + seo.ogImage
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: brand.name,
    alternateName: brand.fullName,
    slogan: brand.tagline,
    url,
    logo: url + '/favicon-512.png',
    email: contact.email,
    address: { '@type': 'PostalAddress', addressLocality: 'Kuala Lumpur', addressCountry: 'MY' },
    sameAs: Object.values(contact.socials),
  }
  const tags = `
    <title>${esc(seo.title)}</title>
    <meta name="description" content="${esc(seo.description)}" />
    <link rel="canonical" href="${url}/" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="${esc(brand.name)}" />
    <meta property="og:title" content="${esc(seo.title)}" />
    <meta property="og:description" content="${esc(seo.description)}" />
    <meta property="og:url" content="${url}/" />
    <meta property="og:image" content="${image}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:locale" content="en_MY" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${esc(seo.title)}" />
    <meta name="twitter:description" content="${esc(seo.description)}" />
    <meta name="twitter:image" content="${image}" />
    <script type="application/ld+json">${JSON.stringify(jsonLd).replace(/</g, '\\u003c')}</script>`
  return {
    name: 'wded-seo-tags',
    transformIndexHtml: (html) => html.replace('<!--seo-tags-->', tags),
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), seoTags()],
})
