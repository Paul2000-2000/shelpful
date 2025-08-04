import React from 'react'

import { useState } from 'react';

import navbarStyles from './Navbar.module.scss';

import { MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {

    const [active , setisActive] = useState(false);

  return (


    active ? 
            <div className={navbarStyles.responsivelist}>
                <IoMdClose className={navbarStyles.icon} onClick={ () => setisActive(!active)}/>
                <p className={navbarStyles.listitem}>Keep New Habits</p>
                <p className={navbarStyles.listitem}>How it Works</p>
                <p className={navbarStyles.listitem}>3 Days Free</p>
                <p className={navbarStyles.listitem}>Blog</p>
                <p className={navbarStyles.listitem}>Login</p>
                <button className={navbarStyles.memberoptions}>
                    Membership Options
                </button>
            </div>

            :

            <div className={navbarStyles.content}>
                <p className={navbarStyles.title}>shelpful</p>
                <div className={navbarStyles.list}>
                    <p className={navbarStyles.listitem}>Keep New Habits</p>
                    <p className={navbarStyles.listitem}>How it Works</p>
                    <p className={navbarStyles.listitem}>3 Days Free</p>
                    <p className={navbarStyles.listitem}>Blog</p>
                    <p className={navbarStyles.listitem}>Login</p>
                    <button className={navbarStyles.memberoptions}>
                        Membership Options
                    </button>
                </div>
                <div className={navbarStyles.responsive}>
                    <MdMenu className={navbarStyles.icon} onClick={ () => setisActive(!active)}/>
                </div>

            </div>
  )
}

export default Navbar
