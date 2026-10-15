import { useEffect, type RefObject } from 'react'

// 0 = off, 1 = as designed, up to ~1.6 for more drama.
const STRENGTH = 1

/**
 * Drives the depth-layer parallax across the page's three scenes
 * (hero / mid / closing). Every layer in a scene carries data-depth;
 * positive values lag behind scroll, 0 moves with the page, negative
 * values move faster. See hacktober-landing/README.md for the full
 * writeup — this is a direct port of that script.
 */
export function useParallax(rootRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion || STRENGTH <= 0) return

    let queued = false

    function apply() {
      const vh = window.innerHeight || document.documentElement.clientHeight || 800
      const scenes = root!.querySelectorAll<HTMLElement>('[data-scene]')

      scenes.forEach((scene) => {
        const r = scene.getBoundingClientRect()
        if (r.bottom < -900 || r.top > vh + 900) return // offscreen: skip

        const kind = scene.getAttribute('data-scene')
        let delta: number
        if (kind === 'top') delta = Math.max(0, -r.top) // hero: 0 at page top
        else if (kind === 'bottom') delta = Math.min(0, vh - r.bottom) // closing: 0 at page end
        else delta = vh / 2 - (r.top + r.height / 2) // middle: 0 when centred

        const layers = scene.querySelectorAll<HTMLElement>('[data-depth]')
        layers.forEach((el) => {
          if (el.closest('[data-scene]') !== scene) return // belongs to a nested scene

          const depth = parseFloat(el.getAttribute('data-depth') || '0')
          let y = delta * depth * STRENGTH
          y = Math.max(-360, Math.min(640, y))
          el.style.transform = `translate3d(0,${y.toFixed(1)}px,0)`

          const fade = parseFloat(el.getAttribute('data-fade') || '')
          if (fade > 0) {
            el.style.opacity = String(Math.max(0, Math.min(1, 1 - delta / fade)))
          }
        })
      })
    }

    function kick() {
      if (queued) return
      queued = true
      requestAnimationFrame(() => {
        queued = false
        apply()
      })
    }

    window.addEventListener('scroll', kick, { passive: true })
    window.addEventListener('resize', kick)
    kick()

    return () => {
      window.removeEventListener('scroll', kick)
      window.removeEventListener('resize', kick)
    }
  }, [rootRef])
}
