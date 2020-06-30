import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import {
  ErrorStatus,
  ErrorMessage,
  TriggerIsAuthenticated,
} from "../../../../../services/Recoils";
import { useRecoilState } from "recoil";

const SignUp = ({ props }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [code, setCode] = useState("");
  const [referencePhoneNumber, setReferencePhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSMSSent, setIsSMSSent] = useState(false);

  const [errorStatus, setErrorStatus] = useRecoilState(ErrorStatus);
  const [errorMessage, setErrorMessage] = useRecoilState(ErrorMessage);

  const [triggerIsAuthenticated, setTriggerIsAuthenticated] = useRecoilState(
    TriggerIsAuthenticated
  );

  const handleSubmitRegisterStart = (e) => {
    e.preventDefault();

    console.log(process.env.REACT_APP_BACKEND_URL + "api/auth/register-start");

    const submitBtn = e.target.querySelector("#register_submit");
    submitBtn.disabled = true;

    setLoading(true);

    let formData = new FormData();

    formData.append("phone_number", phoneNumber);

    if (referencePhoneNumber)
      formData.append("reference_phone_number", referencePhoneNumber);

    axios({
      url: process.env.REACT_APP_BACKEND_URL + "api/auth/register-start",
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
      setIsSMSSent(res.data.success);
      setErrorStatus(res.data.success ? "success" : "danger");
      setErrorMessage(res.data.message);
    });
  };

  const handleSubmitRegisterCode = (e) => {
    e.preventDefault();

    const submitBtn = e.target.querySelector("#register_submit");
    submitBtn.disabled = true;

    setLoading(true);

    axios({
      url: process.env.REACT_APP_BACKEND_URL + "api/auth/register-complete",
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

  useEffect(() => {
    return setIsSMSSent(false);
  }, []);

  return (
    <section id="content2" className="tab-content">
      {loading ? (
        "Loading"
      ) : isSMSSent ? (
        <>
          <form onSubmit={handleSubmitRegisterCode}>
            <div className="form-group">
              <input
                type="text"
                name="code"
                className="form-control"
                id="code"
                placeholder="کد"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="submit"
                className="btn btn-primary btn-block"
                id="register_submit"
                value="ثبت نام"
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
        <form onSubmit={handleSubmitRegisterStart}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="phone_number"
              id="phone_number"
              placeholder="شماره تلفن"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="reference_phone_number"
              id="reference_phone_number"
              placeholder="شماره تلفن معرف"
              value={referencePhoneNumber}
              onChange={(e) => setReferencePhoneNumber(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              className="btn btn-primary btn-block"
              id="register_submit"
              value="ادامه"
            />
          </div>
        </form>
      )}
    </section>
  );
};
export default SignUp;
