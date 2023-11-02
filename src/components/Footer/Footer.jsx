import React from 'react'
import { FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa';
import './footer.css'
import logo from '../../assets/logo.png'
function Footer() {
    return (
        <div className="Footer">
            <div className="Footer-main">
                <div className="Footer-info">
                    <img src={logo} alt='logo' />
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className="Footer-office">
                    <h1>Office</h1>
                    <br />
                    <br />
                    <p>Office Number 0,<br />Somthing industrial area, <br />Abc City,<br /> India </p>
                    <br />
                    <p>info@demo.com</p>
                    <br />
                    <p>+91 000 0000000</p>
                </div>
                <div className="Footer-links">
                    <h1>Links</h1>
                    <br />
                    <br />
                    <p>Privacy Policy</p>
                    <br />
                    <p>Privacy Policy</p>
                    <br />
                    <p>Privacy Policy</p>
                    <br />
                    <p>Privacy Policy</p>
                    <br />

                </div>
                <div className="Footer-social">
                    <h1>Connect</h1>
                    <br />
                    <br />
                    <p>never miss any update Sign-up now <br />and get connect with Daily Samadhan </p>
<br />
                    <div className="newsletter">
                    
                    {/* <input type="text" /> */}
                    <div className="n"></div>
                    <button>Submit</button>
                    </div>
                    <br />
                
                 
                    <FaFacebook size={'40px'} className='Footer-social-icon' />
                    <FaInstagram size={'40px'} className='Footer-social-icon'/>
                    <FaWhatsapp size={'40px'} className='Footer-social-icon'/>
                    <FaFacebook size={'40px'} className='Footer-social-icon'/>
                    
                </div>
            </div>
            <div className="Footer-watermark">
                <p>Design By SoftXion</p>
            </div>
        </div>
    )
}

export default Footer