import React from 'react'

import TestimonialItemList from '../../components/testimonialItemList/testimonialItemList'

import testimonialsStyles from './Testimonials.module.scss';



const Testimonials = () => {
  return (
    <div className={testimonialsStyles.content}>
        <h1 className={testimonialsStyles.title}>
            Our Members 💛 Shelpful, and We 💛 Them!
        </h1>
        <div className={testimonialsStyles.list}>
            <TestimonialItemList/>
            <TestimonialItemList/>
            <TestimonialItemList/>
            <TestimonialItemList/>
            <TestimonialItemList/>
            <TestimonialItemList/>
        </div>
        <button className={testimonialsStyles.action}>
            Load More
        </button>
      
    </div>
  )
}

export default Testimonials
