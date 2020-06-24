import React from "react";
// import "../../sass/home.scss";
import PropTypes from "prop-types";
function SubSetItem({ ...props }) {
  return (
    <div className="col-md-4">
      <div className="subset-item" data-ripple="ripple">
        <h6>تعداد زیر مجموعه</h6>
        <p id="subset-amount">{props.count}</p>
        <a href="#">
          نمایش جزئیات بیشتر <i className="icon-arrow-left"></i>
        </a>
      </div>
    </div>
  );
}
SubSetItem.propTypes = {
  count: PropTypes.number.isRequired,
  text: PropTypes.string,
};
export default SubSetItem;
