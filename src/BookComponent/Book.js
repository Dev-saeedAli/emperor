import React, {useEffect, useRef, useState} from 'react'
import "../../src/BookComponent/Book.css"
import {AiOutlineArrowRight} from "react-icons/ai"
import emailjs from "emailjs-com"

function Book() {
  const [state, setState] = useState(false)
  
  //submitting to email js
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0258axn', 'template_xx1l814', form.current, 'DofQ_cGWUupdelyDr')
      .then((result) => {
          setState(true)
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()

      setTimeout(()=>{
        setState(false)
      }, 7000)
  };

  

  return (
    <div className="book-container">
    <div className="book-header">
        <h3>Book Your Car wash <br/>Appointment</h3>
    <p>Choosing car wash is a constant process <br/>in the life of every motorist.We <br/>try to give you only positive emotions.<br/>Entrust your car cleaning to our professionals.</p>
    </div>

    <div className="form-details">
        <form ref={form} onSubmit={sendEmail}>
            <span className='firstSpan'>Appointment Details</span>
            <input type="date" name="date" id="date" placeholder='Date' required autoComplete='off'/>
            <input type="time" name="time" id="time" placeholder='Time' required autoComplete='off'/>
            <select name="service" id="service" required autoComplete='off'>
                <option selected>Select a package</option>
                <option>Basic Wash</option>
                <option>Delux Wash</option>
                <option>Advanced Wash & Polish</option>
            </select>

            <span className='firstSpan'>Contact Details</span>
            <input type="text" name="username" id="username" placeholder='Your Name' required autoComplete='off'/>
            <input type="number" name="number" id="number" placeholder='Phone' required autoComplete='off'/>
            <input type="email" name="email" id="email" placeholder='Email Address' required autoComplete='off'/>
            <textarea name="message" id="message" placeholder='You Message'></textarea>
            <button type='submit' className='cta'>Book Now <AiOutlineArrowRight/></button>
            {state && <p>Your Wash Package has been successfully submitted. We will contact you soon.</p>}
        </form>
    </div>
    </div>
  )
}

export default Book
