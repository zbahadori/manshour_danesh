import React from "react";
import "../../assets/css/not_found_page.scss";
function NotFoundPage({ ...props }) {
  return (
    <div className="not_found_page">
      <div className="content">
        <canvas className="snow" id="snow"></canvas>
        <div className="main-text">
          <h1>
            {props.title}
            <br /> {props.text}
          </h1>
          <a className="home-link" href={props.link}>
            {props.link_text}
          </a>
        </div>
        <div className="ground">
          <div className="mound">
            <div className="mound_text">{props.mound_text}</div>
            <div className="mound_spade"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
