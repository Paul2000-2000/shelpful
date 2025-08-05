import React from 'react'

import shelperImage from '../../assets/shelperimage_landscape.png';

import shelpersStyles from './Shelpers.module.scss';


const Shelpers = () => {
  return (
    <div className={shelpersStyles.content}>
        
        <img src={shelperImage} className={shelpersStyles.image} loading='lazy'/>
        <div className={shelpersStyles.about}>
            <h3 className={shelpersStyles.title}>  
                Who are the “Shelpers?”
            </h3>
            <p className={shelpersStyles.description}>
                You know that one friend you have? That really good listener 
                who always remembers the little details? They have a way of 
                making you feel special and cared for? That’s who we’ve brought
                 on as shelpers.
            </p>
            <p className={shelpersStyles.description}>
                Because Shelpers can chat flexibly with you from their phone 
                Mon-Fri, we have people from business backgrounds, stay-at-home
                 parents, the list goes on.
            </p>
            <p className={shelpersStyles.description}>
                The first Shelpers were actually our own founders, because 
                they are those friends too.
            </p>
            <p className={shelpersStyles.description}>
                 We’ll match you with a great Shelper. But, if you ever want 
                 to, you can switch Shelpers anytime for any reason.
            </p>
            <button className={shelpersStyles.action}>
                Try for FREE
            </button>

        </div>
    </div>
  )
}

export default Shelpers
