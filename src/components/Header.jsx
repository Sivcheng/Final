import React, { useState } from 'react'
import { useScrollSpy } from '../hooks/useScroll'

const NAV_ITEMS = [
  { id: 'hero', label: 'Home', icon: 'bi-house' },
  { id: 'about', label: 'About', icon: 'bi-person' },
  { id: 'resume', label: 'Resume', icon: 'bi-file-earmark-text' },
  { id: 'contact', label: 'Contact', icon: 'bi-envelope' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const active = useScrollSpy(NAV_ITEMS.map((item) => item.id))

  function handleNavClick() {
    if (menuOpen) setMenuOpen(false)
  }

  return (
    <header
      id="header"
      className={`header dark-background d-flex flex-column${menuOpen ? ' header-show' : ''}`}
    >
      <i
        className={`header-toggle d-xl-none bi ${menuOpen ? 'bi-x' : 'bi-list'}`}
        onClick={() => setMenuOpen((v) => !v)}
      ></i>

      <div className="profile-img">
        <img
          src="/assets/img/my-profile-img.jpg"
          alt=""
          className="img-fluid rounded-circle"
        />
      </div>

      <a href="#hero" className="logo d-flex align-items-center justify-content-center">
        <h1 className="sitename">Heng Sivcheng</h1>
      </a>

      <div className="social-links text-center">
        <a href="https://www.facebook.com/share/1D46XtnVfw/" className="facebook">
          <i className="bi bi-facebook"></i>
        </a>
        <a
          href="https://www.instagram.com/heng_sivcheng?igsh=MThrM3J0NG00bmc4bg=="
          className="instagram"
        >
          <i className="bi bi-instagram"></i>
        </a>
      </div>

      <nav id="navmenu" className="navmenu">
        <ul>
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={active === item.id ? 'active' : ''}
                onClick={handleNavClick}
              >
                <i className={`bi ${item.icon} navicon`}></i> {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
