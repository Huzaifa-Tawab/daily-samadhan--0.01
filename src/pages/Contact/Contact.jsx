import React from 'react'
import './contact.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import email from '../../assets/Contact/email.svg'
import loc from '../../assets/Contact/location.svg'

function Contact() {
  return (
   <>
   <Navbar/>
   <div className="Form-main Contact-form">
    <div className="contact">
    <h1>Contact <span>Now</span></h1>
    <div className="contact-box">
        <div className="mail-div">
        <img src={email} alt="" />
        <h2>info@dailysamadhan.com</h2>
        </div>
        <div className="mail-div">
        <img src={loc} alt="" />
        <h2>PAN India</h2>
        </div>
    </div>
    </div>
    <div className="form-fields">
        <h3>Need Help with Filing Complaint?</h3>
        <div className="form-name">
            <span>Name</span>
            <input type="text" placeholder='Name'/>
        </div>
        <div className="form-email">
            <span>Email</span>
            <input type="email" name="" id="" placeholder='jhonson@abc.com'/>
        </div>
        <div className="form-number">
            <span>Phone No</span>
            <input type="number" placeholder='x-xxx-xxxx'/>
        </div>
        <div className="form-state">
            <span>State</span>
            <input type="text" placeholder='e.g Mumbai'/>
        </div>
        <div className="form-dispute">
            <span>Type of Dispute</span>
            <select name="dispute" id="abc">
            <option value=""></option>

                <option value="Good">Good</option>
                <option value="Best">Best</option>
                <option value="Excellent">Excellent</option>
            </select>
        </div>
        <div className="form-checkbox">
            <input type="checkbox" name="Terms & Conditions" id="" />
            <span>I have read & agreed to the company's Terms and Conditions, disclaimer and refund policy, and also ready to accept calls, SMS,  emails, etc.</span>
        </div>
            <button type='submit'>Submit</button>
    </div>
   
   </div>
   <div className="contact-button">
        <button>Contatct Us Now</button>
    </div>
   <Footer/>
   </>
  )
}

export default Contact