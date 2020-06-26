import React from "react";
// import "../../sass/home.scss";

function StudentListItem({ ...props }) {
  return (
    <tr>
      <td>
        <img
          src={`${process.env.REACT_APP_URL}/uploads/user_image/` + props.image}
          alt="اسم دانش آموز"
          title="اسم دانش آموز"
        />
      </td>
      <td>{props.fullname}</td>
      <td>{props.father_name}</td>
      <td>{props.role}</td>
      <td>
        <b class={`bg-${props.status ? "success" : "warning"}`}>
          {props.status ? "تایید شده" : "تایید نشده"}
        </b>
      </td>
      <td>
        <button
          class="btn btn-primary pt-2 hint--top"
          aria-label="ویرایش"
          onClick={() => props.updateItem(props.phone_number)}
        >
          ویرایش
          <i class="icon-pencil"></i>
        </button>
        <button class="btn btn-danger pt-2 hint--top" aria-label="بلاک">
          بلاک
          <i class="icon-trash"></i>
        </button>
      </td>
    </tr>
  );
}

export default StudentListItem;
