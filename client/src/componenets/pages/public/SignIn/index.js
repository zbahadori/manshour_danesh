import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./SignIn.scss";
import Logo from "../../../partials/public/assets/images/logo.png";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
import Alert from "../../../partials/public/components/Alert";
import SignUp from "../../../partials/public/components/Signup";
import Longin from "../../../partials/public/components/Login";

const Account = ({ props }) => {
  const [tabState, setTabState] = useState(false);

  return (
    <>
      <section className="login-wrapper">
        <div className="tab_container">
          <div className="logo-box">
            <Link to="/">
              <img src={Logo} alt="Logo" />
            </Link>
          </div>
          <Alert />

          <Input
            id="tab1"
            type="radio"
            name="tabs"
            checked={tabState ? false : true}
            onClick={() => {
              setTabState(false);
            }}
          />
          <label htmlFor="tab1">
            <span>ورود به حساب کاربری</span>
          </label>

          <Input
            id="tab2"
            type="radio"
            name="tabs"
            checked={tabState ? true : false}
            onClick={() => {
              setTabState(true);
            }}
          />
          <label htmlFor="tab2">
            <span>ثبت نام</span>
          </label>

          <Longin />
          <SignUp />

          {tabState ? (
            <div className="row">
              <div className="col-md-12">
                <p className="text-right">
                  عضو هستید؟ <Link to="/forget-password">وارد شوید</Link>
                </p>
              </div>
            </div>
          ) : (
            <div className="col-md-12">
              <p className="text-right">
                <Link to="/forget-password">رمز خود را فراموش کردید؟</Link>
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};
export default Account;
