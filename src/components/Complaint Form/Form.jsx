import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import './Form.css'
import delhi from '../../assets/Cities/Delhi.jpeg'
import uttarpardesh from '../../assets/Cities/Uttarpradesh.jpeg'
import haryana from '../../assets/Cities/haryana.jpeg'
import rajasthan from '../../assets/Cities/Rajasthan.jpeg'
import maharashtra from '../../assets/Cities/maharashtra.png'
import { useParams } from 'react-router-dom'
import Popup from '../Modal/modal'




function Form(props) {
  let id=props.id;
  let x=useParams()
  id=x.id;
  console.log(id)

  return (
   <>
   <Navbar />
   <div className="Form-main">
    <h1>{id}</h1>
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
      <div class="middle">
    <div class="text">Delhi</div>
  </div>
      </div>
        </div>
        <div class="city-Portal-card">
      <div className="con">
      <img src={uttarpardesh}/>
      <div class="middle">
    <div class="text">Uttar Pradesh</div>
  </div>
      </div>
        </div>
        <div class="city-Portal-card">
      <div className="con">
      <img src={haryana}/>
      <div class="middle">
    <div class="text">Haryana</div>
  </div>
      </div>
        </div>
        <div class="city-Portal-card">
      <div className="con">
      <img src={rajasthan}/>
      <div class="middle">
    <div class="text">Rajasthan</div>
  </div>
      </div>
        </div>
        <div class="city-Portal-card">
      <div className="con">
      <img src={maharashtra}/>
      <div class="middle">
    <div class="text">Maharashtra</div>
  </div>
      </div>
        </div>
        </div>
        <div className="city-portal">
        <div class="city-Portal-card">
      <div className="con">
      <img src={maharashtra}/>
      <div class="middle">
    <div class="text">Madhya Pradesh</div>
  </div>
      </div>
        </div>
        <div class="city-Portal-card">
      <div className="con">
      <img src={maharashtra}/>
      <div class="middle">
    <div class="text">Gujarat</div>
  </div>
      </div>
        </div>
        <div class="city-Portal-card">
      <div className="con">
      <img src={maharashtra}/>
      <div class="middle">
    <div class="text">Tamil Nadu</div>
  </div>
      </div>
        </div>
        <div class="city-Portal-card">
      <div className="con">
      <img src={maharashtra}/>
           <div class="middle">
    <div class="text">Himachal Pradesh</div>
  </div>
      </div>
        </div>
        <div class="city-Portal-card">
      <div className="con">
      <img src={maharashtra}/>
      <div class="middle">
    <div class="text">Bihar</div>
  </div>
      </div>
        </div>
   </div>
{/* File Complaint */}
<div className="file-complaint-fields">
    <div className="complain-file">
        <p>Want us to file your Complaint? <br />
          <Popup/></p>
    </div>
    {/* <div className="not-city">
        <p>Not Able to find your city ? <br /> give us a call on <br /> 1800 0000 0000</p>
    </div> */}
</div>

   <Footer />
   </>
  )
}

export default Form