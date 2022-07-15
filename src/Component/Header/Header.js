import React, { Fragment, useState } from 'react'
import Logo from "../../assets/emperor_logo.jpg"
import "../Header/Header.css"
import {GiHamburgerMenu} from "react-icons/gi"
import {AiOutlineClose} from "react-icons/ai"
import {FiPhoneCall} from "react-icons/fi"
import {Link} from "react-router-dom"


function Header() {
    const [state, setState] = useState(false)

  return (
   <Fragment>
       <header>
           <div className="logo">
               <img src={Logo} alt="logo" />
           </div>
           <nav>
               <ul className={state ? "active" : ""}>
                   <li onClick={()=> setState(prevState => !prevState)}><Link to={"emperor/"}>Home</Link></li>
                   <li onClick={()=> setState(prevState => !prevState)}><Link to={"emperor/about"}>About</Link></li>
                   <li onClick={()=> setState(prevState => !prevState)}><Link to={"emperor/services"}>Services</Link></li>
                   <li onClick={()=> setState(prevState => !prevState)}><Link to={"emperor/book"}>Book Wash</Link></li>
                   <li onClick={()=> setState(prevState => !prevState)}><Link to={"emperor/price"}>Prices</Link></li>
                   <li onClick={()=> setState(prevState => !prevState)}><Link to={"emperor/gallery"}>Gallery</Link></li>
               </ul>
           </nav>
                {state ?  <AiOutlineClose className='cross' onClick={()=> setState(prevState => !prevState)}/> : <GiHamburgerMenu className='burger' onClick={()=> setState(prevState => !prevState)}/>}
              <span className='callNow'><FiPhoneCall/>&nbsp;050-756-8390</span>
       </header>
   </Fragment>
  )
}

export default Header
