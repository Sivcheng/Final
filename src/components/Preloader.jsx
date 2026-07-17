import React, { useEffect, useState } from 'react'

export default function Preloader() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    if (document.readyState === 'complete') {
      setShow(false)
      return
    }
    function onLoad() {
      setShow(false)
    }
    window.addEventListener('load', onLoad)
    return () => window.removeEventListener('load', onLoad)
  }, [])

  if (!show) return null
  return <div id="preloader"></div>
}
