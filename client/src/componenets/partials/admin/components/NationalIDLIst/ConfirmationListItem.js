import React from "react";
import "./confirmationlist.scss";

// import PropTypes from "prop-types";
function ConfirmationListItem({ ...props }) {
  return (
    <tr>
      <td class="align-middle" scope="row">
        {props.index}
      </td>
      <td class="align-middle">{props.phoneNumber}</td>
      <td class="align-middle">{props.nationalID}</td>
      <td class="align-middle">
        <img
          className="NationalImg"
          src={
            `${process.env.REACT_APP_URL}/uploads/national_id/` + props.image
          }
          alt="image"
          title="image"
        />
      </td>
      <td class="align-middle">
        <button
          class={`btn btn-${
            props.verified ? "success" : "warning"
          } pt-2 hint--top`}
          aria-label="وضعیت"
          onClick={() => props.ConfirmItem(props.phoneNumber)}
        >
          <i class={`icon-${props.verified ? "check" : "plus"}`}></i>
        </button>
        <button
          class="btn btn-danger pt-2 hint--top"
          aria-label="حذف"
          onClick={() => props.DeleteItem(props.phoneNumber)}
        >
          <i class="icon-trash"></i>
        </button>
      </td>
    </tr>
  );
}

export default ConfirmationListItem;
