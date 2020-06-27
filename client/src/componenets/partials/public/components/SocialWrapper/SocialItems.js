import React from "react";
import PropTypes from "prop-types";
function SocialItems({ ...props }) {
  return (
    <div className="item">
      <a href="#">
        <img src={props.social_img} alt="manshouredanesh" />
      </a>
    </div>
  );
}
SocialItems.propTypes = {
  social_img: PropTypes.string.isRequired,
};
export default SocialItems;
