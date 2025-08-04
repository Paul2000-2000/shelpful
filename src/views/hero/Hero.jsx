import React from 'react'

import heroStyles from './Hero.module.scss'

import HeroImage from '../../assets/heroimage.png';

const hero = () => {
  return (
    <div className={heroStyles.content}>
        <div className={heroStyles.contentLeft}>
            <h1 className={heroStyles.title}>
                Stay on Top of it with a Real-Human Buddy!
            </h1>
            <h4 className={heroStyles.description}>
                Your very own Shelper supports you on Key Habits 💬 
                or Pesky To-Dos 📝 
            </h4>
            <button className={heroStyles.start}>
                 Start 3 days Trial
            </button>
            <p className={heroStyles.trial}>
                30-day money back guarantee
            </p>
        </div>
        <img src={HeroImage} className={heroStyles.image} loading='lazy'/>
        
    </div>
  )
}

export default hero
