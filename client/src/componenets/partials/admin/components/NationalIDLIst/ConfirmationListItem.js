import React from "react";
import "./confirmation_list.scss";

function ConfirmationListItem({ ...props }) {
  return (
    <tr>
      <td className="align-middle" scope="row">
        {props.index}
      </td>
      <td className="align-middle">{props.phoneNumber}</td>
      <td className="align-middle">{props.nationalID}</td>
      <td className="align-middle">
        <img
          classNameName="NationalImg"
          src={
            `${process.env.REACT_APP_URL}/uploads/national_id/` + props.image
          }
          alt="image"
          title="image"
        />
      </td>
      <td className="align-middle">
        <button
          className={`btn btn-${
            props.verified ? "success" : "warning"
          } pt-2 hint--top`}
          aria-label="وضعیت"
          onClick={() => props.ConfirmItem(props.phoneNumber)}
        >
          <i className={`icon-${props.verified ? "check" : "plus"}`}></i>
        </button>
        <button
          className="btn btn-danger pt-2 hint--top"
          aria-label="حذف"
          onClick={() => props.DeleteItem(props.phoneNumber)}
        >
          <i className="icon-trash"></i>
        </button>
      </td>
    </tr>
  );
}

export default ConfirmationListItem;
