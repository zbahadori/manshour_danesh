import React from "react";
import PropTypes from "prop-types";
function ContactUs({ ...props }) {
  return (
    <div>
      <h5 className="footer-title">{props.title}</h5>
      <ul>
        <li>
          <i className="fas fa-phone-alt"></i>
          <a href={`tel:${props.phone}`} className="ltr-text">
            {props.phone}
          </a>
        </li>
        <li>
          <i className="fas fa-mobile"></i>
          <a href={`tel:${props.mobile}`} className="ltr-text">
            {props.mobile}
          </a>
        </li>
        <li>
          <i className="fas fa-map-pin"></i>
          <span>{props.address}</span>
        </li>
      </ul>
    </div>
  );
}
ContactUs.propTypes = {
  title: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  mobile: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
};
export default ContactUs;
