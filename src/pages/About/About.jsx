import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../assets/about/Hero.png';
import Img1 from '../../assets/about/about1.png';
import Img2 from '../../assets/about/about2.png';
import Img3 from '../../assets/about/about3.png';
import Whyus from '../../assets/about/whyus.png';
import './about.css'
function About() {
    return (

        <>
            <Navbar />
            <div className="About">
                <div className="About-hero">
                    <img src={Hero} />
                    <p>Welcome to Daily Samadhan!</p>
                </div>
                <div className="About-flex">
                    <img src={Img2} alt="" />
                    <div className="About-flex-content">
                        <span>Who We Are</span>
                        <p>
                        At Daily Samadhan, we're your trusted ally in the everyday battles of life. Our mission is to empower you with the information and resources you need to overcome your daily struggles and grievances. We understand that life can throw a myriad of challenges your way, from consumer complaints to navigating the complexities of GST filing or obtaining drone certificates. That's where we come in. We are your go-to destination for finding solutions to these challenges and more.
                        </p>
                    </div>
                </div>
                <div className="About-flex">
                    
                    <div className="About-flex-content">
                        <span>Who We Are</span>
                        <p>
                        At Daily Samadhan, we're your trusted ally in the everyday battles of life. Our mission is to empower you with the information and resources you need to overcome your daily struggles and grievances. We understand that life can throw a myriad of challenges your way, from consumer complaints to navigating the complexities of GST filing or obtaining drone certificates. That's where we come in. We are your go-to destination for finding solutions to these challenges and more.
                        </p>
                    </div>
                    <img src={Img1} alt="" />
                </div>
                <div className="About-flex">
                    <img src={Img3} alt="" />
                    <div className="About-flex-content">
                        <span>Who We Are</span>
                        <p>
                        At Daily Samadhan, we're your trusted ally in the everyday battles of life. Our mission is to empower you with the information and resources you need to overcome your daily struggles and grievances. We understand that life can throw a myriad of challenges your way, from consumer complaints to navigating the complexities of GST filing or obtaining drone certificates. That's where we come in. We are your go-to destination for finding solutions to these challenges and more.
                        </p>
                    </div>
                </div>
                <div className="About-services">
                    <span>Our Comprehensive Services</span>
                <div className="About-services-flex">
                <div className="About-services-card">
                Consultation Services
                Our team of experts is ready to provide you with personalized consultation services tailored to your specific grievance. Whether you're facing consumer complaints, GST issues, or other challenges, we offer professional advice to help you navigate the complexities and find solutions.
                </div>
                <div className="About-services-card">
                Consultation Services
                Our team of experts is ready to provide you with personalized consultation services tailored to your specific grievance. Whether you're facing consumer complaints, GST issues, or other challenges, we offer professional advice to help you navigate the complexities and find solutions.
                </div>
                <div className="About-services-card">
                Consultation Services
                Our team of experts is ready to provide you with personalized consultation services tailored to your specific grievance. Whether you're facing consumer complaints, GST issues, or other challenges, we offer professional advice to help you navigate the complexities and find solutions.
                </div>
                </div>
                </div>
                <div className="About-why-us">
                    <img src={Whyus} alt="" />
                </div>
            </div>
            
        </>
    )
}

export default About