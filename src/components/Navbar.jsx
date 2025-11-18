import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <header className="gns-navbar">
      <div className="gns-navbar-inner">
        <div className="gns-brand">growNseek</div>
        <nav className="gns-navlinks" aria-label="Primary">
          <a href="#home" className="gns-link">Home</a>
          <a href="#events" className="gns-link">Events</a>
          <a href="#about" className="gns-link">About</a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
