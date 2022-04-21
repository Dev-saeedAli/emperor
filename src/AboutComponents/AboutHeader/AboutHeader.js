import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import bgimg from "../../assets/hero2.jpg"
import "../AboutHeader/AboutHeader.css"
import {Link} from "react-router-dom"

function AboutHeader() {
  return (
    <div>
        <div className='about-container'>
      <div className="about">

        <div className='about-info'>
        <Link to={'/'}>
          <AiOutlineArrowLeft/>
        </Link>
        <Link to={'/services'}>
          <AiOutlineArrowRight/>
        </Link>
          <h1>Most Advanced <br/><span className='text-yellow'>Car wash </span>in uaq</h1>  
          <p>Learn More <AiOutlineArrowRight/></p>
        </div>

            <div className="about-description">
              <p>A car wash is a facility used to clean the exterior and in some <br/>cases the interior of motor vehicles. Car washes can be self-service, full-service <br/>(with attendants who wash the vehicle).</p>
            </div>
        </div>  

        <div className="about-image"></div>
      
    </div>
    </div>
  )
}

export default AboutHeader
