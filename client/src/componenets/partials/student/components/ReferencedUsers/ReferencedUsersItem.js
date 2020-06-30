import React from "react";
import { Link } from "react-router-dom";

function SubSetItem(props) {
  return (
    <div className="col-md-4">
      <div className="subset-item" data-ripple="ripple">
        <h6>تعداد زیر مجموعه</h6>
        <p id="subset-amount">{props.count}</p>
        <Link to={props.linkTo}>
          نمایش جزئیات بیشتر <i className="icon-arrow-left"></i>
        </Link>
      </div>
    </div>
  );
}

export default SubSetItem;
