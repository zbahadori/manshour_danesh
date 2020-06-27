import React from "react";
import PropTypes from "prop-types";
function CommentItems({ ...props }) {
  return (
    <div className="comment-item">
      <div className="image">
        <img src={props.student_img} alt="student" title="student" />
      </div>
      <div className="content">
        <h6 className="title">{props.student_name}</h6>
        <p>{props.comment_text} </p>
      </div>
    </div>
  );
}
CommentItems.propTypes = {
  student_img: PropTypes.string.isRequired,
  student_name: PropTypes.string.isRequired,
  comment_text: PropTypes.string.isRequired,
};
export default CommentItems;
