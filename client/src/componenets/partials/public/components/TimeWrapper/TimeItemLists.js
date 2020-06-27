import React from "react";
import PropTypes from "prop-types";
function TimeItemLists({ ...props }) {
  return (
    <div className="item">
      <div className="time-item">
        <div className="title-box">
          <span>{props.title}</span>
        </div>
        <h3>{props.title}</h3>
        <p>{props.text}</p>
      </div>
    </div>
  );
}
TimeItemLists.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
export default TimeItemLists;
