import React from 'react'

import opportunityStyles from './Opportunity.module.scss';

const Opportunity = () => {
  return (
    <div className={opportunityStyles.content}>
        <p className={opportunityStyles.special}>
            SPECIAL OPPORTUNITY
        </p>
        <h1 className={opportunityStyles.title}>
            📚 Heard of Tiny Habits or Atomic Habits? 
        </h1>
        <h4 className={opportunityStyles.description}>
             Join a small group-session with our habit coaches to learn the best 
             practices from these books AND get hands-on help designing habits 
             you can keep.
        </h4>
        <button className={opportunityStyles.action}>
            Teach me
        </button>
        <p className={opportunityStyles.message}>
            “SERIOUSLY, the best workshop ever.” - Christine C., San Francisco
        </p>
    </div>
  )
}

export default Opportunity
