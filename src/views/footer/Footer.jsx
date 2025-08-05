import React from 'react'

import footerStyle from './Footer.module.scss'

const Footer = () => {
  return (
    <div className={footerStyle.content}>
      <h1 className={footerStyle.title}>
         Wouldn’t it be helpful?
      </h1>
      <div className={footerStyle.list}>
            <div className={footerStyle.item}>
                <p className={footerStyle.description}>
                    Membership Options
                </p>
                <p className={footerStyle.description}>
                    About
                </p>
                <p className={footerStyle.description}>
                    Blog   
                </p>
                <p className={footerStyle.description}>
                    Contact Us
                </p>    
            </div>
            <div className={footerStyle.item}>
                <p className={footerStyle.description}>
                    FAQs
                </p>
                <p className={footerStyle.description}>
                    Terms of Service
                </p>
                <p className={footerStyle.description}>
                    Privacy Policy
                </p> 
            </div>
            <div className={footerStyle.item}>
                <p className={footerStyle.description}>
                    Instagram
                </p>
                <p className={footerStyle.description}>
                    Twitter
                </p>
                <p className={footerStyle.description}>
                    Tik Tok
                </p>
                <p className={footerStyle.description}>
                    Facebook
                </p>    
            </div>
      </div>
    </div>
  )
}

export default Footer
