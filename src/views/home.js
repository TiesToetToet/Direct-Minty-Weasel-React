import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Direct Minty Weasel</title>
        <meta property="og:title" content="Direct Minty Weasel" />
      </Helmet>
      <div className="home-container1">
        <Link to="/developer-blogs" className="home-navlink button">
          Developer Blogs
        </Link>
        <Link to="/about" className="home-navlink1 button">
          About
        </Link>
        <Link to="/" className="home-navlink2 button">
          Home
        </Link>
        <Link to="/downloads" className="home-navlink3 button">
          Downloads
        </Link>
        <Link to="/contact" className="home-navlink4 button">
          Contact
        </Link>
      </div>
      <span className="home-text">
        <span>Kubusje de Game</span>
        <br></br>
        <span className="home-text03">WIP</span>
        <br></br>
        <br className="home-text05"></br>
        <br className="home-text06"></br>
        <br className="home-text07"></br>
        <br className="home-text08"></br>
        <br className="home-text09"></br>
        <br className="home-text10"></br>
        <br className="home-text11"></br>
        <br className="home-text12"></br>
        <br className="home-text13"></br>
        <br className="home-text14"></br>
        <br className="home-text15"></br>
        <br className="home-text16"></br>
        <br className="home-text17"></br>
        <br className="home-text18"></br>
        <br className="home-text19"></br>
        <br className="home-text20"></br>
        <br className="home-text21"></br>
        <br className="home-text22"></br>
        <br className="home-text23"></br>
        <span className="home-text24">What is ‘Kubusje de Game’?</span>
        <br></br>
        <span className="home-text26">
          It is a fun game for everyone where you must jump through the levels,
          but watch out for the enemies.
        </span>
        <br className="home-text27"></br>
        <br></br>
        <span>
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span className="home-text30">What does ‘Kubusje de Game’ mean?</span>
        <br></br>
        <span className="home-text32">
          It’s a Dutch name, which is in English: ‘Little cube the game.’
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <br className="home-text33"></br>
        <br></br>
        <span className="home-text35">How much does it cost?</span>
        <br className="home-text36"></br>
        <span className="home-text37">It’s completely free!</span>
        <br></br>
      </span>
      <div className="home-container2">
        <span className="home-text39">
          <span>March 09/2022: Released 0.2.40</span>
          <br></br>
          <span>March 07/2022: Released 0.2.30</span>
          <br></br>
          <span>March 03/2022: Released 0.2.20</span>
          <br></br>
          <span>March 01/2022: Released 0.2.10</span>
          <br></br>
          <span>February 25/2022: Released 0.2.00</span>
          <br></br>
          <span>January 22/2022: Released 0.1.09</span>
          <br></br>
          <span>January 15/2022: Added 0.1.08</span>
        </span>
      </div>
    </div>
  )
}

export default Home
