import React, { useEffect, useRef, useState } from 'react'
import { FiChevronDown, FiHelpCircle } from 'react-icons/fi'
import './FAQSection.css'

const FAQSection = ({ content }) => {
  const [openIndex, setOpenIndex] = useState(0)
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

  const toggle = (idx) => {
    setOpenIndex((prev) => (prev === idx ? -1 : idx))
  }

  return (
    <div
      ref={ref}
      className={`section-wrapper scroll-section faq-root ${visible ? 'visible' : ''}`}
    >
      <div className="faq-header">
        <div>
          <h2 className="section-title">{content.title}</h2>
          <p className="section-subtitle">{content.subtitle}</p>
        </div>
        <div className="faq-icon-pill">
          <FiHelpCircle />
        </div>
      </div>

      <div className="faq-list">
        {content.items.map((item, idx) => {
          const isOpen = idx === openIndex
          return (
            <article key={item.q} className="faq-item">
              <button className="faq-question" onClick={() => toggle(idx)} type="button">
                <span>{item.q}</span>
                <FiChevronDown className={`faq-chevron ${isOpen ? 'open' : ''}`} />
              </button>
              <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
                <p className="faq-answer">{item.a}</p>
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
}

export default FAQSection
