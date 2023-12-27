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
          <p>Welcome to Daily Samadhan, your comprehensive solution hub for navigating life's daily challenges. Our mission is to empower individuals by providing tools and information to overcome various issues, from consumer complaints to GST filing and drone certificates. We simplify the intricate path to resolution with direct links and resources, believing that knowledge is the key to self-empowerment. Daily Samadhan is more than a platform; it's a collaborative space where individuals share insights and tips to create a supportive community. Whether you're a seasoned pro or facing a challenge for the first time, we're here to make your journey smoother and more successful. Join us on this empowering journey where solutions are not just sought but achieved. Welcome to Daily Samadhan, where resolutions become shared experiences.</p>
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