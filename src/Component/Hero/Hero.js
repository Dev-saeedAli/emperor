import React, { Fragment } from 'react'
import "../Hero/Hero.css"
import Heroimage from "../../assets/tetsimonial2-min.jpg"
import {AiOutlineArrowRight} from "react-icons/ai"
import {Link} from "react-router-dom"

function Hero() {
  return (
    <Fragment>
        <section className='section-hero'>
            <div className="hero-container">
                <div className="hero-info">
                   <h1><span className='emp'>EMPEROR </span> <br/>  <span className='emp2'>CAR WASH </span> <br/>AND POLISHING..</h1> 
                    <div className="cta">
                    <button><Link to={'/about'}>Learn More</Link>  <AiOutlineArrowRight/></button>
                    <button><a href='#footer'>Contact Us</a><AiOutlineArrowRight/></button>
                    </div>
                </div>
                <div className="hero-img">
                    <img src={Heroimage} alt="Hero" />
                </div>
            </div>
        </section>
    </Fragment>
  )
}

export default Hero
