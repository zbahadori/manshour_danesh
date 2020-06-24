import React from "react";
import PropTypes from "prop-types";
function AlertBox({ ...props }) {
  return (
    <div
      className={`alert alert-${props.type} alert-dismissible fade show`}
      role="alert"
    >
      <strong>{props.title}</strong> {props.text}
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
}
AlertBox.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
export default AlertBox;
