import React from "react";
import TotalPaymentItems from "./TotalPaymentItems";
function TotalPayments() {
  return (
    <section className="wrapper">
      <h2 className="section-title">مجموعه پرداختی ها</h2>
      <div className="container-fluid">
        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
              <th scope="col">ردیف</th>
              <th scope="col">دانش آموز</th>
              <th scope="col">تاریخ پرداخت</th>
              <th scope="col">مبلغ پرداختی</th>
              <th scope="col">بابت درس</th>
              <th scope="col">وضعیت</th>
            </tr>
          </thead>
          <tbody>
            <TotalPaymentItems
              index="1"
              fullneme="نوید بهروزی مجد"
              date="۲۴ اسفند ۱۳۹۹"
              price="500,000 تومان"
              cource="۰ تا ۱۰۰ شیمی سوم دبیرستان"
              status="تایید شده"
              class_name="green-color"
            ></TotalPaymentItems>
            <TotalPaymentItems
              index="2"
              fullneme="نوید بهروزی مجد"
              date="۲۴ اسفند ۱۳۹۹"
              price="500,000 تومان"
              cource="۰ تا ۱۰۰ شیمی سوم دبیرستان"
              status="تایید شده"
              class_name="green-color"
            ></TotalPaymentItems>
            <TotalPaymentItems
              index="3"
              fullneme="نوید بهروزی مجد"
              date="۲۴ اسفند ۱۳۹۹"
              price="500,000 تومان"
              cource="۰ تا ۱۰۰ شیمی سوم دبیرستان"
              status="تایید نشده"
              class_name="red-color"
            ></TotalPaymentItems>
          </tbody>
        </table>

        <div className="dir-ltr">
          <ul className="pagination">
            <li className="page-item disabled">
              <a className="page-link" href="#" tabindex="-1">
                قبلی
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item active">
              <a className="page-link" href="#">
                2 <span className="sr-only">(فعلی)</span>
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                بعدی
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default TotalPayments;
