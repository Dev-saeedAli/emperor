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
                    <Route path="emperor/about" element={<About/>}/>
                    <Route path="emperor/services" element={<Services/>}/>
                    <Route path="emperor/book" element={<Book/>}/>
                    <Route path="emperor/price" element={<Pricing/>}/>
                    <Route path="emperor/gallery" element={<Gallery/>}/>
                    <Route path="/:type" element={<HomePage/>}/>
                  </Routes>
                <Footer/>
              </Router>
        </>
  )
}

export default App
