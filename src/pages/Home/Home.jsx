import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './home.css'
import img1 from '../../assets/home-img.jpg';
import Portals from '../../components/Complaint Portals/Portals';
import Services from '../../components/services/Services';
import Footer from '../../components/Footer/Footer';
function Home() {
return (
    <div className="Home">
        <Navbar/>
        <div className="Home-main">
          <div>
          <p>Online <span>Complaint</span> Portal</p>
          </div>
          <img className="Home-main-img" src={img1} />
        </div>
        {/* Portals */}
        <Portals/>
        {/* Services */}
        <Services/>
        {/* Footer */}
        <Footer/>
    </div>
)
}

export default Home