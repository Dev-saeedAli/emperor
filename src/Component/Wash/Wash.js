import React from 'react'
import "../../../src/Component/Wash/Wash.css"
import WashImage from "../../assets/experience.jpg"
import TechnicianImage from "../../assets/price_info2.jpg"
import {Link} from "react-router-dom"

function Wash() {
  return (
   <section>
       <div className='wash-container'>
           {/* Wash Information */}
           <div className='wash-info'>
               <div className="wash-img">      
               <img src={WashImage} alt="wash-img" />
               </div>

               <div className="wash-description">
               <h4>Car Wash</h4>
               <h5>Starting At 20 AED</h5>
               <p>We guarantee you the best car wash experience, exceptional services from our professional attentive Customer Service, Adviser and hyper clean facilities.</p>
               <button className='cta cta-main'><a href='#footer'>Contact Us</a></button>
               </div>
           </div>

           {/* Technician description */}
           <div className='technician-info'>
               <img src={TechnicianImage} alt="technician" />
               <h4>Get Our technician at your doorstep.</h4>
               <p>Contact <span>050-756-8390</span></p>
           </div>
       </div>
   </section>
  )
}

export default Wash
