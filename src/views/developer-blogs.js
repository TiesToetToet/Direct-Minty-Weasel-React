import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './developer-blogs.css'

const DeveloperBlogs = (props) => {
  return (
    <div className="developer-blogs-container">
      <Helmet>
        <title>Developer-Blogs - Direct Minty Weasel</title>
        <meta
          property="og:title"
          content="Developer-Blogs - Direct Minty Weasel"
        />
      </Helmet>
      <div className="developer-blogs-container1">
        <Link to="/developer-blogs" className="developer-blogs-navlink button">
          Developer Blogs
        </Link>
        <Link to="/about" className="developer-blogs-navlink1 button">
          About
        </Link>
        <Link to="/" className="developer-blogs-navlink2 button">
          Home
        </Link>
        <Link to="/downloads" className="developer-blogs-navlink3 button">
          Downloads
        </Link>
        <Link to="/contact" className="developer-blogs-navlink4 button">
          Contact
        </Link>
      </div>
    </div>
  )
}

export default DeveloperBlogs
