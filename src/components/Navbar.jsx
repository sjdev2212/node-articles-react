import React from 'react'
import '../styles/Navbar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <main className="navbar-container">
        <nav className="navbar">
            <ul>
          
            <li><Link to="/login">Sign in</Link></li>
            <li><Link to="/articles">Browse Articles</Link></li>
            <li><Link to="/register">Sign up</Link></li>
            </ul>
        </nav>
    </main>
  )
}

export default Navbar