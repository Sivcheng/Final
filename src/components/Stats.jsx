import React from 'react'
import useCounter from '../hooks/useCounter'

const STATS = [
  { icon: 'bi-emoji-smile', end: 232, label: 'Happy Clients', sub: 'consequuntur quae' },
  { icon: 'bi-journal-richtext', end: 521, label: 'Projects', sub: 'adipisci atque cum quia aut' },
  { icon: 'bi-headset', end: 1453, label: 'Hours Of Support', sub: 'aut commodi quaerat' },
  { icon: 'bi-people', end: 32, label: 'Hard Workers', sub: 'rerum asperiores dolor' },
]

function StatItem({ icon, end, label, sub }) {
  const [ref, count] = useCounter(end, 1000)
  return (
    <div className="col-lg-3 col-md-6">
      <div className="stats-item" ref={ref}>
        <i className={`bi ${icon}`}></i>
        <span className="purecounter">{count}</span>
        <p>
          <strong>{label}</strong> <span>{sub}</span>
        </p>
      </div>
    </div>
  )
}

export default function Stats() {
  return (
    <section id="stats" className="stats section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          {STATS.map((s) => (
            <StatItem key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}
