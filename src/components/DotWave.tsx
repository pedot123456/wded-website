import { useEffect, useRef } from 'react'

/**
 * Animated particle "dot wave" drawn on a canvas.
 * - Pauses when off-screen or the tab is hidden
 * - Fewer dots on small screens
 * - Draws a single still frame when the user prefers reduced motion
 */
export function DotWave({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let width = 0
    let height = 0
    let cols = 0
    let rows = 0
    let raf = 0
    let visible = true
    let start = performance.now()

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.75)
      width = canvas.clientWidth
      height = canvas.clientHeight
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const spacing = width < 640 ? 16 : 20
      cols = Math.ceil(width / spacing) + 2
      rows = width < 640 ? 12 : 16
      if (reduced) draw(0)
    }

    const draw = (t: number) => {
      ctx.clearRect(0, 0, width, height)
      for (let r = 0; r < rows; r++) {
        const depth = r / (rows - 1) // 0 = far (top), 1 = near (bottom)
        const baseY = height * (0.18 + depth * 0.82)
        const amp = 6 + depth * 22
        const size = 0.6 + depth * 1.5
        const alpha = 0.12 + depth * 0.6
        const spread = 0.75 + depth * 0.45 // perspective: near rows wider
        const offsetX = (width - width * spread) / 2
        ctx.fillStyle = `rgba(${Math.round(45 + 11 * depth)}, ${Math.round(140 + 42 * depth)}, 255, ${alpha})`
        for (let c = 0; c < cols; c++) {
          const u = c / (cols - 1)
          const x = offsetX + u * width * spread
          const y =
            baseY +
            Math.sin(u * 9 + t * 0.0011 + r * 0.35) * amp * 0.6 +
            Math.sin(u * 4 - t * 0.0007 + r * 0.2) * amp * 0.4
          ctx.fillRect(x - size / 2, y - size / 2, size, size)
        }
      }
    }

    const loop = (now: number) => {
      draw(now - start)
      raf = requestAnimationFrame(loop)
    }
    const play = () => {
      if (reduced || raf || !visible || document.hidden) return
      raf = requestAnimationFrame(loop)
    }
    const pause = () => {
      cancelAnimationFrame(raf)
      raf = 0
    }

    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting
      if (visible) play()
      else pause()
    })
    io.observe(canvas)
    const onVis = () => (document.hidden ? pause() : play())
    document.addEventListener('visibilitychange', onVis)
    start = performance.now()
    play()

    return () => {
      pause()
      ro.disconnect()
      io.disconnect()
      document.removeEventListener('visibilitychange', onVis)
    }
  }, [])

  return <canvas ref={canvasRef} aria-hidden="true" className={`block h-full w-full ${className}`} />
}
