import React, { useEffect, useRef, useState } from 'react'
import { FiMapPin } from 'react-icons/fi'
import './LocationSection.css'

const LocationSection = ({ content }) => {
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
      { threshold: 0.25 },
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`section-wrapper scroll-section location-root ${visible ? 'visible' : ''}`}
    >
      <div className="location-header">
        <div>
          <h2 className="section-title">{content.title}</h2>
          <p className="section-subtitle">{content.subtitle}</p>
        </div>
        <div className="location-badge">
          <FiMapPin />
          <span>Namangan, O'zbekiston</span>
        </div>
      </div>

      <div className="location-map-wrapper glass-card">
        <iframe
          title="VO.MARKET office in Namangan"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47992.7625485616!2d71.593!3d40.998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb84f5a84d1a81%3A0x9c41f3a7eb0a74a5!2sNamangan!5e0!3m2!1sen!2suz!4v1700000000000"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="location-map"
        />
      </div>
    </div>
  )
}

export default LocationSection
