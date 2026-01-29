import React from 'react'
import logo from '../../assets/logo.png'
import './Loader.css'

const Loader = () => {
  return (
    <div className="loader-overlay">
      <div className="loader-card">
        <div className="loader-logo-wrapper">
          <img src={logo} alt="VOMARKET logo" className="loader-logo" />
          <div className="loader-spinner">
            <div className="loader-orbit" />
            <div className="loader-dot" />
          </div>
        </div>
        <p className="loader-text">VO MARKET yuklanmoqda...</p>
      </div>
    </div>
  )
}

export default Loader

