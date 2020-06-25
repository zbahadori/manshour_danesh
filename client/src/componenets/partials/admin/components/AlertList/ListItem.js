import React from "react";

// import PropTypes from "prop-types";
function ListItem({ ...props }) {
  return (
    <tr>
      <td className="align-middle" scope="row">
        {props.index}
      </td>
      <td className="align-middle">{props.title}</td>
      <td className="align-middle">{props.message}</td>

      <td className="align-middle">
        <button
          className={`btn btn-${
            props.verified ? "success" : "warning"
          } pt-2 hint--top my-1`}
          aria-label="وضعیت"
          onClick={(e) =>
            props.UpdateItem(props.id, props.title, props.message)
          }
        >
          ادیت
          <i className="icon-check px-2"></i>
        </button>
        <button
          className="btn btn-danger pt-2 hint--top my-1"
          aria-label="حذف"
          onClick={(e) => props.DeleteItem(e, props.id)}
        >
          حذف
          <i className="icon-trash px-2"></i>
        </button>
      </td>
    </tr>
  );
}

export default ListItem;
