import React from 'react'

import testimonialStyle from './TestimonialItemList.module.scss';

import ImageTest from '../../assets/imageitemtest.png';

import { CiStar } from "react-icons/ci";
import { FaGoogle } from "react-icons/fa";


const TestimonialItemList = () => {
  return (
    <div className={testimonialStyle.content}>
        <div className={testimonialStyle.person}>
            <img src={ImageTest} className={testimonialStyle.image}/>
            <div className={testimonialStyle.personData}>
                <h4 className={testimonialStyle.name}>John Doe</h4>
                <p className={testimonialStyle.mail}>@johndoe</p>
            </div>
            <div className={testimonialStyle.personStatus}>
                <FaGoogle className={testimonialStyle.icon}/>
                <p className={testimonialStyle.time}>7 months ago</p>
            </div>
        </div>
        <p className={testimonialStyle.stars}>
            <CiStar className={testimonialStyle.icon}/>
            <CiStar className={testimonialStyle.icon}/>
            <CiStar className={testimonialStyle.icon}/>
            <CiStar className={testimonialStyle.icon}/>
            <CiStar className={testimonialStyle.icon}/>
        </p>
        <p className={testimonialStyle.message}>
            Reminding you to move, strategizing when life gets in the way, 
            celebrating!
        </p>
    </div>
  )
}

export default TestimonialItemList
