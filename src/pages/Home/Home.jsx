import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './home.css'
import img1 from '../../assets/home-img.png';
import Portals from '../../components/Complaint Portals/Portals';
import Services from '../../components/services/Services';
import Footer from '../../components/Footer/Footer';
import Complaint from '../../components/File Complaints/Complaint';
import Ourplans from '../../components/Plans/Ourplans';
import WhyChooseUs from '../../components/Why Choose Us/whychooseus';
import Offer from '../../components/Offers/offer';
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
        {/* About Us */}
        <div className="About-home">
          <h1>About <span>Us</span></h1>
        </div>
        {/* Portals */}
        <Portals/>
        {/* {Complaint} */}
        <Complaint />
        {/* Services */}
        {/* <Services/> */}
        {/* Why Choose Us */}
        <WhyChooseUs/>
        {/* Our Plans */}
        {/* <Ourplans /> */}
        {/* Offers */}
        <Offer />
        {/* Footer */}
        <Footer/>
    </div>
)
}

export default Home