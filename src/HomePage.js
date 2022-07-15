import React from 'react'
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
// git remote set-url origin git@your.git.repo.example.com:user/repository2.git