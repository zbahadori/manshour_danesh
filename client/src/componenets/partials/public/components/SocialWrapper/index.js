import React from "react";
import PropTypes from "prop-types";
import SocialItems from "./SocialItems";
import social_img1 from "./images/social/01.jpg";
import social_img2 from "./images/social/02.jpg";
import social_img3 from "./images/social/03.jpg";
import social_img4 from "./images/social/04.jpg";
import social_img5 from "./images/social/05.jpg";
function SocialWrapper({ ...props }) {
  return (
    <section className="social-wrapper wrapper">
      <h2 className="section-title">
        <span>{props.title}</span>
      </h2>
      <div className="container">
        <div className="carousels owl-carousel owl-theme">
          <SocialItems social_img={social_img1}></SocialItems>
          <SocialItems social_img={social_img2}></SocialItems>
          <SocialItems social_img={social_img3}></SocialItems>
          <SocialItems social_img={social_img4}></SocialItems>
          <SocialItems social_img={social_img5}></SocialItems>
        </div>
      </div>
    </section>
  );
}
SocialWrapper.propTypes = {
  title: PropTypes.string.isRequired,
};
export default SocialWrapper;
