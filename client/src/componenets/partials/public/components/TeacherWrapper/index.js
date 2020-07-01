import React from "react";
import TeacherItemList from "./TeacherItemList";
import teacher01 from "./images/teacher01.jpg";
import teacher02 from "./images/teacher02.jpg";
import teacher03 from "./images/teacher03.jpg";
import Carousel from "react-elastic-carousel";
import PropTypes from "prop-types";
function TeacherWrapper({ ...props }) {
  return (
    <section className="teacher-wrapper wrapper">
      <div className="container">
        <div className="title-box">
          <h2 className="title">
            <span>{props.title}</span>
          </h2>
          <h3 className="desc">{props.description}</h3>
        </div>
        <div className="slide-content">
          <div className="teacher-carousel owl-carousel owl-theme">
            <Carousel itemsToShow={3}>
              <TeacherItemList
                image={teacher01}
                teacher_name="اسم استاد منشور دانش"
                description="دبیر ریاضی و فیزیک"
              ></TeacherItemList>
              <TeacherItemList
                image={teacher02}
                teacher_name="اسم استاد منشور دانش"
                description="دبیر ریاضی و فیزیک"
              ></TeacherItemList>
              <TeacherItemList
                image={teacher03}
                teacher_name="اسم استاد منشور دانش"
                description="دبیر ریاضی و فیزیک"
              ></TeacherItemList>
              <TeacherItemList
                image={teacher02}
                teacher_name="اسم استاد منشور دانش"
                description="دبیر ریاضی و فیزیک"
              ></TeacherItemList>
            </Carousel>
          </div>
        </div>

        <div className="description-box">
          <div className="text-center">
            <p>{props.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
TeacherWrapper.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default TeacherWrapper;
