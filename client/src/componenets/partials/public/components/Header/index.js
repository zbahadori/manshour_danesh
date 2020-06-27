import React from "react";
import PropTypes from "prop-types";
import MenuItems from "./MenuItems";
function Header({ ...props }) {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <a href="/" className="logo">
              <img src={props.logo} alt={props.alt} title={props.title} />
            </a>
          </div>
          <div className="col-md-8">
            <div className="menu-content">
              <ul>
                <MenuItems active="true" link="#" title="صفحه اصلی"></MenuItems>
                <MenuItems
                  active="false"
                  link="#"
                  title="لیست دبیران"
                ></MenuItems>
                <MenuItems
                  active="false"
                  link="#"
                  title="برنامه کلاس ها"
                ></MenuItems>
                <MenuItems active="false" link="#" title="آزمون ها"></MenuItems>
                <MenuItems
                  active="false"
                  link="#"
                  title="تماس با ما"
                ></MenuItems>
              </ul>
            </div>
          </div>
          <div className="col-md-2">
            <div className="redirect">
              <a href="#" target="_blank" data-ripple="ripple">
                ورود به پنل کاربری
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
Header.propTypes = {
  logo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Header;
