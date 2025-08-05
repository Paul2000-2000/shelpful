import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Hero from '../views/hero/hero'
import Offers from '../views/offers/Offers'
import Services from '../views/services/Services'
import Options from '../views/options/Options'
import Opportunity from '../views/opportunity/Opportunity'
import Features from '../views/features/Features'
import Testimonials from '../views/testimonials/Testimonials'
import AnotherOffer from '../views/anotheroffer/AnotherOffer'
import Shelpers from '../views/shelpers/Shelpers'
import Footer from '../views/footer/footer'



const HomePage = () => {
  return (
    <div>
        
        <Navbar />
        <Hero />
        <Offers />
        <Services />
        <Options/>
        <Opportunity/>
        <Features/>
        <Testimonials/>
        <AnotherOffer/>
        <Shelpers/>
        <Footer/>
        
    </div>
  )
}

export default HomePage
