import React from "react";
import PropTypes from "prop-types";

const HeroShot = ({ name = "Haris" }) => {
  return (
    <div>
      <p>Hello! I'm {name}</p>
      <p>Consult, Design, and Develop Websites</p>
      <p>Have something great in mind? Feel free to contact me</p>
      <p>I'll help you to make it happen.</p>
      <button>Let's Make Contact</button>
    </div>
  );
};

HeroShot.propTypes = {
  name: PropTypes.string
};

export default HeroShot;
