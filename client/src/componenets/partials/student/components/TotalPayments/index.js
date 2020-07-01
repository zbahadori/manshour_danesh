import React from "react";
import TotalPaymentItems from "./TotalPaymentItems";
function TotalPayments() {
  return (
    <section class="wrapper">
      <h2 class="section-title">مجموعه پرداختی ها</h2>
      <div class="container-fluid">
        <table class="table table-striped">
          <thead class="thead-dark">
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

        <div class="dir-ltr">
          <ul class="pagination">
            <li class="page-item disabled">
              <a class="page-link" href="#" tabindex="-1">
                قبلی
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                1
              </a>
            </li>
            <li class="page-item active">
              <a class="page-link" href="#">
                2 <span class="sr-only">(فعلی)</span>
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                3
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
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
