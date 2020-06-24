import React, { useState, useEffect } from "react";
import ConfirmationListItem from "./ConfirmationListItem";
import Axios from "axios";
import { ErrorStatus, ErrorMessage } from "../../../../../services/Recoils";
import { useRecoilState } from "recoil";

function ConfirmationList() {
  const [nationalIDList, setNationalIDList] = useState([]);

  const [errorStatus, setErrorStatus] = useRecoilState(ErrorStatus);
  const [errorMessage, setErrorMessage] = useRecoilState(ErrorMessage);

  useEffect(() => {
    updateListComponent();
  }, []);

  const updateListComponent = () => {
    Axios({
      url: process.env.REACT_APP_BACKEND_URL + "api/admin/get-national-id",
      withCredentials: true,
      method: "POST",
    }).then((res) => {
      console.log(res.data);
      setNationalIDList(res.data.data);
    });
  };

  const deleteSingleNationalID = (phoneNumber) => {
    console.log(phoneNumber);

    let data = new FormData();
    data.append("phone_number", phoneNumber);

    // for (var key of data.entries()) {
    //   console.log(key[0] + ", " + key[1]);
    // }

    Axios({
      url: process.env.REACT_APP_BACKEND_URL + "api/admin/delete-national-id",
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
    });
  };

  const confirmSingleNationalID = (phoneNumber) => {
    console.log(phoneNumber);

    let data = new FormData();
    data.append("phone_number", phoneNumber);

    // for (var key of data.entries()) {
    //   console.log(key[0] + ", " + key[1]);
    // }

    Axios({
      url: process.env.REACT_APP_BACKEND_URL + "api/admin/confirm-national-id",
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
    });
  };

  return (
    <div className="container-fluid">
      <section class="confirm-wrapper wrapper">
        <h2 class="section-title">لیست تایید کارت ملی</h2>
        <div class="container-fluid">
          <table class="table table-bordered table-striped text-center">
            <thead class="thead-light">
              <tr>
                <th scope="col">ردیف</th>
                <th scope="col">نام و نام خانوداگی</th>
                <th scope="col">شماره ملی</th>
                <th scope="col">عکس</th>
                <th scope="col">تایید / حذف</th>
              </tr>
            </thead>

            <tbody>
              {nationalIDList.map((item, index) => (
                <ConfirmationListItem
                  key={index}
                  index={index + 1}
                  phoneNumber={item.phone_number}
                  nationalID={item.national_id}
                  image={item.national_id_image}
                  id={item.id}
                  verified={item.verified}
                  DeleteItem={deleteSingleNationalID}
                  ConfirmItem={confirmSingleNationalID}
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
