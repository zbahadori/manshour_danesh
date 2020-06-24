import React from "react";
import "../../sass/confirmationlist.scss";
// import PropTypes from "prop-types";
function ConfirmationListItem({ ...props }) {
  return (
    <tr>
      <td class="align-middle" scope="row">
        {props.id}
      </td>
      <td class="align-middle">{props.fullname}</td>
      <td class="align-middle">{props.nationalcode}</td>
      <td class="align-middle">
        <img
          className="NationalImg"
          src={props.image}
          alt="image"
          title="image"
        />
      </td>
      <td class="align-middle">
        <button class="btn btn-success pt-2 hint--top" aria-label="تایید">
          <i class="icon-pencil"></i>
        </button>
        <button class="btn btn-danger pt-2 hint--top" aria-label="حذف">
          <i class="icon-trash"></i>
        </button>
      </td>
    </tr>
  );
}
// ConfirmationListItem.propTypes = {
//   title: PropTypes.string.isRequired,
// };
export default ConfirmationListItem;
