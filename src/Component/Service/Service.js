import React from 'react'
import "../Service/Service.css"
import CardData from "../../CardData.js"


  let newData = CardData.map((item, index) =>{
    return (
      <div className='card' key={index}>
          {item.icons}
          <h2>{item.heading}</h2>
          <p>{item.description}</p>
      </div>
    )
  })

function Service() {
  return (
    <div className='service-container'>
      <h3>What we do</h3>
      <h2>The future Of Car Wash <br/>and Repairing</h2>

      <div className="card-container">
        <div className="cards">
          {newData}
        </div>
      </div>

    </div>
  )
}

export default Service
