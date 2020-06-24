import React from "react";
// import "../../sass/home.scss";
// import PropTypes from "prop-types";
function PaginationListItem({ ...props }) {
  return (
    <li class={`page-item ${props.status}`}>
      <a class="page-link" href={props.link} tabindex={props.tabindex}>
        {props.status === "active" ? <span class="sr-only">(فعلی)</span> : ""}
        {props.text}
      </a>
    </li>
  );
}
// PaginationListItem.propTypes = {
//   title: PropTypes.string.isRequired,
// };
export default PaginationListItem;
