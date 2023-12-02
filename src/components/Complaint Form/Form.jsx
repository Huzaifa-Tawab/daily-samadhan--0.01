import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import './Form.css'
import delhi from '../../assets/Cities/Delhi.jpeg'
import uttarpardesh from '../../assets/Cities/Uttarpradesh.jpeg'
import haryana from '../../assets/Cities/haryana.jpeg'
import rajasthan from '../../assets/Cities/Rajasthan.jpeg'
import maharashtra from '../../assets/Cities/maharashtra.png'




function Form() {
  return (
   <>
   <Navbar />
   <div className="Form-main">
    <h1>Police Complaint</h1>
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
   {/* Cities */}
   <div className="city-portal">
   <div class="city-Portal-card">
      <div className="con">
      <img src={delhi}/>
          {/* <p>Delhi</p> */}
      </div>
        </div>
        <div class="city-Portal-card">
      <div className="con">
      <img src={uttarpardesh}/>
          {/* <p>Uttar Pardesh</p> */}
      </div>
        </div>
        <div class="city-Portal-card">
      <div className="con">
      <img src={haryana}/>
          {/* <p>Haryana</p> */}
      </div>
        </div>
        <div class="city-Portal-card">
      <div className="con">
      <img src={rajasthan}/>
          {/* <p>Rajasthan</p> */}
      </div>
        </div>
        <div class="city-Portal-card">
      <div className="con">
      <img src={maharashtra}/>
          {/* <p>Maharashtra</p> */}
      </div>
        </div>
        </div>
        <div className="city-portal">
        <div class="city-Portal-card">
      <div className="con">
      {/* <img src={Frame43}/> */}
          <p>Madhya Pardesh</p>
      </div>
        </div>
        <div class="city-Portal-card">
      <div className="con">
      {/* <img src={Frame43}/> */}
          <p>Gujarat</p>
      </div>
        </div>
        <div class="city-Portal-card">
      <div className="con">
      {/* <img src={Frame43}/> */}
          <p>Tamil Nadu</p>
      </div>
        </div>
        <div class="city-Portal-card">
      <div className="con">
      {/* <img src={Frame43}/> */}
          <p>Himachal Pardesh</p>
      </div>
        </div>
        <div class="city-Portal-card">
      <div className="con">
      {/* <img src={Frame43}/> */}
          <p>Bihar</p>
      </div>
        </div>
   </div>
{/* File Complaint */}
<div className="file-complaint-fields">
    <div className="complain-file">
        <p>Want us to file your Complaint? <br />
          <a href="">Click Here</a></p>
    </div>
    <div className="not-city">
        <p>Not Able to find your city ? <br /> give us a call on <br /> 1800 0000 0000</p>
    </div>
</div>
   <Footer />
   </>
  )
}

export default Form