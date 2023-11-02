import React from 'react'
import './services.css'
function ServiceCard({ Data }) {

    return (
        <div className="ServiceCard">
            <img src={Data.image} alt="Card img" />
            <h1>{Data.title}</h1>
            <p>{Data.decs}</p>
            
        </div>
    )
}

export default ServiceCard