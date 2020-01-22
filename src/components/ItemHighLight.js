import React from "react";
import PropTypes from "prop-types";

import "./ItemHighLight.css";

const ItemHighLight = ({ icon, title, description }) => {
  return (
    <div className="item-high-light">
      <div style={{ border: "1px solid black" }}>
        <div>
          <p className="item-title">{title}</p>
          <p>{icon}</p>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};

ItemHighLight.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default ItemHighLight;
