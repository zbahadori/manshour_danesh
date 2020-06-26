import React, { useState, useEffect } from "react";
import "./link.scss";
import Axios from "axios";

function Link() {
  const [reference_link, setReference_link] = useState("");

  useEffect(() => {
    updateListComponent();
  }, []);

  const updateListComponent = async () => {
    Axios({
      url: process.env.REACT_APP_BACKEND_URL + "api/user/reference-link",
      withCredentials: true,
      method: "POST",
    }).then((res) => {
      setReference_link(res.data.data);
    });
  };

  const handleCopyBtnOnClick = () => {
    navigator.clipboard.writeText(reference_link);
  };
  return (
    <div className="container-fluid">
      <section className="form-wrapper wrapper">
        <h2 className="section-title">لینک معرفی شما برای دوستانتان</h2>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-5 col-md-4 col-lg-3">
              <button
                className="btn btn-primary d-block"
                data-ripple="ripple"
                onClick={handleCopyBtnOnClick}
              >
                کپی کنید
              </button>
            </div>
            <div className="col-sm-7 col-md-8 col-lg-9">
              <input
                type="text"
                className="form-control text-left"
                value={reference_link}
                id="reference_link"
                readOnly
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Link;
