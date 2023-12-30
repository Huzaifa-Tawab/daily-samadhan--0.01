import React from 'react'
import { FaWhatsapp, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './footer.css'
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom';
function Footer() {
    return (
        <div className="Footer">
            <div className="Footer-main">
                <div className="Footer-info">
                    <img src={logo} alt='logo' />
                    <p>Daily Samadhan is more than a platform; it's a collaborative space where individuals share insights and tips to create a supportive community. Whether you're a seasoned pro or facing a challenge for the first time, we're here to make your journey smoother and more successful. Join us on this empowering journey where solutions are not just sought but achieved. Welcome to Daily Samadhan, where resolutions become shared experiences.
                    </p>
                </div>
                <div className="Footer-office">
                    <h1>Office</h1>
                    <br />
                    {/* <br /> */}
                    <p>Office Number 0,<br />Somthing industrial area, <br />Abc City,<br /> India </p>
                    <br />
                    <p>dailysamadhanindia@gmail.com</p>
                    <br />
                    <p>+91 000 0000000</p>
                </div>
                <div className="Footer-links">
                    <h1>Links</h1>
                    <br />
                    {/* <br /> */}
                    <p>FAQ</p>
                    <br />
                    <p>Terms & Conditions</p>
                    <br />
                    <p>Reporting</p>
                    <br />
                    <p>Documentation</p>
                    <br />
                    <p>Sopport Policy</p>
                    <br />
                    <p>Privacy</p>
                    <br />

                </div>
                <div className="Footer-social">
                    <h1>Connect</h1>
                    <br />
                    {/* <br /> */}
                    <p>Never miss any update Sign-up now and get connect with Daily Samadhan </p>
<br />
                    <Link to="/contact/in"> <div className="newsletter">
                    
                    {/* <input type="text" /> */}
                    <div className="n"></div>
                    <button> Submit</button>
                    </div>
                    </Link>
                    <br />
                
                 
              <Link className='social-style' to="https://www.google.com">      <FaFacebook size={'40px'} className='Footer-social-icon'/></Link>
              <Link className='social-style' to="https://www.google.com">     <FaInstagram size={'40px'} className='Footer-social-icon'/></Link>
              <Link className='social-style' to="https://www.google.com">     <FaWhatsapp size={'40px'} className='Footer-social-icon'/></Link>
              <Link className='social-style' to="https://www.google.com">     <FaLinkedin size={'40px'} className='Footer-social-icon'/></Link>
                    
                </div>
            </div>
            <div className="Footer-watermark">
                <p>Design By SoftXion</p>
            </div>
        </div>
    )
}

export default Footer