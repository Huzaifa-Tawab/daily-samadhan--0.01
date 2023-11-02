import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {  FaHamburger, FaMailBulk,  FaPhoneAlt,  } from 'react-icons/fa';
import './navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="pre-nav">
        <div className="pre-nav-contact">
          <p> <FaPhoneAlt/> 03169301238 </p>
          <p> <FaMailBulk/> 03169301238 </p>
        </div>
        <div className="pre-nav-info">

        </div>
      </div>
      <div className="container">
        <div className="logo">
         <img src={logo} alt='logo' />
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
        <FaHamburger/>

        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/complaints">Complaints</NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            <li>
              <NavLink to="/faq">FAQ</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      
          <button className='nav-login'> Login </button>
        
      </div>
    </nav>
  )
}

export default Navbar