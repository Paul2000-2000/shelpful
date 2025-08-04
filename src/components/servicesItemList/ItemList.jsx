import React from 'react'

import ItemListStyles from './ItemList.module.scss'

import { SiTemporal } from "react-icons/si";

const ItemList = () => {
  return (
    <div className={ItemListStyles.content}>
        <div className={ItemListStyles.task}>
            <SiTemporal className={ItemListStyles.icon}/>
            <p className={ItemListStyles.taskName}>
             Making a Daily To-Do List
            </p>
        </div>
        <p className={ItemListStyles.taskDescp}>
            Reminding you to move, strategizing when life gets in the way, 
            celebrating!
        </p>
    </div>
  )
}

export default ItemList
