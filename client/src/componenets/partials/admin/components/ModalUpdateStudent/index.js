import React, { useState, useEffect } from "react";
import Axios from "axios";
import Modal from "../Modal";
import Province from "./province.json";
import CompleteList from "./completeList.json";
import Alert from "../Alert/Alert";

export default function Index(props) {
  const [Cities, setCities] = useState([]);

  useEffect(() => {
    let tempArray = CompleteList.filter((item) => {
      return item.province == props.province;
    });
    tempArray = tempArray.map((item) => {
      return item.state;
    });
    tempArray = [...new Set([...tempArray])];

    setCities(tempArray);
  }, [props]);

  const handleFormSubmitBtn = (e) => {
    e.preventDefault();

    console.log("submited " + props.phone_number);

    var submitBtn = document.querySelector("#custom-button-update-user-submit");
    submitBtn.disabled = true;

    let data = new FormData();

    data.append("phone_number", props.phone_number);
    data.append("name", props.name);
    data.append("lastname", props.lastname);
    data.append("name_english", props.name_english);
    data.append("lastname_english", props.lastname_english);
    data.append("father_name", props.father_name);
    data.append("grade", props.grade);
    data.append("city", props.city);
    data.append("province", props.province);
    data.append("school", props.school);
    data.append("user_image", props.user_image);

    for (var key of data.entries()) {
      console.log(key[0] + ", " + key[1]);
    }
    Axios({
      url: process.env.REACT_APP_BACKEND_URL + "api/admin/update-single-user",
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      method: "POST",
      data: data,
    }).then((res) => {
      console.log(res);
      props.setErrorStatus(res.data.success ? "success" : "danger");
      props.setErrorMessage(res.data.message);
      submitBtn.disabled = false;
      props.updateListComponent();
    });
  };

  const handleProvinceOnChange = (e) => {
    e.preventDefault();

    var theProvince = e.target.options[e.target.selectedIndex].value;

    let tempArray = CompleteList.filter((item) => {
      return item.province == theProvince;
    });
    tempArray = tempArray.map((item) => {
      return item.state;
    });
    tempArray = [...new Set([...tempArray])];
    props.setProvince(theProvince);
    setCities(tempArray);
  };

  return (
    <Modal show={props.modalState} showModalSet={props.setModalState}>
      <div className="modal-lg modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              ادیت دانش آموز
            </h5>
            <button
              type="button"
              className="close m-0 p-0 mr-auto"
              data-
              dismiss="modal"
              aria-label="Close"
              onClick={() => {
                props.setModalState(false);
              }}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <Alert />

          <form onSubmit={handleFormSubmitBtn}>
            <div className="modal-body row">
              <div className="col-md-6 col-lg-4 form-group">
                <label htmlFor="phoneNumber">
                  شماره تماس<i className="icon-people"></i>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="phone_number"
                  value={props.phone_number}
                  placeholder="شماره تماس"
                  readOnly
                />
              </div>

              <div className="col-md-6 col-lg-4 form-group">
                <label htmlFor="referencePhoneNumber">
                  شماره تماس معرف<i className="icon-people"></i>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="reference-phone-number"
                  value={props.reference_phone_number}
                  placeholder="بدون معرف"
                  readOnly
                />
              </div>

              <div className="col-md-6 form-group">
                <label htmlFor="name">
                  نام <i className="icon-user"></i>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  placeholder="نام شما"
                  value={props.name}
                  onChange={(e) => props.setName(e.target.value)}
                />
              </div>

              <div className="col-md-6 form-group">
                <label htmlFor="lastname">
                  نام خانوادگی <i className="icon-user-follow"></i>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="lastname"
                  id="lastname"
                  placeholder="نام خانوادگی شما"
                  value={props.lastname}
                  onChange={(e) => props.setLastname(e.target.value)}
                />
              </div>

              <div className="col-md-6 form-group">
                <label htmlFor="name-eng">
                  نام به انگلیسی <i className="icon-user"></i>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="name-eng"
                  id="name-eng"
                  placeholder="Your Name"
                  value={props.name_english}
                  onChange={(e) => props.setName_english(e.target.value)}
                />
              </div>

              <div className="col-md-6 form-group">
                <label htmlFor="lastname-eng">
                  نام خانوادگی به انگلیسی <i className="icon-user-follow"></i>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="lastname-eng"
                  id="lastname-eng"
                  placeholder="Your lastname"
                  value={props.lastname_english}
                  onChange={(e) => props.setLastname_english(e.target.value)}
                />
              </div>

              <div className="col-md-6 col-lg-4 form-group">
                <label htmlFor="fatherName">
                  نام پدر<i className="icon-people"></i>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="father_name"
                  id="fatherName"
                  placeholder="نام پدر شما"
                  value={props.father_name}
                  onChange={(e) => props.setFather_name(e.target.value)}
                />
              </div>

              <div className="col-md-6 col-lg-4 form-group">
                <label htmlFor="grade">
                  مقطع تحصیلی<i className="icon-badge"></i>
                </label>
                <select
                  name="grade"
                  id="grade"
                  className="form-control"
                  value={props.grade}
                  onChange={(e) => props.setGrade(e.target.value)}
                >
                  <option value="0">انتخاب کنید</option>
                  <option value="1">اول ابتدایی</option>
                  <option value="2">دوم ابتدایی</option>
                  <option value="3">سوم ابتدایی</option>
                  <option value="4">چهارم ابتدایی</option>
                  <option value="5">پنجم ابتدایی</option>
                </select>
              </div>

              <div className="col-md-6 col-lg-4 form-group">
                <label htmlFor="schoolName">
                  نام مدرسه <i className="icon-graduation"></i>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="school"
                  id="schoolName"
                  placeholder="نام مدرسه شما"
                  value={props.school}
                  onChange={(e) => props.setSchool(e.target.value)}
                />
              </div>

              <div className="col-md-6 col-lg-4 form-group">
                <label htmlFor="province">
                  استان<i className="icon-map"></i>
                </label>
                <select
                  name="province"
                  id="province"
                  className="form-control"
                  onChange={handleProvinceOnChange}
                  value={props.province}
                >
                  <option defaultValue>انتخاب کنید</option>

                  {Province.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-md-6 col-lg-4 form-group">
                <label htmlFor="city">
                  شهر<i className="icon-cursor"></i>
                </label>
                <select
                  name="city"
                  id="city"
                  className="form-control"
                  value={props.city}
                  onChange={(e) => props.setCity(e.target.value)}
                >
                  <option value="0">انتخاب کنید</option>
                  {Cities.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-12 col-lg-6 form-group">
                <label htmlFor="avatar">آپلود آواتار</label>
                <img
                  src={
                    `${process.env.REACT_APP_URL}/uploads/user_image/` +
                    props.user_image
                  }
                  className="d-block mb-2"
                  alt="عکی آواتار"
                />
                <div>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-ripple="ripple"
                    id="custom-button-change-default-avatar"
                    onClick={(e) => props.setUser_image("default_image.png")}
                  >
                    پاک کردن عکس
                  </button>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-
                dismiss="modal"
                onClick={() => {
                  props.setModalState(false);
                }}
              >
                خروج
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                id="custom-button-update-user-submit"
              >
                ثبت تغییرات
              </button>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
}
