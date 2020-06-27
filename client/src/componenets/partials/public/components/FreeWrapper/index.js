import React from "react";
import PropTypes from "prop-types";
function FreeWrapper({ ...props }) {
  return (
    <section className="free-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="video-box">
              <img src={props.image} alt="image" title="image" />
              <a
                href={props.video_btn_link}
                title={props.video_btn_title}
                className="play-button"
                data-ripple="ripple"
              >
                <i className="fas fa-play-circle"></i>
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="title-box">
              <span>{props.title}</span>
            </div>
            <h2 className="display-4">{props.sub_title}</h2>
            <p>{props.text}</p>
            <a href={props.btn_link} className="btn btn-light" data-ripple="ripple">
              {props.btn_title}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

FreeWrapper.propTypes = {
  image: PropTypes.any.isRequired,
  video_btn_title: PropTypes.string.isRequired,
  video_btn_link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  sub_title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  btn_link: PropTypes.string.isRequired,
  btn_title: PropTypes.string.isRequired,
};
export default FreeWrapper;
