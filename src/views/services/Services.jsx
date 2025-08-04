import React from 'react'

import ItemList from '../../components/servicesItemList/itemList';

import servicesStyles from './Services.module.scss';

const Services = () => {
  return (
    <div className={servicesStyles.content}>
        <h2 className={servicesStyles.title}>
            You’re Not Alone, We’re Here to Help!
        </h2>
        <h5 className={servicesStyles.message}>
            You don’t have to be alone in this - Your Shelper will remind you, 
            ask about your progress, and help strategize when life sucks.
        </h5>
        <p className={servicesStyles.messageLow}>
            Here are a few examples of areas where we’ve helped our members.
        </p>
        <div className={servicesStyles.list}>
            <ItemList/>
            <ItemList/>
            <ItemList/>
            <ItemList/>
            <ItemList/>
            <ItemList/>
            <ItemList/>
            <ItemList/>
            <ItemList/>
        </div>
    </div>
  )
}

export default Services
