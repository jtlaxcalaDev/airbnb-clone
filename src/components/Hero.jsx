import React from "react";

import './styles/Hero.css'

const Hero = () => {
  return (
    <section className="hero--container">
      <img className="hero--image" src='../assets/image-grid.png' alt="" />
      <div className="hero--about">
        <h3 className="hero--title">Online Experiences</h3>
        <div className="hero--description">
          Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.
        </div>
      </div>
    </section>
  )
}

export default Hero