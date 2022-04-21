import React from 'react'
import Ford from "../../assets/ford_logo.png"
import Kia from "../../assets/kia_logo.png"
import Mini from "../../assets/mini_logo.png"
import Volks from "../../assets/volkswegen_logo.png"
import Porche from "../../assets/porche_logo.png"
import chevrolet from "../../assets/chevrolet.jpg"
import "../Brands/Brands.css"

function Brands() {
  return (
    <div className='brand-container'>
        <h1>We have covered all Brands.</h1>
      <div className="brands">
        <div className="brand-logo">
            <img src={Ford} alt="logo" />
        </div>
        <div className="brand-logo">
            <img src={Kia} alt="logo" />
        </div>
        <div className="brand-logo">
            <img src={Volks} alt="logo" />
        </div>
        <div className="brand-logo">
            <img src={Mini} alt="logo" />
        </div>
        <div className="brand-logo">
            <img src={chevrolet} alt="logo" />
        </div>
        <div className="brand-logo">
            <img src={Porche} alt="logo" />
        </div>
      </div>
    </div>
  )
}

export default Brands
