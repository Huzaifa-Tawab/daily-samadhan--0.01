import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './home.css'
import img1 from '../../assets/home-img.png';
import Portals from '../../components/Complaint Portals/Portals';
import Services from '../../components/services/Services';
import Footer from '../../components/Footer/Footer';
import Complaint from '../../components/File Complaints/Complaint';
import Ourplans from '../../components/Plans/Ourplans';
function Home() {
return (
    <div className="Home">
        <Navbar/>
        <div className="Home-main">
          <div>
          <p>Simplify <span>Your Complaints,</span> Daily Samadhan's <span>Way<span /></span></p>
          </div>
          <img className="Home-main-img" src={img1} />
        </div>
        {/* Portals */}
        <Portals/>
        {/* {Complaint} */}
        <Complaint />
        {/* Services */}
        <Services/>
        {/* Our Plans */}
        <Ourplans />
        {/* Footer */}
        <Footer/>
    </div>
)
}

export default Home