import React, { useState } from "react";
import Axios from "axios";
import { ErrorStatus, ErrorMessage } from "../../../../../services/Recoils";
import { useRecoilState } from "recoil";

export default function Index() {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const [errorStatus, setErrorStatus] = useRecoilState(ErrorStatus);
  const [errorMessage, setErrorMessage] = useRecoilState(ErrorMessage);

  const handleFormSubmitBtn = (e) => {
    var submitBtn = document.querySelector(
      "#custom-button-create-alert-submit"
    );
    submitBtn.disabled = true;
    e.preventDefault();

    let data = new FormData();
    data.append("title", title);
    data.append("message", message);

    for (var key of data.entries()) {
      console.log(key[0] + ", " + key[1]);
    }
    Axios({
      url: process.env.REACT_APP_BACKEND_URL + "api/admin/create-alert",
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      method: "POST",
      data: data,
    }).then((res) => {
      console.log(res);
      setErrorStatus(res.data.success ? "success" : "danger");
      setErrorMessage(res.data.message);
      submitBtn.disabled = false;
      if (res.data.success) {
        setTitle("");
        setMessage("");
      }
    });
  };

  return (
    <section className="form-wrapper wrapper">
      <h2 className="section-title">ثبت اطلاعیه جدید</h2>
      <div className="container-fluid">
        <form className="row" onSubmit={handleFormSubmitBtn}>
          <div className="col-12 my-2">
            <input
              type="text"
              className="form-control"
              placeholder="تایتل اطلاعیه"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </div>
          <div className="col-12 my-2">
            <textarea
              className="form-control h-auto"
              placeholder="متن اطلاعیه"
              rows="30"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            ></textarea>
          </div>
          <div className="col-sm-5 col-md-4 col-lg-3">
            <button
              type="submit"
              className="btn btn-success d-block"
              id="custom-button-create-alert-submit"
              data-ripple="ripple"
            >
              ثبت
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
