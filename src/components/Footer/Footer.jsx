import React from 'react'
import { FiExternalLink, FiFacebook, FiInstagram,  } from 'react-icons/fi'
import { FaTelegram } from "react-icons/fa";

import './Footer.css'

const Footer = ({ content, navLabels, onNavigate }) => {
  const year = new Date().getFullYear()

  return (
    <div className="footer-root">
      <div className="footer-inner">
        <div className="footer-col footer-about">
          <h3 className="footer-logo">VO.MARKET</h3>
          <p className="footer-text">{content.about}</p>
          <a
            href="https://vomarket.uz"
            target="_blank"
            rel="noreferrer"
            className="footer-link-inline"
          >
            <span>vomarket.uz</span>
            <FiExternalLink />
          </a>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">{content.linksTitle}</h4>
          <button onClick={() => onNavigate('hero')} className="footer-link-btn">
            {navLabels.hero}
          </button>
          <button onClick={() => onNavigate('advantages')} className="footer-link-btn">
            {navLabels.advantages}
          </button>
          <button onClick={() => onNavigate('how-it-works')} className="footer-link-btn">
            {navLabels.howItWorks}
          </button>
          <button onClick={() => onNavigate('location')} className="footer-link-btn">
            {navLabels.location}
          </button>
          <button onClick={() => onNavigate('contact')} className="footer-link-btn">
            {navLabels.contact}
          </button>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">{content.socialTitle}</h4>
          <div className="footer-social-row">
            <a
              href="https://t.me/vomarket_channel"
              target="_blank"
              rel="noreferrer"
              className="footer-social-pill"
            >
              <FaTelegram />
              <span>Telegram</span>
            </a>
            <a
              href="https://instagram.com/vo.market"
              target="_blank"
              rel="noreferrer"
              className="footer-social-pill"
            >
              <FiInstagram />
              <span>Instagram</span>
            </a>
            <a
              href="https://facebook.com/vomarket"
              target="_blank"
              rel="noreferrer"
              className="footer-social-pill"
            >
              <FiFacebook />
              <span>Facebook</span>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {year} VO.MARKET. {content.copyright}</span>
      </div>
    </div>
  )
}

export default Footer
