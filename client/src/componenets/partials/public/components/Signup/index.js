import React, { useEffect, useState } from "react";
import axios from "axios";
import { Form, FormGroup, Input } from "reactstrap";
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

    let data = new FormData();

    data.append("phone_number", phoneNumber);

    if (referencePhoneNumber)
      data.append("reference_phone_number", referencePhoneNumber);

    axios({
      url: process.env.REACT_APP_BACKEND_URL + "api/auth/register-start",
      method: "POST",
      data,
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
          <Form onSubmit={handleSubmitRegisterCode}>
            <FormGroup>
              <Input
                type="text"
                name="code"
                id="code"
                placeholder="کد"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                required
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="submit"
                className="btn btn-primary"
                id="register_submit"
                value="ثبت نام"
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
        <Form onSubmit={handleSubmitRegisterStart}>
          <FormGroup>
            <Input
              type="text"
              name="phone_number"
              id="phone_number"
              placeholder="شماره تلفن"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="text"
              name="reference_phone_number"
              id="reference_phone_number"
              placeholder="شماره تلفن معرف"
              value={referencePhoneNumber}
              onChange={(e) => setReferencePhoneNumber(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="submit"
              className="btn btn-primary"
              id="register_submit"
              value="ادامه"
            />
          </FormGroup>
        </Form>
      )}
    </section>
  );
};
export default SignUp;
