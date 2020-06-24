import React from "react";
import PropTypes from "prop-types";
import studentImg from "../../images/profile-pic.jpg";
import StudentListItem from "./StudentListItem";
import PaginationListItem from "./PaginationListItem";
function StudentList() {
  return (
    <div className="container-fluid">
      <section class="wrapper">
        <h2 class="section-title">لیست کل دانش آموزان</h2>
        <div class="container-fluid">
          <table class="table table-bordered table-striped text-center">
            <thead class="thead-light">
              <tr>
                <th scope="col">عکس</th>
                <th scope="col">نام و نام خانوداگی</th>
                <th scope="col">نام پدر</th>
                <th scope="col">نقش</th>
                <th scope="col">وضعیت</th>
                <th scope="col">ادیت / بلاک</th>
              </tr>
            </thead>
            <tbody>
              <StudentListItem
                image={studentImg}
                fullname="نوید بهروزی مجد"
                father_name="بهرام"
                role="دانش آموز"
                status="green"
                status_text="تایید شده"
              ></StudentListItem>
              <StudentListItem
                image={studentImg}
                fullname="نوید بهروزی مجد"
                father_name="بهرام"
                role="دانش آموز"
                status="gray"
                status_text="معلق"
              ></StudentListItem>
              <StudentListItem
                image={studentImg}
                fullname="نوید بهروزی مجد"
                father_name="بهرام"
                role="دانش آموز"
                status="green"
                status_text="تایید شده"
              ></StudentListItem>
              <StudentListItem
                image={studentImg}
                fullname="نوید بهروزی مجد"
                father_name="بهرام"
                role="دانش آموز"
                status="gray"
                status_text="معلق"
              ></StudentListItem>
              <StudentListItem
                image={studentImg}
                fullname="نوید بهروزی مجد"
                father_name="بهرام"
                role="دانش آموز"
                status="red"
                status_text="تایید نشده"
              ></StudentListItem>
              <StudentListItem
                image={studentImg}
                fullname="نوید بهروزی مجد"
                father_name="بهرام"
                role="دانش آموز"
                status="green"
                status_text="تایید شده"
              ></StudentListItem>
            </tbody>
          </table>

          <nav aria-label="...">
            <ul class="pagination pagination-sm">
              <PaginationListItem
                status="disabled"
                tabindex="-1"
                text="قبلی"
                link="#"
              ></PaginationListItem>
              <PaginationListItem text="1" link="#"></PaginationListItem>
              <PaginationListItem
                status="active"
                text="2"
                link="#"
              ></PaginationListItem>
              <PaginationListItem text="3" link="#"></PaginationListItem>
              <PaginationListItem text="بعدی" link="#"></PaginationListItem>
            </ul>
          </nav>
        </div>
      </section>
    </div>
  );
}
StudentList.propTypes = {
  title: PropTypes.string.isRequired,
};
export default StudentList;
