import React from "react";
import PropTypes from "prop-types";
import TimeItemLists from "./TimeItemLists";
import Carousel from "react-elastic-carousel";
function TimeWrapper({ ...props }) {
  return (
    <section className="time-wrapper wrapper">
      <div className="container">
        <div className="title-section">{props.title}</div>

        <div className="time-carousel owl-carousel owl-theme">
          <Carousel itemsToShow={4}>
            <TimeItemLists
              title="کنکور زبان"
              text="لیست کلاس های کنکوری رشته تحصیلی زبان در منشور دانش"
            ></TimeItemLists>
            <TimeItemLists
              title="کنکور انسانی"
              text="لیست کلاس های کنکوری رشته تحصیلی انسانی در منشور دانش"
            ></TimeItemLists>
            <TimeItemLists
              title="کنکور تجربی"
              text="لیست کلاس های کنکوری رشته تحصیلی تجربی در منشور دانش"
            ></TimeItemLists>
            <TimeItemLists
              title="کنکور ریاضی"
              text="لیست کلاس های کنکوری رشته تحصیلی ریاضی در منشور دانش"
            ></TimeItemLists>
            <TimeItemLists
              title="کنکور شیمی"
              text="لیست کلاس های کنکوری رشته تحصیلی شیمی در منشور دانش"
            ></TimeItemLists>
          </Carousel>
        </div>

        <div className="text-center">
          <a href={props.link} className="btn btn-primary" data-ripple="ripple">
            {props.link_text}
          </a>
        </div>
      </div>
    </section>
  );
}
TimeWrapper.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  link_text: PropTypes.string.isRequired,
};
export default TimeWrapper;
