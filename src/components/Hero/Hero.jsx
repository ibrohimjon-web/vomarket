import React, { useEffect, useRef, useState } from 'react'
import { FaTelegramPlane } from 'react-icons/fa'
import { FiArrowRight, FiBox, FiMapPin, FiShoppingBag, FiTruck } from 'react-icons/fi'
import './Hero.css'

const Hero = ({ content, onPrimaryClick }) => {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.35 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={`section-wrapper scroll-section hero-root ${visible ? 'visible' : ''}`}>
      <div className="hero-grid glass-card">
        <div className="hero-main">
          <h1 className="hero-title">{content.title}</h1>
          <p className="hero-subtitle">{content.subtitle}</p>
          <div className="hero-cta-row">
            <button className="btn btn-primary" onClick={onPrimaryClick}>
              <FiShoppingBag />
              <span>{content.primaryCta}</span>
            </button>
            <a
              href="https://t.me/vomarket_bot"
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary hero-secondary-btn"
            >
              <FaTelegramPlane />
              <span>{content.secondaryCta}</span>
            </a>
          </div>
          <div className="hero-meta">
            {(content.metaPills || []).map((pill) => (
              <span key={pill} className="hero-pill">
                {pill}
              </span>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-card hero-card-main">
            <div className="hero-card-header">
              <span className="hero-card-label">{content.visual?.title}</span>
              <span className="hero-card-status hero-card-status-neutral">{content.visual?.route}</span>
            </div>
            <div className="hero-card-body">
              <div className="hero-route">
                <div className="hero-route-node hero-route-node-start">
                  <div className="hero-route-icon">
                    <FiBox />
                  </div>
                  <span className="hero-route-label">{content.visual?.from}</span>
                </div>

                <div className="hero-route-line" />

                <div className="hero-route-node hero-route-node-mid">
                  <div className="hero-route-icon hero-route-icon-mid">
                    <FiTruck />
                  </div>
                  <span className="hero-route-label">{content.visual?.status}</span>
                </div>

                <div className="hero-route-line" />

                <div className="hero-route-node hero-route-node-end">
                  <div className="hero-route-icon hero-route-icon-end">
                    <FiMapPin />
                  </div>
                  <span className="hero-route-label">{content.visual?.to}</span>
                </div>

                <div className="hero-route-truck" aria-hidden="true">
                  <div className="hero-route-truck-icon">
                    <FiTruck />
                  </div>
                  <div className="hero-route-truck-shadow" />
                </div>
              </div>
              <div className="hero-badges">
                <span className="hero-badge">
                  <FiArrowRight />
                  <span>{content.badges?.primary}</span>
                </span>
                <span className="hero-badge hero-badge-sub">{content.badges?.secondary}</span>
              </div>
            </div>
          </div>

          <div className="hero-card hero-card-float">
            <span className="hero-card-float-label">{content.float?.label}</span>
            <span className="hero-card-float-text">{content.float?.text}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

