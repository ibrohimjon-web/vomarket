import React, { useEffect, useRef, useState } from 'react'
import { FiBox, FiCheckCircle, FiMapPin, FiTruck } from 'react-icons/fi'
import './HowItWorks.css'

const HowItWorks = ({ content }) => {
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
      className={`section-wrapper scroll-section how-root ${visible ? 'visible' : ''}`}
    >
      <div className="how-header">
        <h2 className="section-title">{content.title}</h2>
        <p className="section-subtitle">{content.subtitle}</p>
      </div>

      <div className="how-grid">
        {content.steps.map((step, index) => (
          <div key={step} className="how-step-card glass-card">
            <div className="how-step-badge">{index + 1}</div>
            <h3 className="how-step-title">{step}</h3>
          </div>
        ))}
      </div>

      <div className="how-animation-card">
        <div className="how-animation-header">
          <span>Yetkazib berish jarayoni</span>
        </div>
        <div className="how-animation-track">
          <div className="how-node how-node-start">
            <FiBox />
          </div>
          <div className="how-track-line" />
          <div className="how-node how-node-middle">
            <FiTruck />
          </div>
          <div className="how-track-line" />
          <div className="how-node how-node-end">
            <FiMapPin />
          </div>

          <div className="how-truck">
            <div className="how-truck-icon">
              <FiTruck />
            </div>
            <div className="how-truck-shadow" />
          </div>
        </div>
        <div className="how-animation-footer">
          <span className="how-status">
            <FiCheckCircle />
            <span>Buyurtma yo'lda...</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks
