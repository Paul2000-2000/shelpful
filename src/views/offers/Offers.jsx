import React from 'react'

import offersStyle from './Offers.module.scss'

const Offers = () => {
  return (
    <div className={offersStyle.content}>
        <h3 className={offersStyle.access}>
            🚨 🪩 EARLY ACCESS to New Year’s Sale 🚨 
        </h3>
        <h1 className={offersStyle.title}>
            50% off on ALL Memberships!
        </h1>
        <button className={offersStyle.register}>
            Register now
        </button>
    </div>
  )
}

export default Offers
