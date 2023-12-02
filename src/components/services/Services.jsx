import React from 'react'
import './services.css'
import ServiceCard from './ServiceCard'
import serviceImg from '../../assets/services/service.png'
import Frame2 from '../../assets/services/Frame 2.png'
import Frame3 from '../../assets/services/Frame 3.png'
import Frame4 from '../../assets/services/Frame 4.png'
import Frame5 from '../../assets/services/Frame 5.png'
import Frame6 from '../../assets/services/Frame 6.png'
function Services() {
  return (
    <div className="Services">
      <p>Our <span>Services</span></p>
      <div id="Services-content">
        <ServiceCard Data={{
          title: 'Comnsumer Complaint',
          image: serviceImg,
          decs: 'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        }} />
        <ServiceCard Data={{
          title: 'Company Registration',
          image: Frame2,
          decs: 'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        }} />
         <ServiceCard Data={{
          title: 'ITR Filling',
          image: Frame3,
          decs: 'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        }} />
         <ServiceCard Data={{
          title: 'FSSAI Registration/Renewal',
          image: Frame4,
          decs: 'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        }} />
         <ServiceCard Data={{
          title: 'Legal Drafting',
          image: Frame5,
          decs: 'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        }} />
        <ServiceCard Data={{
          title: 'Trademark Registration onlin',
          image: Frame6,
          decs: 'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        }} />
      </div>
    </div>
  )
}

export default Services