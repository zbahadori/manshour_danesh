import React, { useState, useEffect } from "react";
import axios from "axios";
import "./SignIn.scss";
import Logo from "../../assets/images/logo.png";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
import WithSpinner from "../../components/WithSpinner/WithSpinner";
import {
  phone_number,
  code,
  reference_phone_number,
} from "../../../../services/Recoils";
import { Spinner } from "react-bootstrap";
import Alert from "../../components/Alert/Alert";
import { atom, useRecoilState, selector } from "recoil";

const Account = ({ props }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [code, setCode] = useState("");
  const [referencePhoneNumber, setReferencePhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSMSSent, setIsSMSSent] = useState(false);
  const [tabState, setTabState] = useState(false);

  const [errorClass, setErrorClass] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handelSumbitLogin = (e) => {
    e.preventDefault();
    const btnSumbit = document.getElementById("codeBtn");
    btnSumbit.disabled = true;

    const code = document.getElementById("phone_number").value;
    setLoading(true);
    axios({
      url: process.env.REACT_APP_BACKEND_URL + "/api/auth/login-start",
      method: "POST",
      data: {
        phone_number: phoneNumber ? <WithSpinner /> : null,
      },
    })
      .then((data) => {
        btnSumbit.disabled = false;
        setLoading(false);
      })
      .catch(() => console.log(e.response));
  };

  const handleSubmitRegister = (e) => {
    e.preventDefault();

    console.log(process.env.REACT_APP_BACKEND_URL + "api/auth/register-start");

    const submitBtn = document.getElementById("register_submit");
    submitBtn.disabled = true;

    const phoneNumber = document.getElementById("phone_number").value;
    const referencePhoneNumber = document.getElementById(
      "reference_phone_number"
    ).value;
    setLoading(true);

    axios({
      url: process.env.REACT_APP_BACKEND_URL + "api/auth/register-start",
      method: "POST",

      data: {
        phone_number: phoneNumber,
        reference_phone_number: referencePhoneNumber
          ? referencePhoneNumber
          : "",
      },
    })
      .then((data) => {
        console.log(data);
        submitBtn.disabled = false;
        setLoading(false);
        setIsSMSSent(true);
        setErrorClass("success");
        setErrorMessage(data.message);
      })
      .catch((e) => {
        console.log(e);
        console.log(e.response);
        submitBtn.disabled = false;
        setLoading(false);
        setErrorClass("danger");
        setErrorMessage(e.response.data);
      });
  };

  return (
    <>
      <section className="login-wrapper">
        <div className="tab_container">
          <div className="logo-box">
            <a href="/">
              <img src={Logo} alt="Logo" />
            </a>
          </div>
          <Alert class={errorClass} message={errorMessage} />

          <input
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

          <input
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

          <section id="content1" className="tab-content">
            <form onSubmit={handelSumbitLogin}>
              <div className="form-group">
                <FormGroup>
                  <Input
                    type="text"
                    name="code"
                    id=""
                    placeholder="شماره تلفن خود را وارد کنید"
                    required
                  />
                </FormGroup>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <input
                    type="submit"
                    className="btn btn-primary"
                    id="codeBtn"
                    value=" ورود"
                  />
                </div>
                <div className="col-md-6">
                  <p className="text-left">
                    <a href="/forget-password">رمز خود را فراموش کردید؟</a>
                  </p>
                </div>
              </div>
            </form>
          </section>

          <section id="content2" className="tab-content">
            {loading ? (
              <Spinner />
            ) : isSMSSent ? (
              <>
                <div className="form-group">
                  <Input
                    type="text"
                    name="phone_number"
                    id="phone_number"
                    placeholder="کد"
                    required
                  />
                </div>
              </>
            ) : (
              <form onSubmit={handleSubmitRegister}>
                <div className="form-group">
                  <Input
                    type="text"
                    name="phone_number"
                    id="phone_number"
                    placeholder="شماره تلفن"
                    required
                  />
                </div>
                <div className="form-group">
                  <Input
                    type="text"
                    name="reference_phone_number"
                    id="reference_phone_number"
                    placeholder="شماره تلفن معرف"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    className="btn btn-primary"
                    id="register_submit"
                    value="ثبت نام"
                  />
                </div>
              </form>
            )}
            <div className="row">
              <div className="col-md-6">
                <p className="text-left">
                  عضو هستید؟ <a href="/forget-password">وارد شوید</a>
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};
export default Account;
