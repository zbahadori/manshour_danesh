import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, FormGroup, Input } from "reactstrap";
import {
  ErrorStatus,
  ErrorMessage,
  TriggerIsAuthenticated,
} from "../../../../../services/Recoils";
import { useRecoilState } from "recoil";

const Login = ({ props }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSMSSent, setIsSMSSent] = useState(false);

  const [errorStatus, setErrorStatus] = useRecoilState(ErrorStatus);
  const [errorMessage, setErrorMessage] = useRecoilState(ErrorMessage);

  const [triggerIsAuthenticated, setTriggerIsAuthenticated] = useRecoilState(
    TriggerIsAuthenticated
  );

  useEffect(() => {
    return setIsSMSSent(false);
  }, []);

  const handleSubmitLoginStart = (e) => {
    e.preventDefault();

    console.log(process.env.REACT_APP_BACKEND_URL + "api/auth/login-start");

    const submitBtn = e.target.querySelector("#register_submit");
    submitBtn.disabled = true;

    setLoading(true);

    axios({
      url: process.env.REACT_APP_BACKEND_URL + "api/auth/login-start",
      method: "POST",

      data: {
        phone_number: phoneNumber,
      },
    }).then((res) => {
      console.log(res.data);
      submitBtn.disabled = false;
      setLoading(false);
      setIsSMSSent(res.data.success);
      setErrorStatus(res.data.success ? "success" : "danger");
      setErrorMessage(res.data.message);
    });
  };

  const handleSubmitLoginCode = (e) => {
    e.preventDefault();

    const submitBtn = e.target.querySelector("#register_submit");
    submitBtn.disabled = true;

    setLoading(true);

    axios({
      url: process.env.REACT_APP_BACKEND_URL + "api/auth/login-complete",
      method: "POST",
      data: {
        code,
      },
    }).then((res) => {
      console.log(res.data);
      submitBtn.disabled = false;
      setLoading(false);
      setErrorStatus(res.data.success ? "success" : "danger");
      setErrorMessage(res.data.message);
      setTriggerIsAuthenticated(!triggerIsAuthenticated);
    });
  };

  return (
    <section id="content1" className="tab-content">
      {loading ? (
        "Loading"
      ) : isSMSSent ? (
        <>
          <Form onSubmit={handleSubmitLoginCode}>
            <FormGroup>
              <Input
                type="text"
                name="code"
                id="code"
                placeholder="کد"
                onChange={(e) => setCode(e.target.value)}
                required
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="submit"
                className="btn btn-primary"
                id="register_submit"
                value="ورود"
              />
            </FormGroup>
            <div className="row">
              <div className="col-md-12">
                <p className="text-right">
                  <a href="#" onClick={(e) => setIsSMSSent(false)}>
                    ارسال پیام کوتاه مجدد
                  </a>
                </p>
              </div>
            </div>
          </Form>
        </>
      ) : (
        <Form onSubmit={handleSubmitLoginStart}>
          <FormGroup>
            <Input
              type="text"
              name="code"
              id="code"
              placeholder="شماره تلفن خود را وارد کنید"
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </FormGroup>

          <FormGroup>
            <Input
              type="submit"
              id="register_submit"
              className="btn btn-primary"
              value="ادامه"
            />
          </FormGroup>
        </Form>
      )}
    </section>
  );
};
export default Login;
