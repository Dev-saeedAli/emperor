import React from 'react'
import "../Footer/Footer.css"
import {BsClockHistory} from "react-icons/bs"
import {BsTelephoneForward} from "react-icons/bs"
import {GoLocation} from "react-icons/go"
import {AiOutlineArrowRight} from 'react-icons/ai'
// import {FooterImage} from "../../assets/footer-image.jpg"

function Footer() {
  return (
    <div className='footer-container' id='footer'>
        <div className="footer-contact">
            <h3>Need Help ?<br/>We Are Here<br/>to help you.</h3>
            <button className='cta'>Contact Us <AiOutlineArrowRight/></button>
        </div>

        <div className="footer-details">
           <div className="detail">
            <div className="icons"><BsClockHistory/></div>
                <div className="main-details">
                    <h4>We Are Open </h4>
                    <p>Sun-Sat, 8 am - 12 pm</p>
                </div>
           </div>

           <div className="detail">
        <div className="icons"><BsTelephoneForward/></div>
            <div className="main-details">
                <h4>Call Us 24/7</h4>
                <p>050-756-8390</p>
            </div>
        </div>

        <div className="detail">
            <div className="icons"><GoLocation/></div>
                <div className="main-details">
                    <h4>We Are Here </h4>
                    <p>3 Industerial Area 3 - Umm Al Quwain</p>
                </div>
           </div>
        </div>
    </div>
  )
}

export default Footer
