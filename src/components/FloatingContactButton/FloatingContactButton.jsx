import React from 'react'
import { FiPhoneCall } from 'react-icons/fi'
import { TfiHeadphoneAlt } from "react-icons/tfi";
import './FloatingContactButton.css'

const FloatingContactButton = () => {
  return (
    <div className="float-contact-root">
      <a href="tel:+998700825053" className="float-contact-btn" aria-label="VO.MARKET bilan bog'lanish">
        <span className="float-contact-icon float-phone">
          <TfiHeadphoneAlt  />
        </span>
        <span className="float-contact-icon float-telegram">
          <FiPhoneCall />
        </span>
      </a>
    </div>
  )
}

export default FloatingContactButton
