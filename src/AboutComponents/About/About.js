import React from 'react'
import AboutCounter from '../AboutCounter/AboutCounter'
import AboutHeader from '../AboutHeader/AboutHeader'
import Experience from '../Experience/Experience'
import Features from '../Features/Features'
import Workers from '../Workers/Workers'

function About() {
  return (
    <section>
      <AboutHeader/>
        <AboutCounter/>
          <Features/>
        <Experience/>
      <Workers/>
    </section>
  )
}

export default About
