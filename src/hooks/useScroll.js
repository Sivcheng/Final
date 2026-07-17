import { useEffect, useState } from 'react'

// Handles the "scroll to top" button visibility + the navmenu scrollspy
export function useScrollTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function toggle() {
      setVisible(window.scrollY > 100)
    }
    toggle()
    window.addEventListener('scroll', toggle)
    return () => window.removeEventListener('scroll', toggle)
  }, [])

  return visible
}

export function useScrollSpy(sectionIds) {
  const [active, setActive] = useState(sectionIds[0])

  useEffect(() => {
    function onScroll() {
      const position = window.scrollY + 200
      for (const id of sectionIds) {
        const section = document.getElementById(id)
        if (!section) continue
        if (
          position >= section.offsetTop &&
          position <= section.offsetTop + section.offsetHeight
        ) {
          setActive(id)
          return
        }
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [sectionIds])

  return active
}
