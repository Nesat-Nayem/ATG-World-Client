import React from "react";
import logo from "../img/Hero.png";
import './HeroArea.css'

const HeroArea = () => {
  return (
    <div className="main">
      <img className="img-fluid" src={logo} alt="" />

      <div className="bottom-left">
        <h1>Computer Engineering</h1>
        <p>142,765 Computer Engineers follow this</p>
      </div>
    </div>
  );
};

export default HeroArea;
