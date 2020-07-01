import React from "react";
import PropTypes from "prop-types";
import WhyWrapperListItemes from "./WhyWrapperListItemes";
import icone_img1 from "./images/why-icons/01.png";
import icone_img2 from "./images/why-icons/02.png";
import icone_img3 from "./images/why-icons/03.png";
import icone_img4 from "./images/why-icons/04.png";
import icone_img5 from "./images/why-icons/05.png";
import icone_img6 from "./images/why-icons/06.png";
function WhyWrapper({ ...props }) {
  return (
    <section className="why-wrapper wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8">
            <div className="title-box">
              <h2>{props.title}</h2>
              <p>{props.text} </p>
            </div>
            <ul>
              <WhyWrapperListItemes
                image={icone_img1}
                title="مدیریت زمان دانش آموز"
              ></WhyWrapperListItemes>
              <WhyWrapperListItemes
                image={icone_img2}
                title="ارتباط با برترین اساتید ایران"
              ></WhyWrapperListItemes>
              <WhyWrapperListItemes
                image={icone_img3}
                title="پشتیبانی دانش آموزان"
              ></WhyWrapperListItemes>
              <WhyWrapperListItemes
                image={icone_img4}
                title="امکان دیدن آموزش ها به صورت آفلاین"
              ></WhyWrapperListItemes>
              <WhyWrapperListItemes
                image={icone_img5}
                title="به صرفه و پرداخت اقساطی"
              ></WhyWrapperListItemes>
              <WhyWrapperListItemes
                image={icone_img6}
                title="امکان پرسش و پاسخ از استاد"
              ></WhyWrapperListItemes>
            </ul>
          </div>
        </div>
      </div>
      <img src={props.image} alt="image" className="humanObj" />
    </section>
  );
}
WhyWrapper.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.any.isRequired,
};
export default WhyWrapper;
