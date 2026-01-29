import React, { useEffect, useRef, useState } from 'react'
import { FiClock, FiDollarSign, FiMapPin, FiPackage, FiTruck } from 'react-icons/fi'
import './Advantages.css'

const iconMap = [FiPackage, FiTruck, FiMapPin, FiDollarSign, FiClock]

const Advantages = ({ content }) => {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { threshold: 0.3 },
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`section-wrapper scroll-section advantages-root ${visible ? 'visible' : ''}`}
    >
      <div className="advantages-header">
        <h2 className="section-title">{content.title}</h2>
        <p className="section-subtitle">{content.subtitle}</p>
      </div>

      <div className="advantages-grid">
        {content.items.map((text, idx) => {
          const Icon = iconMap[idx] || FiPackage
          return (
            <article key={text} className="advantages-card">
              <div className="advantages-icon-wrap">
                <Icon className="advantages-icon" />
              </div>
              <h3 className="advantages-title">{text}</h3>
            </article>
          )
        })}
      </div>
    </div>
  )
}

export default Advantages

