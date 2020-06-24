import React from "react";
// import PropTypes from "prop-types";
function Footer({ ...props }) {
  return (
    <footer class="footer">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 col-sm-6">
            <p>{props.copy_write_text}</p>
          </div>
          <div class="col-sm-6 d-none d-sm-block col">
            <p class="text-left">
              <a href={props.link} target="_blank" rel="noopener noreferrer">
                {props.disiner_text}
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
// Footer.propTypes = {
//   title: PropTypes.string.isRequired,
// };
export default Footer;
