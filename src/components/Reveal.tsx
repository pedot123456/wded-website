import { useEffect, useRef, type CSSProperties, type ElementType, type ReactNode } from 'react'

let observer: IntersectionObserver | null = null
function getObserver() {
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer!.unobserve(entry.target)
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    )
  }
  return observer
}

type Props = {
  children: ReactNode
  as?: ElementType
  delay?: number
  className?: string
}

/** Fades and slides its content in once when it scrolls into view. */
export function Reveal({ children, as: Tag = 'div', delay = 0, className = '' }: Props) {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = getObserver()
    io.observe(el)
    return () => io.unobserve(el)
  }, [])
  return (
    <Tag ref={ref} className={`reveal ${className}`} style={delay ? ({ '--reveal-delay': `${delay}ms` } as CSSProperties) : undefined}>
      {children}
    </Tag>
  )
}
