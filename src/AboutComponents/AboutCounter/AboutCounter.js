import React from 'react'
import "../AboutCounter/AboutCounter.css"

function AboutCounter() {
  return (
    <>
      <div className="counter">
          <div className="count">
            <h3>2104</h3>
            <p>Vehicle Washed</p>
          </div>
          <div className="count">
            <h3>1023</h3>
            <p>Happy Clients</p>
          </div>
          <div className="count">
            <h3>6</h3>
            <p>Team Members</p>
          </div>
          <div className="count">
            <h3>1007</h3>
            <p>Followers</p>
          </div>
      </div>
    </>
  )
}

export default AboutCounter
