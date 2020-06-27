import React from "react";
import PropTypes from "prop-types";
function MenuItems({ ...props }) {
  return (
    <li className={props.active === "true" ? "active" : ""}>
      <a href={props.link}>{props.title}</a>
    </li>
  );
}
MenuItems.propTypes = {
  active: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
export default MenuItems;
