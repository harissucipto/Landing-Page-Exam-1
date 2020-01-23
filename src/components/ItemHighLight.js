import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./ItemHighLight.css";

const ItemHighLight = ({ icon, title, description }) => {
  return (
    <div className="item-high-light">
      <div className="item-content">
        <div className="item-header">
          <p className="item-title">{title}</p>
          <FontAwesomeIcon icon={icon} className="icon-item" />
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};

ItemHighLight.propTypes = {
  icon: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default ItemHighLight;
