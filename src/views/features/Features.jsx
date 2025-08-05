import React from 'react'



import ImageLeft from '../../assets/imagefeleft.png'
import ImageRight from '../../assets/imageferight.png'

import featuresStyle from './Features.module.scss'

const Features = () => {

    


  return (
    <div className={featuresStyle.content}>
       
        <img className={featuresStyle.image} src={ImageLeft} loading='lazy'/>
        <div className={featuresStyle.divR}> 
            <h1 className={featuresStyle.divTitle}>Need a nudge? Daily access to your “Shelper”</h1>
            <p className={featuresStyle.divMessage}>Message back and forth with your Shelper to tackle things, 
                big and small.</p>
            <button className={featuresStyle.divAction}>
                Try it Out
            </button>
        </div>
        
        <img className={`${featuresStyle.image} ${featuresStyle.imageApper}`} src={ImageRight} loading='lazy'/>
        <div className={featuresStyle.divR}> 
            <h1 className={featuresStyle.divTitle}> Your Shelper will hold you 
                accountable & strategize</h1>
            <p className={featuresStyle.divMessage}>
            Shelpful isn’t an app and it’s not a bot. It’s a fleet of real people who’ve been there too.
             Shelpful is a part coach, part friend, part cheerleader.
            </p>
            <button className={featuresStyle.divAction}> 
                Try Risk Free
            </button>
        </div>
        <img className={`${featuresStyle.image} ${featuresStyle.imageDissapear}`} src={ImageRight} loading='lazy'/>
        
        <img className={featuresStyle.image} src={ImageLeft} loading='lazy'/>
        <div className={featuresStyle.divR}> 
                <h1 className={featuresStyle.divTitle}>
                    Get your To-Dos...
                    To-Done
                </h1>
                <p className={featuresStyle.divMessage}>
                Snap a pic of your clean to-do list (or text it) every morning,
                 and know that your Shelper will be reminding you about the 
                 things you don’t want to drop.
                </p>
                <button className={featuresStyle.divAction}> 
                    Shelp Me!
                </button>
        </div>
        
    </div>
  )
}

export default Features
