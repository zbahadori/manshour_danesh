import React from "react";
import "../../sass/link.scss";
import PropTypes from "prop-types";
function Link({ ...props }) {
  return (
    <div class="container-fluid">
      <section className="form-wrapper wrapper">
        <h2 className="section-title">لینک اختصاصی شما</h2>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-5 col-md-4 col-lg-3">
              <button
                className="btn btn-primary d-block"
                id="copyUrl"
                data-ripple="ripple"
              >
                کپی کنید
              </button>
            </div>
            <div className="col-sm-7 col-md-8 col-lg-9">
              <input
                type="text"
                className="form-control text-left"
                value={props.link}
                id="userUrl"
                disabled
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
Link.propTypes = {
  linl: PropTypes.string.isRequired,
};
export default Link;
