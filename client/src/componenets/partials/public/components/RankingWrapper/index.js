import React from "react";
import PropTypes from "prop-types";
import slider_image1 from "./images/student01.jpg";
import slider_image2 from "./images/student02.jpg";
import RankingWrapperItems from "./RankingWrapperItems";
import RankingWrapperSliderItems from "./RankingWrapperSliderItems";
import Carousel from "react-elastic-carousel";
function RankingWrapper({ ...props }) {
  return (
    <section className="ranking-wrapper wrapper">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <div className="title-box">
              <span>{props.title_box}</span>
            </div>
            <h4 className="title">{props.title}</h4>
            <h6 className="desc">{props.desc}</h6>
            <p>{props.text}</p>
            <ul>
              <RankingWrapperItems
                title="دبیرستان"
                text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از"
              ></RankingWrapperItems>
              <RankingWrapperItems
                title="آزمون ها"
                text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از"
              ></RankingWrapperItems>
              <RankingWrapperItems
                title="کنکور"
                text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از"
              ></RankingWrapperItems>
            </ul>
          </div>

          <div className="col-md-5">
            <div className="best-title">
              <span>{props.slider_title}</span>
            </div>
            <div className="ranking-carousel owl-carousel owl-theme">
              <Carousel className="elastic-carousel" itemsToShow={2} itemPadding={[5, 5]}>
                <RankingWrapperSliderItems
                  image={slider_image1}
                  user_name="نوید بهروزی مجد"
                  text="رتبه ۳ کنکور سال ۱۳۹۸"
                ></RankingWrapperSliderItems>
                <RankingWrapperSliderItems
                  image={slider_image2}
                  user_name="نوید بهروزی مجد"
                  text="رتبه ۳ کنکور سال ۱۳۹۸"
                ></RankingWrapperSliderItems>
                <RankingWrapperSliderItems
                  image={slider_image1}
                  user_name="نوید بهروزی مجد"
                  text="رتبه ۳ کنکور سال ۱۳۹۸"
                ></RankingWrapperSliderItems>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

RankingWrapper.propTypes = {
  title_box: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  slider_title: PropTypes.string.isRequired,
};
export default RankingWrapper;
