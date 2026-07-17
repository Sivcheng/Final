import { useEffect, useRef, useState } from 'react'

// Counts up from 0 to `end` once the element scrolls into view.
export default function useCounter(end, duration = 1000) {
  const ref = useRef(null)
  const [count, setCount] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true
            const startTime = performance.now()

            function tick(now) {
              const progress = Math.min((now - startTime) / duration, 1)
              setCount(Math.floor(progress * end))
              if (progress < 1) {
                requestAnimationFrame(tick)
              } else {
                setCount(end)
              }
            }
            requestAnimationFrame(tick)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.3 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [end, duration])

  return [ref, count]
}
