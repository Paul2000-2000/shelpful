import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Hero from '../views/hero/hero'
import Offers from '../views/offers/Offers'
import Services from '../views/services/Services'
import Options from '../views/options/Options'



const HomePage = () => {
  return (
    <div>
        
        <Navbar />
        <Hero />
        <Offers />
        <Services />
        <Options/>
        
    </div>
  )
}

export default HomePage
