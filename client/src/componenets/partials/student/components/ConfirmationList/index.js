import React from "react";
import NationalCartImg from "../../images/meliCard-sample.png";
import ConfirmationListItem from "./ConfirmationListItem";
function ConfirmationList() {
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
              <ConfirmationListItem
                id="1"
                fullname="نوید بهروزی مجد"
                nationalcode="1234567890"
                image={NationalCartImg}
              ></ConfirmationListItem>
              <ConfirmationListItem
                id="2"
                fullname="نوید بهروزی مجد"
                nationalcode="1234567890"
                image={NationalCartImg}
              ></ConfirmationListItem>
              <ConfirmationListItem
                id="3"
                fullname="نوید بهروزی مجد"
                nationalcode="1234567890"
                image={NationalCartImg}
              ></ConfirmationListItem>
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
