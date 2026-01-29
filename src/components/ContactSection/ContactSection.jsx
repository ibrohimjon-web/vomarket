import React, { useEffect, useRef, useState } from 'react'
import { FaTelegramPlane } from 'react-icons/fa'
import { FiPhoneCall } from 'react-icons/fi'
import './ContactSection.css'

const PHONE_NUMBER = '+998700825053'
const TELEGRAM_BOT = 'https://t.me/vomarket_bot'
const TELEGRAM_ADMIN = 'https://t.me/vomarket_admin'

const ContactSection = ({ content }) => {
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
      className={`section-wrapper scroll-section contact-root ${visible ? 'visible' : ''}`}
    >
      <div className="contact-layout glass-card">
        <div className="contact-main">
          <h2 className="section-title">{content.title}</h2>
          <p className="section-subtitle">{content.subtitle}</p>

          <div className="contact-actions">
            <a href={`tel:${PHONE_NUMBER}`} className="btn btn-primary contact-call-btn">
              <FiPhoneCall />
              <span>{content.call}</span>
            </a>

            <div className="contact-telegram-group">
              <a href={TELEGRAM_BOT} target="_blank" rel="noreferrer" className="btn btn-secondary">
                <FaTelegramPlane />
                <span>{content.botLabel}: @vomarket_bot</span>
              </a>
              <a
                href={TELEGRAM_ADMIN}
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost"
              >
                <FaTelegramPlane />
                <span>{content.adminLabel}: @vomarket_admin</span>
              </a>
            </div>

            <a
              href={TELEGRAM_ADMIN}
              target="_blank"
              rel="noreferrer"
              className="contact-question-link"
            >
              <span className="contact-question-label">{content.question}</span>
              <span className="contact-question-pill">@vomarket_admin</span>
            </a>
          </div>
        </div>

        <div className="contact-meta">
          <div className="contact-meta-card">
            <span className="contact-meta-title">Ish vaqti</span>
            <span className="contact-meta-text">Har kuni, 24/7</span>
          </div>
          <div className="contact-meta-card">
            <span className="contact-meta-title">Hudud</span>
            <span className="contact-meta-text">Namangan va atrofidagi tumanlar</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactSection
