import React from "react";
import "./hero.css";
import { Link } from "react-scroll";
const Hero = () => {
  return (
    <main id="hero">
      <div className="cont">
        <h2>Ahmed Ashraf</h2>
        <p>
          this project is created by frot end developer Ahmed Ashraf with React
          Technology
        </p>
        <p className="arrow">
          <Link to="about" smooth={true} offset={-150} duration={500}>
            go down<i className="fa-solid fa-arrow-down fa-beat"></i>
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Hero;
