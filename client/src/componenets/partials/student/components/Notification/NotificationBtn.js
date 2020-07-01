import React from "react";
// import "../../sass/home.scss";
import PropTypes from "prop-types";
function NotificationBtn({ ...props }) {
  return (
    <button id="showInfo" class={`btn btn-${props.type}`}>
      {props.text}
    </button>
  );
}
NotificationBtn.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
export default NotificationBtn;
