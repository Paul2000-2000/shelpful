import React from 'react'

import optionsStyles from './Options.module.scss';

import ImageLeft from '../../assets/imageleftservices.png'
import ImageRight from '../../assets/imagerightservices.png'

const Services = () => {
  return (
    <div className={optionsStyles.content}>
        <h1 className={optionsStyles.title}>
          Two Ways to Get Instant Accountability
        </h1>
        <div className={optionsStyles.allContent}>
              <div className={optionsStyles.allContentLeft}>
                  <img src={ImageLeft} className={optionsStyles.image} loading='lazy'/>
                  
                      <h4 className={optionsStyles.subtitle}>
                         Group Motivation
                      </h4>
                      <p className={optionsStyles.description}>
                        Our best-value option. Real-human support, accountability 
                        and positive peer pressure on a daily basis. We match you 
                        with 2-4 other members who are working on the same goal, 
                        and your All-Star Shelper will hold you all accountable.
                      </p>
                      <button className={optionsStyles.action}>
                        Request a Group
                      </button>
                  
              </div>
              <div className={optionsStyles.allContentRight}>
                   <img src={ImageRight} className={optionsStyles.image} loading='lazy'/>
                   
                      <h4 className={optionsStyles.subtitle}>
                          Just for You
                      </h4>
                      <p className={optionsStyles.description}>
                        Our best-value option. Real-human support, 
                        accountability and positive peer pressure on a daily basis.
                         We match you with 2-4 other members who are working on the 
                         same goal, and your All-Star Shelper will hold you all 
                         accountable.
                      </p>
                      <button className={optionsStyles.action}>
                        3 Days Free
                      </button>
                  </div>
              
        </div>
    </div>
  )
}

export default Services
