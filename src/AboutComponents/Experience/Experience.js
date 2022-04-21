import React from 'react'
import expImg from "../../assets/exp.jpg"
import "../Experience/Experience.css"

function Experience() {
  return (
    <>
      <div className="experience-container">
          <div className="cards-image">
            <img src={expImg} alt="wash" />
            {/* <h2  className='after'>2 <br/>Years Of<br/> Experience</h2> */}
          </div>
          <div className="card-info">
              <h4>Experience</h4>
              <h2>Professional Car wash<br/> since <span>2020</span></h2>
              <p>we guarantees customer satisfaction, and<br/> also have responsible workers.We have mobile<br/> service and polishing that make us unique from others.</p>
          </div>
      </div>
    </>
  )
}

export default Experience
