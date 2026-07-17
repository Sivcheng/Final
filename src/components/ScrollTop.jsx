import React from 'react'
import { useScrollTopButton } from '../hooks/useScroll'

export default function ScrollTop() {
  const visible = useScrollTopButton()

  function handleClick(e) {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <a
      href="#"
      id="scroll-top"
      className={`scroll-top d-flex align-items-center justify-content-center${
        visible ? ' active' : ''
      }`}
      onClick={handleClick}
    >
      <i className="bi bi-arrow-up-short"></i>
    </a>
  )
}
