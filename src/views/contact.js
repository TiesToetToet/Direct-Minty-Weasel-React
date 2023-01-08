import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './contact.css'

const Contact = (props) => {
  return (
    <div className="contact-container">
      <Helmet>
        <title>Contact - Direct Minty Weasel</title>
        <meta property="og:title" content="Contact - Direct Minty Weasel" />
      </Helmet>
      <div className="contact-container1">
        <Link to="/developer-blogs" className="contact-navlink button">
          Developer Blogs
        </Link>
        <Link to="/about" className="contact-navlink1 button">
          About
        </Link>
        <Link to="/" className="contact-navlink2 button">
          Home
        </Link>
        <Link to="/downloads" className="contact-navlink3 button">
          Downloads
        </Link>
        <Link to="/contact" className="contact-navlink4 button">
          Contact
        </Link>
      </div>
    </div>
  )
}

export default Contact
