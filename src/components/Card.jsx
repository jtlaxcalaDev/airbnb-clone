import React from "react";


import starURL from '../assets/start.png'

import './styles/Card.css'

const Card = (props) => {

  let badgeText
  if (props.openSpots === 0) {
      badgeText = "SOLD OUT"
  } else if (props.location === "Online") {
      badgeText = "ONLINE"
  }

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img className="card--photo" src={props.coverImg} alt="card photo" />
      <div className="card--rating">
        <img className="rating--icon" src={starURL} alt="star icon" />
        <p className="rating--number">{(props.stats.rating).toFixed(1)}</p>
        <p className="rating--info">({props.stats.reviewCount}) - {props.location}</p>
      </div>
      <div className="card--description">
        <p className="card--title">{props.title}</p>
        <p className="card--cost"><b>From ${props.price}</b> / person</p>
      </div>
    </div>
  )
}

export default Card