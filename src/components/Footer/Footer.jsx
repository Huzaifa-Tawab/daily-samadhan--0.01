import React from 'react'
import { FaWhatsapp, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './footer.css'
import logo from '../../assets/fotlogo.gif'
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
                    <br />
                    <h1>Office</h1>
                    <br />
                    {/* <br /> */}
                    <p>PAN India</p>
                    <br />
                    <p>info@dailysamadhan.com</p>
                    <br />
                    {/* <p>+91 000 0000000</p> */}
                </div>
                <div className="Footer-links">
                    <br />
                    <h1>Links</h1>
                    <br />
                    {/* <br /> */}
                    <p>Home</p>
                    <br />
                    <p>Complaints</p>
                    <br />
                    <p>Services</p>
                    <br />
                    <p>FAQ's</p>
                    <br />
                    <p>Contact</p>

                </div>
                <div className="Footer-social">
                    <br />
                    <h1>Connect</h1>
                    <br />
                    <br />
                  
                    {/* <p>Never miss any update Sign-up now and get connect with Daily Samadhan </p>
<br />
                    <Link to="/contact/in"> <div className="newsletter">
                    
                    <input type="text" />
                    <div className="n"></div>
                    <button> Submit</button>
                    </div>
                    </Link>
                    <br /> */}
                
                 
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