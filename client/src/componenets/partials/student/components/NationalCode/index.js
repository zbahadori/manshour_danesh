import React, { useState, useEffect, useRef } from "react";
import "./national_code.scss";
import Axios from "axios";
import { ErrorStatus, ErrorMessage } from "../../../../../services/Recoils";
import { useRecoilState } from "recoil";

function NationalCode({ ...props }) {
  const inputFileRef = useRef(null);
  const [national_id, setNational_Id] = useState("");

  const [image, setImage] = useState("");
  const [imageFile, setImageFile] = useState();
  const [errorStatus, setErrorStatus] = useRecoilState(ErrorStatus);
  const [errorMessage, setErrorMessage] = useRecoilState(ErrorMessage);

  const updateListComponent = () => {
    Axios({
      url: process.env.REACT_APP_BACKEND_URL + "api/user/get-national-id",
      withCredentials: true,
      method: "POST",
    }).then((res) => {
      if (res.data.data) {
        setNational_Id(res.data.data.national_id);
        setImage(res.data.data.national_id_image);
      }
    });
  };

  const onChangeImage = (e) => {
    setImageFile(e.target.files[0]);
  };

  useEffect(() => {
    updateListComponent();
  }, []);

  const handleSubmitForm = (e) => {
    e.preventDefault();

    var submitBtn = document.querySelector("#custom-button-national-submit");
    submitBtn.disabled = true;

    let data = new FormData();

    data.append("national_id", national_id);
    data.append("national_id_image", imageFile);
    data.append("national_id_image_name", image);

    for (var key of data.entries()) {
      console.log(key[0] + ", " + key[1]);
    }

    Axios({
      url: process.env.REACT_APP_BACKEND_URL + "api/user/update-national-id",
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      method: "POST",
      data,
    }).then((res) => {
      console.log(res);
      setErrorStatus(res.data.success ? "success" : "danger");
      setErrorMessage(res.data.message);
      submitBtn.disabled = false;
      updateListComponent();
    });
  };

  return (
    <div className="container-fluid">
      <section className="form-wrapper has-icon wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <form className="row" onSubmit={handleSubmitForm}>
                <div className="col-md-6">
                  <label className="meliCard-label" htmlFor="meliNumber">
                    شماره ملی
                    <span className="tip">
                      شماره ملی خود را وارد کرده، سپس عکس اسکن شده آن را در باکس
                      بقل آپلود کنید
                    </span>
                  </label>
                  <div className="form-group mb-3">
                    <input
                      className="form-control p-3"
                      type="text"
                      name="national_id"
                      id="national_id"
                      placeholder="031*******"
                      maxLength="10"
                      value={national_id}
                      onChange={(e) => setNational_Id(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group mb-0">
                    <button
                      type="submit"
                      className="btn btn-success pl-3 pr-3"
                      data-ripple="ripple"
                      id="custom-button-national-submit"
                    >
                      ثبت اطلاعات
                    </button>
                  </div>
                </div>
                <div className="col-md-6 ">
                  <div className="image NasionalCart">
                    <img
                      className="NasionalCart"
                      src={
                        `${process.env.REACT_APP_URL}/uploads/user_image/national_id/` +
                        image
                      }
                      alt="کارت ملی"
                      title="کارت ملی"
                    />
                    <div className="overal NasionalCart">
                      <input
                        type="file"
                        ref={inputFileRef}
                        id="image"
                        name="image"
                        hidden="hidden"
                        onChange={onChangeImage}
                      />
                      <button
                        type="button"
                        className="btn"
                        data-ripple="ripple"
                        id="meliCardBtn"
                        onClick={() => inputFileRef.current.click()}
                      >
                        یک عکس انتخاب کنید...
                      </button>
                      <span id="meliCardTxt">هنوز فایلی انتخاب نشده است</span>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NationalCode;
