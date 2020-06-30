import React, { useState, useEffect } from "react";
import axios from "axios";
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

    let formData = new FormData();
    formData.append("code", code);

    axios({
      url: process.env.REACT_APP_BACKEND_URL + "api/auth/login-complete",
      method: "POST",
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: formData,
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
          <form onSubmit={handleSubmitLoginCode}>
            <div className="form-group">
              <input
                type="text"
                name="code"
                className="form-control"
                id="code"
                placeholder="کد"
                onChange={(e) => setCode(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="submit"
                className="btn btn-primary btn-block"
                id="register_submit"
                value="ورود"
              />
            </div>
            <div className="row">
              <div className="col-md-12">
                <p className="text-right">
                  <a href="#" onClick={(e) => setIsSMSSent(false)}>
                    ارسال پیام کوتاه مجدد
                  </a>
                </p>
              </div>
            </div>
          </form>
        </>
      ) : (
        <form onSubmit={handleSubmitLoginStart}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="code"
              id="code"
              placeholder="شماره تلفن خود را وارد کنید"
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              className="form-control"
              id="register_submit"
              className="btn btn-primary btn-block"
              value="ادامه"
            />
          </div>
        </form>
      )}
    </section>
  );
};
export default Login;
