import React, { useEffect, useState } from 'react'
import "../../Component/Newsletter/Newletter.css"
import {AiOutlineArrowRight} from "react-icons/ai"


function Newsletter() {

        return (
    <div>
        <div className="newsletter-container">
            <div className="newsletter-info">
                <h3>Subscribe to our Newsletter<br/>to get weekly updates</h3>
                <p>Through continuous research and development.</p>
                
                <form action='#'>
                    <input type="email" name="email" placeholder='Enter your email' autoComplete='off'/>
                    <AiOutlineArrowRight/>
                </form>
            </div>
            <div className="newletter-offer">
                <h3>20% OFF</h3>
                <p>Get upto 20% discount <br/>on your first car wash.</p>
            </div>
        </div>
    </div>
  )
}

export default Newsletter