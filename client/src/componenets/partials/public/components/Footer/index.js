import React from "react";
import PropTypes from "prop-types";
import PopularLink from "./PopularLink";
import ContactUs from "./ContactUs";
import SosialLinks from "./SosialLinks";
import CopyRight from "./CopyRight";
function Footer({ ...props }) {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-3">
            <img src={props.footer_logo} alt="Logo" title="Logo" />
            <p>{props.footer_text}</p>
          </div>
          <div className="col-md-6 col-lg-3">
            <h5 className="footer-title">لینک های پرکاربرد</h5>
            <ul>
              <PopularLink link="#" title="دوره های رایگان"></PopularLink>
              <PopularLink link="#" title="ساعت کلاس ها"></PopularLink>
              <PopularLink link="#" title="مقاطع تحصیلی مختلف"></PopularLink>
              <PopularLink link="#" title="ثبت نام"></PopularLink>
              <PopularLink link="#" title="ورود"></PopularLink>
            </ul>
          </div>
          <div className="col-md-6 col-lg-3">
            <ContactUs
              title="ارتباط با ما"
              phone="0263 123 45 67"
              mobile="0912 345 67 89"
              address="
                  دفتر مرکزی: کرج - بلوار جمهوری - جنب باغ فاتح - ادامه ی آدرس
                  شما در این قسمت نوشته میشود
                "
            ></ContactUs>
          </div>
          <div className="col-md-6 col-lg-3">
            <h5 className="footer-title">ما را دنبال کنید</h5>
            <div className="d-flex">
              <SosialLinks name="instagram" link="#"></SosialLinks>
              <SosialLinks name="telegram" link="#"></SosialLinks>
              <SosialLinks name="facebook" link="#"></SosialLinks>
              <SosialLinks name="twitter" link="#"></SosialLinks>
            </div>
          </div>
        </div>

        <div className="copy-right">
          <CopyRight
            company_link="https://zobdeganweb.com"
            desiner="زبدگان"
          ></CopyRight>
        </div>
      </div>
    </footer>
  );
}
Footer.propTypes = {
  footer_logo: PropTypes.string.isRequired,
  footer_text: PropTypes.string.isRequired,
};
export default Footer;
