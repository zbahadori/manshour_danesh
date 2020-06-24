import React from "react";
// import "../../sass/home.scss";

import PropTypes from "prop-types";
function StudentListItem({ ...props }) {
  return (
    <tr>
      <td>
        <img src={props.image} alt="اسم دانش آموز" title="اسم دانش آموز" />
      </td>
      <td>{props.fullname}</td>
      <td>{props.fathername}</td>
      <td>{props.role}</td>
      <td>
        <b class={`${props.status}-color`}>{props.status_text}</b>
      </td>
      <td>
        <button class="btn btn-primary pt-2 hint--top" aria-label="ویرایش">
          <i class="icon-pencil"></i>
        </button>
        <button class="btn btn-danger pt-2 hint--top" aria-label="بلاک">
          <i class="icon-trash"></i>
        </button>
      </td>
    </tr>
  );
}
StudentListItem.propTypes = {
  title: PropTypes.string.isRequired,
};
export default StudentListItem;
