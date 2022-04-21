import React from 'react'
import  '../Workers/Workers.css'
import workerImage1 from "../../assets/worker-1.jpg"
import workerImage2 from "../../assets/worker-2.jpg"
import workerImage3 from "../../assets/worker-3.jpg"
import workerImage4 from "../../assets/worker-4.jpg"

function Workers() {


  return (
    <>
      <div className="workers-container">
          <div className="workers-info">
            <h2>Our Team</h2>
            <p>Our Professional<br/> Workers</p>
          </div>

          <div className="workers">
                <div className="worker-image">
                    <img src={workerImage3} alt="emp" />
                    <h3>Stephen</h3>
                </div>
                
                <div className="worker-image">
                    <img src={workerImage1} alt="emp" />
                    <h3>DOMINIC</h3>
                </div>

                <div className="worker-image">
                    <img src={workerImage2} alt="emp" />
                    <h3>Mosa</h3>
                </div>
                
                <div className="worker-image">
                    <img src={workerImage4} alt="emp" />
                    <h3>Francis</h3>
                </div>
          </div>
      </div>
    </>
  )
}

export default Workers
