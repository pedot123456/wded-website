// Generates optimized brand assets in /public from the original logo files.
// Usage: node scripts/build-assets.mjs [path-to-brand-kit-folder]
// Re-run whenever the logo files change.
import sharp from 'sharp'
import { copyFile, mkdir } from 'node:fs/promises'
import { join, resolve } from 'node:path'

const src = resolve(process.argv[2] ?? '../WDED_Social_Media_Kit (1)')
const out = resolve('public')
await mkdir(out, { recursive: true })

const logo = join(src, 'WDED_logo.png') // dark text, for light backgrounds
const logoWhite = join(src, 'WDED_logo_white_text.png') // white text, for dark backgrounds
const symbol = join(src, 'profile_W_symbol_1080.png') // W on navy square

// Originals, kept for reference / downloads
await copyFile(logo, join(out, 'WDED_logo.png'))
await copyFile(logoWhite, join(out, 'WDED_logo_white_text.png'))
await copyFile(symbol, join(out, 'profile_W_symbol_1080.png'))

// Navbar / footer logo (displayed ~36px high, so 2x = ~76px)
await sharp(logoWhite).resize({ height: 80 }).webp({ quality: 90 }).toFile(join(out, 'logo-white.webp'))
await sharp(logoWhite).resize({ height: 80 }).png().toFile(join(out, 'logo-white.png'))

// Transparent W mark, cut from the left part of the logo
// The white "D" overlaps the W's bounding box, so drop near-white pixels
const { data, info } = await sharp(logoWhite)
  .extract({ left: 0, top: 0, width: 550, height: 304 })
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true })
for (let i = 0; i < data.length; i += 4) {
  const [r, g, b] = [data[i], data[i + 1], data[i + 2]]
  if (Math.min(r, g, b) > 170 && Math.max(r, g, b) - Math.min(r, g, b) < 60) data[i + 3] = 0
}
await sharp(data, { raw: info }).resize({ height: 160 }).webp({ quality: 90 }).toFile(join(out, 'w-mark.webp'))

// Favicons: square crop around the W on its navy background
const square = { left: 170, top: 170, width: 740, height: 740 }
const roundedMask = (size, r) =>
  Buffer.from(`<svg width="${size}" height="${size}"><rect width="${size}" height="${size}" rx="${r}" fill="#fff"/></svg>`)
for (const [name, size, rounded] of [
  ['favicon-32.png', 32, true],
  ['favicon-192.png', 192, true],
  ['favicon-512.png', 512, true],
  ['apple-touch-icon.png', 180, false], // iOS rounds it itself
]) {
  let img = sharp(symbol).extract(square).resize(size, size)
  if (rounded) img = sharp(await img.png().toBuffer()).composite([{ input: roundedMask(size, size * 0.22), blend: 'dest-in' }])
  await img.png().toFile(join(out, name))
}

// Open Graph image 1200x630
const ogLogo = await sharp(logoWhite).resize({ width: 760 }).png().toBuffer()
const ogBg = Buffer.from(`
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="g" cx="50%" cy="35%" r="70%">
      <stop offset="0" stop-color="#0B2A5C"/><stop offset="1" stop-color="#020B1F"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#g)"/>
  ${Array.from({ length: 9 }, (_, row) =>
    Array.from({ length: 60 }, (_, col) => {
      const x = 10 + col * 20
      const y = 520 + row * 12 + Math.sin(col / 5 + row / 2) * 10
      return `<circle cx="${x}" cy="${y.toFixed(1)}" r="${(1 + row * 0.15).toFixed(2)}" fill="#38B6FF" opacity="${(0.15 + row * 0.06).toFixed(2)}"/>`
    }).join('')
  ).join('')}
  <text x="600" y="430" text-anchor="middle" font-family="Poppins, Segoe UI, Arial, sans-serif" font-size="44" font-weight="600" fill="#EAF2FF">Go digital. Grow faster.</text>
  <text x="600" y="482" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="26" fill="#A7B8D9">Websites · PWA Apps · AI Agent Workflows · Malaysia</text>
</svg>`)
await sharp(ogBg)
  .composite([{ input: ogLogo, top: 150, left: 220 }])
  .png()
  .toFile(join(out, 'og-image.png'))

console.log('Assets written to', out)
