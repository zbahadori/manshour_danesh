import React from "react";
import PropTypes from "prop-types";
function PopularLink({ ...props }) {
  return (
    <li>
      <a href={props.link}>{props.title}</a>
    </li>
  );
}
PopularLink.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
export default PopularLink;
