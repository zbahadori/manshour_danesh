import React from "react";
import PropTypes from "prop-types";
function AmountWrapperItems({ ...props }) {
  return (
    <div className="col-md-4">
      <div className="title-box">
        <div data-ripple="ripple">
          <i className="fas fa-home"></i>
          <span>{props.title}</span>
        </div>
      </div>
      <div className="content-box">
        <div className="dots">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <h5>{props.sub_title1}</h5>

        {props.count1 && (
          <strong className="blue-color">
            <span>۵,۱۲۳</span> نفر
          </strong>
        )}

        {props.description1 && <p>{props.description1}</p>}
        {props.btn_link1 && (
          <a
            href={props.btn_link1}
            className="btn btn-primary"
            data-ripple="ripple"
          >
            شرکت در کلاس
          </a>
        )}
        <hr />
        <h5>{props.sub_title2}</h5>

        {props.count2 && (
          <strong className="blue-color">
            <span>۳۰۷</span> نفر
          </strong>
        )}

        {props.description2 && <p> {props.description2}</p>}
        {props.btn_link2 && (
          <a
            href={props.btn_link2}
            className="btn btn-primary"
            data-ripple="ripple"
          >
            شرکت در کلاس
          </a>
        )}
      </div>
    </div>
  );
}
AmountWrapperItems.propTypes = {
  title: PropTypes.string.isRequired,
  sub_title1: PropTypes.string.isRequired,
  description1: PropTypes.string,
  btn_link1: PropTypes.string,
  sub_title2: PropTypes.string.isRequired,
  description2: PropTypes.string,
  btn_link2: PropTypes.string,
  count1: PropTypes.string,
  count2: PropTypes.string,
};
export default AmountWrapperItems;
