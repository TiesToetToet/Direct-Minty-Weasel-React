import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Downloads from './views/downloads'
import About from './views/about'
import DeveloperBlogs from './views/developer-blogs'
import Home from './views/home'
import Contact from './views/contact'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Downloads} exact path="/downloads" />
        <Route component={About} exact path="/about" />
        <Route component={DeveloperBlogs} exact path="/developer-blogs" />
        <Route component={Home} exact path="/" />
        <Route component={Contact} exact path="/contact" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
