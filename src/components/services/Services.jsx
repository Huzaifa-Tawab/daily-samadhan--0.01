import React from 'react'
import './services.css'
import ServiceCard from './ServiceCard'
import serviceImg from '../../assets/services/service.png'
function Services() {
  return (
    <div className="Services">
      <p>Our <span>Services</span></p>
      <div id="Services-content">
        <ServiceCard Data={{
          title: 'Katsuko Saruhashi',
          image: serviceImg,
          decs: 'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        }} />
        <ServiceCard Data={{
          title: 'Katsuko Saruhashi',
          image: serviceImg,
          decs: 'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        }} />
         <ServiceCard Data={{
          title: 'Katsuko Saruhashi',
          image: serviceImg,
          decs: 'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        }} />
         <ServiceCard Data={{
          title: 'Katsuko Saruhashi',
          image: serviceImg,
          decs: 'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        }} />
         <ServiceCard Data={{
          title: 'Katsuko Saruhashi',
          image: serviceImg,
          decs: 'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        }} />
      </div>
    </div>
  )
}

export default Services