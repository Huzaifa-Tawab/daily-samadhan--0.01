import React from 'react'
import './whychooseus.css'
import govt from '../../assets/choose/govt.png'
import customer from '../../assets/choose/customer.png'
import experts from '../../assets/choose/experts.png'
import security from '../../assets/choose/security.png'
import price from '../../assets/choose/price.png'
import effective from '../../assets/choose/effective.png'

function WhyChooseUs() {
  return (
    <>
    <div className="header-choose">
    <h1>Why <span>Choose</span> Us</h1>
    </div>
    <div className="whychooseus">
    <div className="content-whychoose">
        <div className="govt">
        <img src={govt} alt="" />
        <h1>Recognise by Govt. (MSME) </h1>
        </div>
        <div className="govt">
        <img src={customer} alt="" />
        <h1>1Lakh+ Happy Customers </h1>
        </div>
        <div className="govt">
        <img src={experts} alt="" />
        <h1>Trained Professionla Experts</h1>
        </div>
       
        
    </div>
    <div className="content2">
    <div className="govt">
        <img src={security} alt="" />
        <h1>Data Security and Trust </h1>
        </div>
        <div className="govt">
            <img src={price} alt="" />
        <h1>Affordable Price </h1>
        </div>
        <div className="govt">
        <img src={effective} alt="" />
        <h1>Efficient and Effective</h1>
        </div>
        </div>
    </div>
    </>
  )
}

export default WhyChooseUs