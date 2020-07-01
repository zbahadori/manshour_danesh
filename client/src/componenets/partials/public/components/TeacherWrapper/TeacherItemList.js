import React from "react";
function TeacherItemList({ ...props }) {
  return (
    <div className="item">
      <div className="teacher-item">
        <a href="#">
          <img
            src={props.image}
            alt={props.teacher_name}
            title={props.teacher_name}
          />
          <p className="title">{props.teacher_name}</p>
          <p className="desc">{props.description}</p>
        </a>
      </div>
    </div>
  );
}
export default TeacherItemList;
