import React from "react";
import PropTypes from "prop-types";
import "../../sass/home.scss";
function NavBar() {
  return <div className="NavBar">Nambar</div>;
}
NavBar.propTypes = {
  title: PropTypes.string.isRequired,
};
export default NavBar;
