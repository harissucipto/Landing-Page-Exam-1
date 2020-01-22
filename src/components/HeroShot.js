import React from "react";
import PropTypes from "prop-types";
import "./HeroShot.css";

const HeroShot = ({ name = "Haris" }) => {
  return (
    <div className="hero-shot">
      <div style={{ margin: "5.4rem 0" }}>
        <p className="h1">Hello! I'm {name}</p>
        <p className="h2">Consult, Design, and Develop Websites</p>
        <p className="h3">
          Have something great in mind? Feel free to contact me{" "}
          <br className="br-hero-shot" />
          I'll help you to make it happen.
        </p>
        <button className="button-hero-shot">Let's Make Contact</button>
      </div>
    </div>
  );
};

HeroShot.propTypes = {
  name: PropTypes.string
};

export default HeroShot;
