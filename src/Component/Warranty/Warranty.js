import React from 'react'
import "../../../src/Component/Warranty/Warranty.css"
import warrantyImage from "../../assets/hero_image.jpg"

function Warranty() {
  return (
    <section className='warranty-section'>
        <div className='warranty-container'>
                <div className="warranty-wrapper">

            <div className='warranty-image'>
                <img src={warrantyImage} alt="warranty" />
                </div>
            <div className='warranty-info'>
                <h3>Your Flexible Car Wash <br/>And Detailing Service</h3>
                <div className="cards">
                    <h4>Car Polish & Wax</h4>
                    <p>Polishing is a process of paintwork care and appearance enhancement maintenance.<br/> It helps to preserve or restore the pristine of your car's paint finish.</p>
                </div>
                <div className="cards">
                    <h4>Full Body Wash.</h4>
                    <p>Our service stations offer a range of quality car wash <br/>services.We will help you keep your car<br/>clean- inside and out. Our washing process<br/> ensures that your car is taken care of safely and<br/> efficiently, in a short amount of time. </p>
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Warranty
