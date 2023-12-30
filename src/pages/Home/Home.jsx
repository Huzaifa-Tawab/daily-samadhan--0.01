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
          <p>Welcome to Daily Samadhan, your comprehensive solution hub for navigating the maze of daily challenges and obstacles. Our mission is to empower individuals like you with the tools and information needed to overcome a myriad of issues that life throws your way. Whether you're grappling with consumer complaints, wrestling with the complexities of GST filing, or delving into the world of drone certificates, we've got you covered.
            Whether you're a seasoned pro at addressing grievances or someone facing a challenge for the first time, Daily Samadhan is here to make your journey smoother, more informed, and ultimately, more successful. Join us as we embark on this empowering journey together, where finding solutions becomes not just a task but a shared experience. Welcome to Daily Samadhan – where resolutions are not just sought; they're achieved.
          </p>
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