import React from "react";
import PropTypes from "prop-types";
import SocialItems from "./SocialItems";
import social_img1 from "./images/social/01.jpg";
import social_img2 from "./images/social/02.jpg";
import social_img3 from "./images/social/03.jpg";
import social_img4 from "./images/social/04.jpg";
import social_img5 from "./images/social/05.jpg";
import Carousel from "react-elastic-carousel";
function SocialWrapper({ ...props }) {
  // const breakPoints = [
  //   { width: 1, itemsToShow: 1 },
  //   { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  //   { width: 850, itemsToShow: 3 },
  //   { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
  //   { width: 1450, itemsToShow: 5 },
  //   { width: 1750, itemsToShow: 6 },
  // ];

  return (
    <section className="social-wrapper wrapper">
      <h2 className="section-title">
        <span>{props.title}</span>
      </h2>
      <div className="container">
        <div className="carousels owl-carousel owl-theme">
          <Carousel
            itemsToShow={6}
            // breakPoints={breakPoints}
            enableAutoPlay
            itemPadding={[5, 5]}
          >
            <SocialItems social_img={social_img1}></SocialItems>
            <SocialItems social_img={social_img2}></SocialItems>
            <SocialItems social_img={social_img3}></SocialItems>
            <SocialItems social_img={social_img4}></SocialItems>
            <SocialItems social_img={social_img5}></SocialItems>
            <SocialItems social_img={social_img1}></SocialItems>
            <SocialItems social_img={social_img2}></SocialItems>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
SocialWrapper.propTypes = {
  title: PropTypes.string.isRequired,
};
export default SocialWrapper;
