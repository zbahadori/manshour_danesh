import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import studentImg from "./profile-pic.jpg";
import StudentListItem from "./StudentListItem";
import PaginationListItem from "./PaginationListItem";
function StudentList() {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    updateListComponent();
  }, []);

  const updateListComponent = () => {
    axios({
      url: process.env.REACT_APP_BACKEND_URL + "api/admin/get-all-users",
      withCredentials: true,
      method: "POST",
    }).then((res) => {
      console.log(res.data.data.users);
      setUsersData(res.data.data.users);
    });
  };

  return (
    <div className="container-fluid">
      <section className="wrapper">
        <h2 className="section-title">لیست کل دانش آموزان</h2>
        <div className="container-fluid">
          <table className="table table-bordered table-striped text-center">
            <thead className="thead-light">
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
              {usersData.map((item, index) => (
                <StudentListItem
                  key={index}
                  image={item.user_image}
                  fullname={item.lastname + " " + item.name}
                  father_name={item.father_name}
                  role={item.role}
                  status={item.status}
                />
              ))}
            </tbody>
          </table>

          <nav aria-label="...">
            <ul className="pagination pagination-sm">
              <PaginationListItem
                status="disabled"
                tabIndex="-1"
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
