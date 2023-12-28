import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {  FaHamburger, FaMailBulk,  FaPhoneAlt,  } from 'react-icons/fa';
import './Header.css'
import logo from '../../assets/logo.svg'
import { getAuth } from 'firebase/auth';

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }
    function logout() {
    const auth = getAuth();
    auth.signOut();
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
        <div className={`nav-elements admin-nav  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/admin">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/adminpolicecomplaint">Police Complaints</NavLink>
            </li>
          </ul>
        </div>
      
          <button className='nav-login' onClick={logout}> Log Out </button>
        
      </div>
    </nav>
  )
}

export default Header