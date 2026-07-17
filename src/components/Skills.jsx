import React, { useEffect, useRef, useState } from 'react'

const SKILLS_LEFT = [
  { name: 'HTML', value: 50 },
  { name: 'CSS', value: 50 },
  { name: 'JavaScript', value: 50 },
]

const SKILLS_RIGHT = [
  { name: 'PHP', value: 0 },
  { name: 'WordPress/CMS', value: 0 },
  { name: 'Photoshop', value: 50 },
]

function SkillBar({ name, value, animate }) {
  return (
    <div className="progress">
      <span className="skill">
        <span>{name}</span> <i className="val">{value}%</i>
      </span>
      <div className="progress-bar-wrap">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: animate ? `${value}%` : '0%' }}
          aria-valuenow={value}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimate(true)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.2 }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="skills section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Skills</h2>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row skills-content skills-animation" ref={ref}>
          <div className="col-lg-6">
            {SKILLS_LEFT.map((s) => (
              <SkillBar key={s.name} {...s} animate={animate} />
            ))}
          </div>
          <div className="col-lg-6">
            {SKILLS_RIGHT.map((s) => (
              <SkillBar key={s.name} {...s} animate={animate} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
