import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './about.css'

const About = (props) => {
  return (
    <div className="about-container">
      <Helmet>
        <title>About - Direct Minty Weasel</title>
        <meta property="og:title" content="About - Direct Minty Weasel" />
      </Helmet>
      <div className="about-container1">
        <Link to="/developer-blogs" className="about-navlink button">
          Developer Blogs
        </Link>
        <Link to="/about" className="about-navlink1 button">
          About
        </Link>
        <Link to="/" className="about-navlink2 button">
          Home
        </Link>
        <Link to="/downloads" className="about-navlink3 button">
          Downloads
        </Link>
        <Link to="/contact" className="about-navlink4 button">
          Contact
        </Link>
      </div>
    </div>
  )
}

export default About
