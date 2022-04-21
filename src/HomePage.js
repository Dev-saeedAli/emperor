import React from 'react'
import Header from './Component/Header/Header'
import Service from './Component/Service/Service'
import Hero from './Component/Hero/Hero'
import Warranty from './Component/Warranty/Warranty'
import Wash from './Component/Wash/Wash'
import Owner from './Component/Owner/Owner'
import Brands from './Component/Brands/Brands'
import Newsletter from './Component/Newsletter/Newsletter'

function HomePage() {
  return (
    <div>
            <Hero />
            <Service />
            <Warranty />
            <Wash />
            <Owner/>
            <Brands/>
            <Newsletter/>
    </div>
  )
}

export default HomePage
