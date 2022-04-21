import React from 'react'
import "../Features/Features.css"
import {FaHandsWash} from "react-icons/fa"
import advEngine from "../../assets/adv_engine.jpg"

function Features() {
  return (
    <>
    <div className="features-container">

        <div className="feature-card">
            <h3>Features</h3>
            <h4>Advanced Wash<br/>Service</h4>
            <p>We guarantee you the best Car wash experience, exceptional <br/>service by our professional service Advisor, and hyper-clean facilities.</p>

            <div className="extras">
            <div className="extra-features">
                <FaHandsWash/>
                <h4>Full body wash and polish.</h4>
            </div>
                    <div className="para">
                    <p>We guarantee you the best Car wash  <br/>experience, exceptionalservice by our professional<br/>  service Advisor, and hyper-clean facilities.</p>
                    </div>
                </div>
            
            <div className="extras2">
            <div className="extra-features">
                <FaHandsWash/>
                <h4>Mobile diagnostic service at home.</h4>
            </div>
            <div className="extra-features">
                <FaHandsWash/>
                <h4>24/7 emergency Hotline</h4>
            </div>
        </div>
        </div>

        <div className="features-card-2">
            <img src={advEngine} alt="repair" />
        </div>

    </div>
    </>
  )
}

export default Features
