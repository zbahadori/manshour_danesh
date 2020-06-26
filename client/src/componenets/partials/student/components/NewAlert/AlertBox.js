import React from "react";

function AlertBox({ ...props }) {
  return (
    <div
      className={`alert alert-${props.type} alert-dismissible fade show`}
      role="alert"
    >
      <strong>{props.title}</strong>
      <p>{props.text}</p>
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

export default AlertBox;
