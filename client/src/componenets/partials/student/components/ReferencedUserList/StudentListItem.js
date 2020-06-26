import React from "react";
// import "../../sass/home.scss";

function StudentListItem({ ...props }) {
  return (
    <tr>
      <td>
        <img
          src={
            `${process.env.REACT_APP_URL}/uploads/user_image/user_image/` +
            props.user_image
          }
          alt="اسم دانش آموز"
          title="اسم دانش آموز"
        />
      </td>
      <td>{props.fullname}</td>
      <td>{props.father_name}</td>
      <td>
        <b class={`${props.status}-color`}>{props.status_text}</b>
      </td>
    </tr>
  );
}

export default StudentListItem;
