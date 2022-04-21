import React from 'react'
import "../PricingComponent/Pricing.css"
import {AiOutlineArrowRight} from "react-icons/ai"
import {useNavigate} from "react-router-dom"

function Pricing() {
    const navigate = useNavigate()
  return (
      <>
        <div className='price-container'>
            <div className="price-header">
                <h3>Adorable Pricing<br/>For EveryOne</h3>
                <p>Choosing car wash is a constant process <br/>in the life of every motorist.We <br/>try to give you only positive emotions.<br/>Entrust your car cleaning to our professionals.</p>
            </div>

            <div className="prices">
                <div className="price">
                <h2>20 AED</h2>
                <h3>Deluxe Wash</h3>
                <ul className='price-1'>
                    <li><a href='#'>Exterior Hand Wash</a></li>
                    <li><a href='#'>Wheel Shining</a></li>
                    <li><a href='#'>Tyre Dressing</a></li>
                    <li><a href='#'>Windows In & Out</a></li>
                    <li><a href='#'>Interior Vaccum</a></li>
                    <li><a href='#'>Dasboard Washing</a></li>
                    <li><a href='#'>Air freshner</a></li>
                    <li><a href='#'>Polish & wax</a></li>
                    <button className='cta' onClick={()=> navigate('/book')}>Order Now<AiOutlineArrowRight/></button>
                </ul>
            </div>

                <div className="price">
                <h2>150 AED</h2>
                <h3>Advanced Wash <br/>& Polish</h3>
                <ul className="price-2">
                    <li><a href="#">Exterior Hand Wash</a></li>
                    <li><a href="#">Wheel Shining</a></li>
                    <li><a href="#">Tyre Dressing</a></li>
                    <li><a href="#">Windows In & Out</a></li>
                    <li><a href="#">Interior Vaccum</a></li>
                    <li><a href="#">Dasboard Washing</a></li>
                    <li><a href="#">Air freshner</a></li>
                    <li><a href="#">Polish & wax</a></li>
                    <button className='cta'onClick={()=> navigate('/book')}>Order Now<AiOutlineArrowRight/></button>
                </ul>
            </div>

                <div className="price">
                <h2>25 AED</h2>
                <h3>Basic Wash</h3>
                <ul className='price-3'>
                    <li><a href="#">Exterior Hand Wash</a></li>
                    <li><a href="#">Wheel Shining</a></li>
                    <li><a href="#">Tyre Dressing</a></li>
                    <li><a href="#">Windows In & Out</a></li>
                    <li><a href="#">Interior Vaccum</a></li>
                    <li><a href="#">Dasboard Washing</a></li>
                    <li><a href="#">Air freshner</a></li>
                    <li><a href="#">Polish & wax</a></li>
                    <button className='cta' onClick={()=> navigate('/book')}>Order Now<AiOutlineArrowRight/></button>
                </ul>
            </div>
          </div>
        </div>
    </>
  )
}

export default Pricing

