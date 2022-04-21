import React from 'react'
import OwnerImage from "../../assets/ikka_profile.jpg"
import workerImage from "../../assets/testimonial.jpg"
import "../../Component/Owner/Owner.css"

function Owner() {
  return (
    <div>
      <div className="test-container">
      <div className='test-description'>
          <p>"We guarantee you the best car wash experience, exceptional service by our professional, attentive Customer Service Adviser, and hyper-clean facilities.Find your nearest location below for service offerings and pricings."  </p>
      <div className="owner-image">
        <img src={OwnerImage} alt="owner" />
      </div>
        <h1>--&nbsp;Shanavas</h1>
      </div>
        <div className="test-image">
          <img src={workerImage} alt="random" />
        </div>
      </div>
    </div>
  )
}

export default Owner

