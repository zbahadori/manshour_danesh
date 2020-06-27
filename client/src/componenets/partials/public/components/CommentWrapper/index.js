import React from "react";
import PropTypes from "prop-types";
import student_img1 from "./images/student01.jpg";
import student_img2 from "./images/student02.jpg";
import CommentItems from "./CommentItems";
function CommentWrapper({ ...props }) {
  return (
    <section className="comment-wrapper wrapper">
      <h2 className="title-section">{props.title}</h2>
      <div className="container">
        <CommentItems
          student_img={student_img1}
          student_name="اسم آقای دانش آموز"
          comment_text="
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
            "
        ></CommentItems>
        <CommentItems
          student_img={student_img2}
          student_name="اسم آقای دانش آموز"
          comment_text="
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
            "
        ></CommentItems>
        <CommentItems
          student_img={student_img1}
          student_name="اسم آقای دانش آموز"
          comment_text="
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
            "
        ></CommentItems>
        <CommentItems
          student_img={student_img2}
          student_name="اسم آقای دانش آموز"
          comment_text="
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
            "
        ></CommentItems>
        <div className="text-center">
          <a href="#" className="btn btn-primary" data-ripple="ripple">
            نظرتو ثبت کن
          </a>
        </div>

        <span className="arrow1"></span>
        <span className="arrow2"></span>
        <span className="arrow3"></span>
      </div>
    </section>
  );
}
CommentWrapper.propTypes = {
  title: PropTypes.string.isRequired,
};
export default CommentWrapper;
