import React from "react";
import PropTypes from "prop-types";
function SosialLinks({ ...props }) {
  return (
    <a
      href={props.link}
      target="_blank"
      data-ripple="ripple"
      rel="noopener noreferrer"
      className="social"
    >
      <i className={`fab fa-${props.name}`}></i>
    </a>
  );
}
SosialLinks.propTypes = {
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
export default SosialLinks;
