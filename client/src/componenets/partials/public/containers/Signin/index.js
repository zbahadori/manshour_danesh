import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./signin.scss";
import Logo from "../../assets/images/logo.png";
import { Input } from "reactstrap";
import Alert from "../../components/Alert";
import SignUp from "../../components/Signup";
import Longin from "../../components/Login";

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
        </div>
      </section>
    </>
  );
};
export default Account;
