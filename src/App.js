import React from 'react'
import Header from './Component/Header/Header'
import Footer from "./Component/Footer/Footer"
import About from './AboutComponents/About/About'
import Services from "./ServicesComponent/Services"
import Book from "./BookComponent/Book"
import Pricing from "./PricingComponent/Pricing"
import Gallery from "./GalleryComponent/Gallery"
// import Menus from '../src/Menus'
import {BrowserRouter as Router , Routes, Route} from "react-router-dom"
import HomePage from './HomePage'


function App() {
  return (
    <>
              <Router>
                <Header/>
                  <Routes>
                    <Route path="/:type" element={<HomePage/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/services" element={<Services/>}/>
                    <Route path="/book" element={<Book/>}/>
                    <Route path="/price" element={<Pricing/>}/>
                    <Route path="/gallery" element={<Gallery/>}/>
                  </Routes>
                <Footer/>
              </Router>
        </>
  )
}

export default App
