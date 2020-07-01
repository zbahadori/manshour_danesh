import React from "react";

function PaginationListItem({ ...props }) {
  return (
    <li class={`page-item ${props.status}`}>
      <a class="page-link" href={props.link} tabIndex={props.tabindex}>
        {props.status === "active" ? <span class="sr-only">(فعلی)</span> : ""}
        {props.text}
      </a>
    </li>
  );
}

export default PaginationListItem;
