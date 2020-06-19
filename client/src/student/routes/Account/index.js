import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Account.scss";
import Logo from "../../assets/images/logo.png";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Router, Route, Link } from "react-router-dom";
import { login } from "../../../repository";
import ModalComponent from "../../components/ModalComponent/ModalComponent";
import WithSpinner from "../../components/WithSpinner/WithSpinner";

import { Spinner } from "react-bootstrap";
import AuthService from "../../../services/auth.service";
import Alert from "../../../admin/component/Alert";




/// agar requre code false bod  hame fildha(stateha) be gheir az fieldhaye code baraye ro baraye rejister start befrest ba axios
////bad az in requre code beshe true (set state bayad beshe true)
///agar requre code true bod hame fildha bayad bere baraye rejister complite

const Account = ({ props }) => {
  const [phoneNumber, setPhoneNumber] = useState();
  const [code, setCode] = useState();
  const [referencePhoneNumber, setReferencePhoneNumber] = useState();
  const [loading, setLoading] = useState(false);
  const [isSMSSent, setIsSMSSent] = useState(false);

  const handelSumbitLogin = (e) => {
    e.preventDefault();

    const btnSumbit = document.getElementById("code");
    btnSumbit.disabled = true;

    const code = document.getElementById("phone_number").value;
    setLoading(true);
    axios({
      url: "https://manshour.herokuapp.com/" + "/api/auth/login-start",
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

    console.log(process.env);

    const submitBtn = document.getElementById("register_submit");
    submitBtn.disabled = true;

    const phoneNumber = document.getElementById("phone_number").value;
    const referencePhoneNumber = document.getElementById(
      "reference_phone_number"
    ).value;
    setLoading(true);

    axios({
      url: "https://manshour.herokuapp.com/" + "api/auth/register-start",
      method: "POST",

      data: {
        phone_number: phoneNumber,
        reference_phone_number: referencePhoneNumber
          ? referencePhoneNumber
          : null,
      },
    })
      .then((data) => {
        console.log(data);
        submitBtn.disabled = false;
        setLoading(false);
        setIsSMSSent(true);
      })
      .catch((e) => {
        console.log(e.response);
        submitBtn.disabled = false;
        setLoading(false);
      })

  }

  return (
    <>
      <section className="login-wrapper">
        <div className="tab_container">
          <div className="logo-box">
            <a href="/">
              <img src={Logo} alt="Logo" />
            </a>
          </div>

          <input id="tab1" type="radio" name="tabs" checked />
          <label htmlFor="tab1">
            <span>ورود به حساب کاربری</span>
          </label>

          <input id="tab2" type="radio" name="tabs" />
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
                    id="code"
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
            <form onSubmit={handleSubmitRegister}>
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
                    <>
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
                    </>
                  )}
              <div className="row">
                <div className="col-md-6">
                  <input
                    type="submit"
                    className="btn btn-primary"
                    id="register_submit"
                    value="ثبت نام"
                  />
                </div>
                <div className="col-md-6">
                  <p className="text-left">
                    عضو هستید؟ <a href="/forget-password">وارد شوید</a>
                  </p>
                </div>
              </div>
            </form>
          </section>
        </div>
      </section>
    </>
  );
};
export default Account;
