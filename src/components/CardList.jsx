import React from "react";
import Card from "./Card"
import './styles/CardList.css'
import data from '../data'

const CardList = () => {
  return (
    <section className="cards--container">
      {
        data.map(item => 
          <Card 
            key = {item.id}
            {...item}
          />  
        )
      }
    </section>
  )
}

export default CardList

