import React, { useEffect } from 'react'
import useAOS from './hooks/useAOS'

import Preloader from './components/Preloader'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Stats from './components/Stats'
import Skills from './components/Skills'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollTop from './components/ScrollTop'

export default function App() {
  useAOS()

  // Correct scrolling position on load for URLs containing hash links
  useEffect(() => {
    if (window.location.hash) {
      const section = document.querySelector(window.location.hash)
      if (section) {
        setTimeout(() => {
          const scrollMarginTop = getComputedStyle(section).scrollMarginTop
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop || '0', 10),
            behavior: 'smooth',
          })
        }, 100)
      }
    }
  }, [])

  return (
    <>
      <Preloader />
      <Header />

      <main className="main">
        <Hero />
        <About />
        <Stats />
        <Skills />
        <Resume />
        <Contact />
      </main>

      <Footer />
      <ScrollTop />
    </>
  )
}
