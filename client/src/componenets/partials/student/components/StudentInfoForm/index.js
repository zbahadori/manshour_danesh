import React, { useState, useEffect } from "react";
import Province from "./province.json";
import CompleteList from "./completeList.json";
import Axios from "axios";
import { ErrorStatus, ErrorMessage } from "../../../../../services/Recoils";
import { useRecoilState } from "recoil";

export default function StudentInfoForm() {
  const [Cities, setCities] = useState([]);
  const [file, setFile] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [phone_number, setPhone_number] = useState("");
  const [reference_phone_number, setReference_phone_number] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [name_english, setName_english] = useState("");
  const [lastname_english, setLastname_english] = useState("");
  const [father_name, setFather_name] = useState("");
  const [grade, setGrade] = useState("");
  const [school, setSchool] = useState("");
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [user_image, setUser_image] = useState("default_image.png");

  const [errorStatus, setErrorStatus] = useRecoilState(ErrorStatus);
  const [errorMessage, setErrorMessage] = useRecoilState(ErrorMessage);

  useEffect(() => {
    updateListComponent();
  }, []);

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
    setProvince(theProvince);
    setCities(tempArray);
  };

  const handleAvatarOnChange = (e) => {
    setFile(e.target.files[0]);
    document.querySelector("#custom-text-avatar").innerHTML = "";
    document
      .querySelector("#custom-button-avatar")
      .classList.add("btn-warning");
    console.log(e.target.files[0], e.target.files[0].name);
  };

  const handleFormOnSubmit = (e) => {
    var submitBtn = document.querySelector("#custom-button-submit");
    submitBtn.disabled = true;
    e.preventDefault();

    let data = new FormData();
    data.append("phone_number", phone_number);
    data.append("reference_phone_number", reference_phone_number);
    data.append("name", name);
    data.append("lastname", lastname);
    data.append("name_english", name_english);
    data.append("lastname_english", lastname_english);
    data.append("father_name", father_name);
    data.append("grade", grade);
    data.append("school", school);
    data.append("province", province);
    data.append("city", city);
    data.append("image", file);

    for (var key of data.entries()) {
      console.log(key[0] + ", " + key[1]);
    }

    console.log(data);

    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL + "api/user/update-user-information",
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
      updateListComponent();
    });
  };

  const updateListComponent = async () => {
    Axios({
      url: process.env.REACT_APP_BACKEND_URL + "api/user/get-user-information",
      withCredentials: true,
      method: "POST",
    }).then((res) => {
      console.log(res);

      setPhone_number(res.data.data.phone_number);
      setReference_phone_number(res.data.data.reference_phone_number);
      setName(res.data.data.name);
      setLastname(res.data.data.lastname);
      setName_english(res.data.data.lastname_english);
      setLastname_english(res.data.data.lastname_english);
      setFather_name(res.data.data.father_name);
      setGrade(res.data.data.grade);
      setSchool(res.data.data.school);
      setProvince(res.data.data.province);
      //get the cities list too
      let tempArray = CompleteList.filter((item) => {
        return item.province == res.data.data.province;
      });
      tempArray = tempArray.map((item) => {
        return item.state;
      });
      tempArray = [...new Set([...tempArray])];
      setCities(tempArray);
      setCity(res.data.data.city);
      setUser_image(res.data.data.user_image);
    });
  };

  return (
    <section className="form-wrapper has-icon wrapper">
      <h2 className="section-title">ویرایش حساب کاربری</h2>
      <div className="container-fluid">
        <form className="row" onSubmit={handleFormOnSubmit}>
          <div className="col-md-6 col-lg-4 form-group">
            <label htmlFor="phoneNumber">
              شماره تماس<i className="icon-people"></i>
            </label>
            <input
              className="form-control"
              type="text"
              name="phone_number"
              id="phoneNumber"
              value={phone_number}
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
              id="referencePhoneNumber"
              value={reference_phone_number}
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
              id="name"
              placeholder="نام شما"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
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
              value={name_english}
              onChange={(e) => setName_english(e.target.value)}
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
              value={lastname_english}
              onChange={(e) => setLastname_english(e.target.value)}
            />
          </div>

          <div className="col-md-6 col-lg-4 form-group">
            <label htmlFor="fatherName">
              نام پدر<i className="icon-people"></i>
            </label>
            <input
              className="form-control"
              type="text"
              name="father-name"
              id="fatherName"
              placeholder="نام پدر شما"
              value={father_name}
              onChange={(e) => setFather_name(e.target.value)}
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
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
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
              value={school}
              onChange={(e) => setSchool(e.target.value)}
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
              value={province}
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
              value={city}
              onChange={(e) => setCity(e.target.value)}
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
              src={"./uploads/user_image/" + user_image}
              className="d-block mb-2"
              alt="عکی آواتار"
            />
            <div>
              <input
                type="file"
                className="btn btn-primary"
                data-ripple="ripple"
                id="custom-button-avatar"
                onChange={handleAvatarOnChange}
              />

              <div id="custom-text-avatar">هنوز فایلی انتخاب نشده است</div>
            </div>
          </div>

          <div className="col-12 form-group mt-5">
            <div>
              <input
                type="submit"
                className="btn btn-success"
                data-ripple="ripple"
                id="custom-button-submit"
                value="ثبت اطلاعات"
              />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
