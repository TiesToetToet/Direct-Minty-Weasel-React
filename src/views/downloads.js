import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './downloads.css'

const Downloads = (props) => {
  return (
    <div className="downloads-container">
      <Helmet>
        <title>Downloads - Direct Minty Weasel</title>
        <meta property="og:title" content="Downloads - Direct Minty Weasel" />
      </Helmet>
      <div className="downloads-container1">
        <Link to="/developer-blogs" className="downloads-navlink button">
          Developer Blogs
        </Link>
        <Link to="/about" className="downloads-navlink1 button">
          About
        </Link>
        <Link to="/" className="downloads-navlink2 button">
          Home
        </Link>
        <Link to="/downloads" className="downloads-navlink3 button">
          Downloads
        </Link>
        <Link to="/contact" className="downloads-navlink4 button">
          Contact
        </Link>
      </div>
      <button className="downloads-button button"></button>
      <a
        href="http://127.0.0.1:5000/installers/0.2.40/Kubusje%20de%20Game%20Setup%200.2.40.exe"
        className="downloads-link"
      >
        <img
          alt="pastedImage"
          src="/playground_assets/pastedimage-x45s-200h.png"
          className="downloads-pasted-image"
        />
      </a>
      <span className="downloads-text">Current:</span>
      <div className="downloads-container2"></div>
    </div>
  )
}

export default Downloads
