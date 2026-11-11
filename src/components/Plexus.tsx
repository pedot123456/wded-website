import { useMemo } from 'react'

// Small seeded PRNG so the pattern is identical on server and client
function mulberry32(seed: number) {
  return () => {
    seed |= 0
    seed = (seed + 0x6d2b79f5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

type Props = {
  seed?: number
  points?: number
  className?: string
  /** corner the pattern fades out from */
  fade?: 'tl' | 'tr' | 'bl' | 'br'
}

const fadeOrigin = { tl: '0% 0%', tr: '100% 0%', bl: '0% 100%', br: '100% 100%' }

/** Decorative network pattern: dots connected by thin lines. */
export function Plexus({ seed = 1, points = 28, className = '', fade = 'tr' }: Props) {
  const { dots, lines } = useMemo(() => {
    const rand = mulberry32(seed)
    const dots = Array.from({ length: points }, () => ({
      x: +(rand() * 400).toFixed(1),
      y: +(rand() * 400).toFixed(1),
      r: +(1 + rand() * 1.8).toFixed(2),
    }))
    const lines: [number, number, number, number, number][] = []
    for (let i = 0; i < dots.length; i++) {
      for (let j = i + 1; j < dots.length; j++) {
        const d = Math.hypot(dots[i].x - dots[j].x, dots[i].y - dots[j].y)
        if (d < 105) lines.push([dots[i].x, dots[i].y, dots[j].x, dots[j].y, +(1 - d / 105).toFixed(2)])
      }
    }
    return { dots, lines }
  }, [seed, points])

  const mask = `radial-gradient(circle at ${fadeOrigin[fade]}, #000 0%, transparent 70%)`
  return (
    <svg
      viewBox="0 0 400 400"
      aria-hidden="true"
      className={`pointer-events-none absolute ${className}`}
      style={{ maskImage: mask, WebkitMaskImage: mask }}
    >
      <g stroke="#38B6FF" strokeWidth="0.6">
        {lines.map(([x1, y1, x2, y2, o], i) => (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} strokeOpacity={o * 0.5} />
        ))}
      </g>
      <g fill="#7FD0FF">
        {dots.map((d, i) => (
          <circle key={i} cx={d.x} cy={d.y} r={d.r} fillOpacity={0.7} />
        ))}
      </g>
    </svg>
  )
}
