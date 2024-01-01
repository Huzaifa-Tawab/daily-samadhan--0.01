import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../assets/about/Hero.svg';
import Img1 from '../../assets/about/about1.svg';
import Img2 from '../../assets/about/about2.svg';
import Img3 from '../../assets/about/about3.svg';
import Whyus from '../../assets/about/whyus.png';
import question from '../../assets/about/questions.png';
import './about.css'
import Footer from '../../components/Footer/Footer';
import Frame46 from '../../assets/about/Frame 46.svg'
import Frame47 from '../../assets/about/Frame 47.svg'
import Frame48 from '../../assets/about/Frame 48.svg'


function About() {
    return (

        <>
            <Navbar />
            <div className="About">
                <div className="About-hero">
                    <img src={Hero}/>
                    <h1><span>Welcome</span> to Daily Samadhan!</h1>
                </div>
                <div className="About-flex">
                    <img src={Img2} alt="" />
                    <div className="About-flex-content">
                        <h1>Who We Are</h1>
                            <p>
                            At Daily Samadhan, we're your trusted ally in the everyday battles of life. Our mission is to empower you with the information and resources you need to overcome your daily struggles and grievances. We understand that life can throw a myriad of challenges your way, from consumer complaints to navigating the complexities of GST filing or obtaining drone certificates. That's where we come in. We are your go-to destination for finding solutions to these challenges and more.
                            </p>
                    </div>
                </div>
                <div className="About-flex About-flex-mid">
                    
                    <div className="About-flex-content">
                        <h1>Our Vision</h1>
                        <p>
                        Our vision is simple yet powerful - we believe in self-empowerment through information. We understand that knowledge is a potent tool, and when wielded effectively, it can transform a seemingly insurmountable problem into a manageable one. We are committed to being your guiding light on the path to resolution, making your journey easier and more efficient.
                        </p>
                    </div>
                    <img src={Img1} alt="" />
                </div>
                <div className="About-flex">
                    <img src={Img3} alt="" />
                    <div className="About-flex-content">
                        <h1>What We Offer</h1>
                        <p>
                        At Daily Samadhan, we are dedicated to offering consultation services and expert assistance for filing any type of grievance mentioned on our portal. We understand that dealing with various grievances can be overwhelming, which is why we're here to simplify the process and provide you with professional guidance every step of the way.
                        </p>
                    </div>
                </div>
                <div className="About-services">
                    <h1>Our <span>Comprehensive</span> Services</h1>
                <div className="About-services-flex">
                <div className="About-services-card">
                    <img src={Frame46} alt="" style={{width: "60px"}}/>
                <strong style={{fontSize:"1.5rem"}}> Consultation Services </strong>
                Our team of experts is ready to provide you with personalized consultation services tailored to your specific grievance. Whether you're facing consumer complaints, GST issues, or other challenges, we offer professional advice to help you navigate the complexities and find solutions.
                </div>
                <div className="About-services-card">
                    <img src={Frame47} alt="" style={{width: "60px"}}/>
                <strong style={{fontSize:"1.4rem"}}> Grievance Filing Assistance</strong>
                We take the guesswork out of the filing process. Whether it's submitting a consumer complaint, managing GST-related matters, or addressing any other grievance mentioned in our portal, we offer hands-on assistance to ensure your filings are accurate and efficient.
                </div>
                <div className="About-services-card">
                    <img src={Frame48} alt="" style={{width: "60px"}}/>
                <strong style={{fontSize:"1.5rem"}}> Expert Support</strong> 
                With Daily Samadhan, you have access to a team of seasoned professionals who are well-versed in resolving a wide range of grievances. We're here to answer your questions, address your concerns, and guide you toward successful resolutions.
                </div>
                </div>
                </div>
                {/* <div className="About-why-us">
                    <img src={Whyus} alt="" />
                </div> */}
                <div className="Why-choose">
                    <div className="typography">
                        <h1>Why Choose Daily Samadhan</h1>
                        <p>
                            <strong>Reliable Resources: </strong>We curate and provide the most reliable and up-to-date resources to ensure you have the information you need at your fingertips.
                            <br />
                            <strong>Empowerment Through Information: </strong>We firmly believe that an informed individual is an empowered individual. Our goal is to equip you with the knowledge required to tackle life's challenges head-on.
                            <br />
                            <strong>Simplicity and Convenience: </strong>We understand that resolving grievances can be complex, so we strive to simplify the process by offering straightforward, easy-to-follow solutions.
                            <br />
                            <strong>Your Everyday Companion: </strong>Think of us as your partner in your daily journey toward resolution. We're here for you every day, ready to help you overcome your struggles.
                        </p>
                    </div>
                    <div className="question-marks">
                        <img src={question} alt="" />
                    </div>
                </div>
                <div className="About-starting">
                <h1>Get <span>Started</span> Today</h1>
                <div className="About-starting-box">
                    <p>
                    Don't let daily struggles and grievances hold you back. Daily Samadhan is here to provide the guidance and support you need. Explore our website, access our resources, and take the first step toward resolving your challenges.
                    Join us on this empowering journey at Daily Samadhan, and let's work together to make your life easier, one resolution at a time!
                    </p>
                </div>
                </div>
                
            </div>
            <Footer/>
            
        </>
    )
}

export default About