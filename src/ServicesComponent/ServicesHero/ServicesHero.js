import React from 'react'
import "../ServicesHero/ServicesHero.css"
import ServiceImg1 from "../../assets/service-1.jpg"
import ServiceImg2 from "../../assets/service-2.jpg"
import ServiceImg3 from "../../assets/service-3.jpg"
import ServiceImg4 from "../../assets/service-4.jpg"

function ServicesHero() {
  return (
    <>
     <div className="services-container">

         <div className="service-header">
             <h3>It'S Time to Check <br/>our services</h3>
         <p>Choosing car wash is a constant process in the<br/>life of every motorist.We try to<br/> give you only positive emotions.<br/>Entrust your car cleaning to our professionals.</p>
         </div>


        <div className="services">

         <div className="service-infos">
             <div className="service-image">
                 <img src={ServiceImg1} alt="service" />
             </div>
             <div className="service-description">
                 <h4>Professional<br/>Car wash</h4>
             <p>Choosing car wash is a constant<br/>processin the life of every motorist.</p>
             </div>
        </div>

         <div className="service-infos">
             <div className="service-image">
                 <img src={ServiceImg2} alt="service" />
             </div>
             <div className="service-description">
             <h4>Car Polish <br/>& Wax</h4>
             <p> Polish and wax have to work together <br/>in order to give a car a top of the line.</p>
             </div>
        </div>

         <div className="service-infos">
             <div className="service-image">
                 <img src={ServiceImg3} alt="service" />
             </div>
             <div className="service-description">
             <h4>Interior Car<br/>Detailing</h4>
             <p>Interior detailing involves cleaning<br/>the inner parts of a vehicle.</p>
             </div>
        </div>

         <div className="service-infos">
             <div className="service-image">
                 <img src={ServiceImg4} alt="service" />
             </div>
             <div className="service-description">
             <h4>Tyre<br/>Wash</h4>
             <p>Tire wash is a technology on the one <br/>hand and water recycling on the other.</p>
             </div>
            </div>
         </div>
     </div>
    </>
  )
}


             {/* <div className="service-image">
                 <img src={ServiceImg2} alt="service" />
             </div>
             <div className="service-description">
                 <h4>Car Polish <br/>& Wax</h4>
             <p> Polish and wax have to work together <br/>in order to give a car a top of the line.</p>
             </div>
             <div className="service-image">
                 <img src={ServiceImg3} alt="service" />
             </div>
             <div className="service-description">
                 <h4>Interior Car<br/>Detailing</h4>
             <p>Interior detailing involves cleaning<br/>the inner parts of a vehicle.</p>
             </div>
             <div className="service-image">
                 <img src={ServiceImg4} alt="service" />
             </div>
             <div className="service-description">
                 <h4>Tyre<br/>Wash System</h4>
             <p>Tire wash system is washing technology on<br/> the one hand and water recycling on the other.</p>
             </div> */}

export default ServicesHero
