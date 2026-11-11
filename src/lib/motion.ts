import { useEffect, useState } from 'react'

function useMediaQuery(query: string) {
  // Always false on the first (prerendered) render to avoid hydration mismatches
  const [matches, setMatches] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia(query)
    setMatches(mq.matches)
    const onChange = () => setMatches(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [query])
  return matches
}

export const useReducedMotion = () => useMediaQuery('(prefers-reduced-motion: reduce)')
export const useIsMobile = () => useMediaQuery('(max-width: 767px)')
export const useFinePointer = () => useMediaQuery('(hover: hover) and (pointer: fine)')

/**
 * Parallax strength multiplier: 0 when the user prefers reduced motion,
 * lighter on phones, full on larger screens.
 */
export function useParallaxStrength() {
  const reduced = useReducedMotion()
  const mobile = useIsMobile()
  return reduced ? 0 : mobile ? 0.45 : 1
}
