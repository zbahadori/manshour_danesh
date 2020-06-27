import React from "react";
// import PropTypes from "prop-types";
function IntroWrapper({ ...props }) {
  return (
    <section className="intro-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <img src={props.IntroUser} alt="user" title="user" />
          </div>
          <div className="col-md-7">
            <div className="content">
              <h1>
                اینجا <span>منشور دانش</span> است
              </h1>
              <h2>{props.text}</h2>
              <a
                href={props.btnLink}
                className="btn btn-light"
                data-ripple="ripple"
              >
                {props.btnText}
              </a>
            </div>
          </div>
        </div>
      </div>
      <img
        className="ribbon"
        src={props.IntroRibbon}
        alt="ribbon"
        title="ribbon"
      />
    </section>
  );
}
// IntroWrapper.propTypes = {
//   title: PropTypes.number.isRequired,
// };
export default IntroWrapper;
