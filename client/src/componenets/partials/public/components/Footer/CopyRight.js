import React from "react";
import PropTypes from "prop-types";
function CopyRight({ ...props }) {
  return (
    <p>
      طراحی و پیاده سازی توسط{" "}
      <a href={props.company_link} target="_blank">
        {props.desiner}
      </a>
    </p>
  );
}
CopyRight.propTypes = {
  company_link: PropTypes.string.isRequired,
  desiner: PropTypes.string.isRequired,
};
export default CopyRight;
