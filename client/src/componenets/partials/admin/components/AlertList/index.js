import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ListItem from "./ListItem";
import Axios from "axios";
import { ErrorStatus, ErrorMessage } from "../../../../../services/Recoils";
import { useRecoilState } from "recoil";

function ConfirmationList() {
  const [alertList, setAlertList] = useState([]);

  const [errorStatus, setErrorStatus] = useRecoilState(ErrorStatus);
  const [errorMessage, setErrorMessage] = useRecoilState(ErrorMessage);

  useEffect(() => {
    updateListComponent();
  }, []);

  const updateListComponent = () => {
    Axios({
      url: process.env.REACT_APP_BACKEND_URL + "api/admin/get-alert",
      withCredentials: true,
      method: "POST",
    }).then((res) => {
      setAlertList(res.data.data);
    });
  };

  const deleteSignleAlert = (e, id) => {
    e.currentTarget.disabled = true;

    let data = new FormData();
    data.append("id", id);

    for (var key of data.entries()) {
      console.log(key[0] + ", " + key[1]);
    }

    Axios({
      url: process.env.REACT_APP_BACKEND_URL + "api/admin/delete-single-alert",
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      method: "POST",
      data,
    }).then((res) => {
      console.log(res.data);
      updateListComponent();
      setErrorStatus(res.data.success ? "success" : "danger");
      setErrorMessage(res.data.message);
      e.currentTarget.disabled = false;
    });
  };

  const updateSingleAlert = (e, id) => {
    console.log(id);

    // let data = new FormData();
    // data.append("phone_number", phoneNumber);

    // for (var key of data.entries()) {
    //   console.log(key[0] + ", " + key[1]);
    // }

    // Axios({
    //   url: process.env.REACT_APP_BACKEND_URL + "api/admin/confirm-national-id",
    //   withCredentials: true,
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    //   method: "POST",
    //   data,
    // }).then((res) => {
    //   console.log(res.data);
    //   updateListComponent();
    //   setErrorStatus(res.data.success ? "success" : "danger");
    //   setErrorMessage(res.data.message);
    // });
  };

  return (
    <div className="container-fluid">
      <section className="confirm-wrapper wrapper">
        <h2 className="section-title">لیست اطلاعیه ها</h2>
        <div className="py-2">
          <Link
            className="btn btn-primary p-2 hint--top"
            aria-label="اطلاعیه جدید"
            to="#"
          >
            اطلاعیه جدید
            <i className="icon-trash px-2"></i>
          </Link>
        </div>
        <div className="container-fluid">
          <table className="table table-bordered table-striped text-center">
            <thead className="thead-light">
              <tr>
                <th scope="col">ردیف</th>
                <th scope="col">تایتل اطلاعیه</th>
                <th scope="col">متن اطلاعیه</th>
                <th scope="col">تایید / حذف</th>
              </tr>
            </thead>

            <tbody>
              {alertList.map((item, index) => (
                <ListItem
                  key={index}
                  index={index + 1}
                  title={item.title}
                  message={item.message}
                  id={item.id}
                  DeleteItem={deleteSignleAlert}
                  UpdateItem={updateSingleAlert}
                />
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
// ConfirmationList.propTypes = {
//   title: PropTypes.string.isRequired,
// };
export default ConfirmationList;
