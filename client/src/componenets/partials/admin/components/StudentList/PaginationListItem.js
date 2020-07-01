import React from "react";
// import "../../sass/home.scss";
// import PropTypes from "prop-types";
function PaginationListItem({ ...props }) {
  return (
    <li className={`page-item ${props.status}`}>
      <a className="page-link" href={props.link} tabindex={props.tabindex}>
        {props.status === "active" ? <span className="sr-only">(فعلی)</span> : ""}
        {props.text}
      </a>
    </li>
  );
}
// PaginationListItem.propTypes = {
//   title: PropTypes.string.isRequired,
// };
export default PaginationListItem;
