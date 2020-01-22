import React from "react";
import PropTypes from "prop-types";

const ItemHighLight = ({ icon, title, description }) => {
  return (
    <div>
      <p>{icon}</p>
      <p>{title}</p>
      <p>{description}</p>
    </div>
  );
};

ItemHighLight.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default ItemHighLight;
