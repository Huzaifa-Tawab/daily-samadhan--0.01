import React from 'react'
import './offer.css'
import check from '../../assets/Check.png'
import complaint from '../../assets/Offer/complaint.png'
import expor from '../../assets/Offer/export.png'
import end from '../../assets/Offer/end-to-end.png'
import { Link } from 'react-router-dom'

function Offer() {
  return (
    <>
     <div className="header-offer">
    <h1>What We <span>Offer</span></h1>
    </div>
    <div className="offer-cards">
        <div className="side-cards">
            <div className="side-card-head">
            <img src={complaint} alt="" />
            <h1>Complaint Assistance</h1>
            </div>
           {/* <p style={{marginTop: "10px"}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. At, temporibus?</p> */}
           <h1>₹99/-</h1>
           <h5>What's include</h5>
           <div className="check-text">
            <img src={check} alt="" />
            <p>2 calls from our team</p>
           </div>
           <div className="check-text">
            <img src={check} alt="" />
            <p>Explaining a procedure to file a complaint</p>
           </div>
           <div className="button-started">
           <Link className='button-started' to={"/contact/in"}>
            <button>Get Started</button>
            </Link>
           </div>
        </div>
        <div className="mid-card">
        <div className="side-card-head">
            <img src={end} alt="" />
            <h1>End-to-End Assistance</h1>
            </div>
           {/* <p style={{marginTop: "10px"}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. At, temporibus?</p> */}
           <h1>₹999/-</h1>
           <h5>What's include</h5>
           <div className="check-text">
            <img src={check} alt="" />
            <p>5 Calls from our team</p>
           </div>
           <div className="check-text">
            <img src={check} alt="" />
            <p>Form Filling / Complaint Registration By Our Experts</p>
           </div>
           <div className="check-text">
            <img src={check} alt="" />
            <p>Expert Advice</p>
           </div>
           <div className="check-text">
            <img src={check} alt="" />
            <p>Weekly Update</p>
           </div>
           <div className="check-text">
            <img src={check} alt="" />
            <p>Explaining a procedure to file a complaint</p>
           </div>
           <div className="button-started">
            <Link className='button-started' to={"/contact/in"}>
            <button>Get Started</button>
            </Link>
           </div>
        </div>

        <div className="side-cards">
        <div className="side-card-head">
            <img src={expor} alt="" />
            <h1>Export & Advice Complaint Assistsnce</h1>
            </div>
           {/* <p style={{marginTop: "10px"}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. At, temporibus?</p> */}
           <h1>₹499/-</h1>
           <h5>What's include</h5>
           <div className="check-text">
            <img src={check} alt="" />
            <p>4 calls from our team</p>
           </div>
           <div className="check-text">
            <img src={check} alt="" />
            <p>On call assistance to file the complaint</p>
           </div>
           {/* <div className="check-text">
            <img src={check} alt="" />
            <p>Dedicated support from our service dedicated expert</p>
           </div> */}
           <div className="button-started">
           <Link className='button-started' to={"/contact/in"}>
            <button>Get Started</button>
            </Link>
           </div>
        </div>
    </div>
    </>
  )
}

export default Offer