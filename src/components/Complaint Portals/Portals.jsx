import React from 'react'
import './portals.css'
import police from '../../assets/portals/police.png'
import Frame43 from '../../assets/portals/Frame 43.jpg'
import Frame42 from '../../assets/portals/Frame 42.jpg'
import Frame41 from '../../assets/portals/Frame 41.png'
import Frame25 from '../../assets/portals/Frame 25.jpg'
import Frame24 from '../../assets/portals/Frame 24.jpg'
import Frame23 from '../../assets/portals/Frame 23.jpg'
import Frame21 from '../../assets/portals/Frame 21.jpg'
import Frame47 from '../../assets/portals/Frame 47.jpg'
import Frame46 from '../../assets/portals/Frame 46.jpg'
import Frame45 from '../../assets/portals/Frame 45.jpg'
import Frame44 from '../../assets/portals/Frame 44.jpg'
function Portals() {
  return (
    <div className="Portal">
    <p>Online <span style={{color:"#31A049"}}>Complaint Portals</span></p>
    <div id="Portal-content">
    <div class="Portal-content-card">
      <div className="con">
      <img src={Frame43}/>
          <p>Industrial Dispute</p>
      </div>
        </div>

        <div class="Portal-content-card">
      <div className="con">
      <img src={Frame42}/>
          <p>e-Filling Consumer Commision</p>
      </div>
        </div>

        <div class="Portal-content-card">
      <div className="con">
      <img src={Frame25}/>
          <p> Consumer Help</p>
      </div>
        </div>

        <div class="Portal-content-card">
      <div className="con">
      <img src={Frame24}/>
          <p>Cyber Crime</p>
      </div>
        </div>

        <div class="Portal-content-card">
      <div className="con">
      <img src={Frame23}/>
          <p>Women Helpline</p>
      </div>
        </div>

        <div class="Portal-content-card">
      <div className="con">
      <img src={Frame21}/>
          <p>Lost And Found</p>
      </div>
        </div>

        <div class="Portal-content-card">
      <div className="con">
      <img src={Frame41}/>
          <p>Consumer Dispute</p>
      </div>
        </div>

        <div class="Portal-content-card">
      <div className="con">
      <img src={police}/>
      <a href="/form">
          <p>Police Complaint</p>
          </a>
      </div>
        </div>
        
        <div class="Portal-content-card">
      <div className="con">
      <img src={Frame44}/>
          <p>Telecom Dispute</p>
      </div>
        </div>

        
        <div class="Portal-content-card">
      <div className="con">
      <img src={Frame45}/>
          <p>Food Safety</p>
      </div>
        </div>

        
        <div class="Portal-content-card">
      <div className="con">
      <img src={Frame46}/>
          <p>Drone Certificate Flying License</p>
      </div>
        </div>

        
        <div class="Portal-content-card">
      <div className="con">
      <img src={Frame47}/>
          <p>National Test House</p>
      </div>
        </div>
       
        
    
    
    
       
    
      </div>
      </div>
  )
}

export default Portals