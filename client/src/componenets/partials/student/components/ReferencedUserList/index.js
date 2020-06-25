import React, { useEffect, useState } from "react";
import studentImg from "./profile-pic.jpg";
import StudentListItem from "./StudentListItem";
import PaginationListItem from "./PaginationListItem";
import Axios from "axios";

export default function Index() {
  const [referencedUsers, setReferencedUsers] = useState([]);

  useEffect(() => {
    updateListComponent();
  }, []);

  const updateListComponent = () => {
    Axios({
      url: process.env.REACT_APP_BACKEND_URL + "api/user/referenced-users",
      withCredentials: true,
      method: "POST",
    }).then((res) => {
      console.log(res);
      setReferencedUsers(res.data.data);
    });
  };

  return (
    <div className="container-fluid">
      <section class="wrapper">
        <h2 class="section-title">لیست کل دانش آموزان معرفی شده</h2>
        <div class="container-fluid">
          <table class="table table-bordered table-striped text-center">
            <thead class="thead-light">
              <tr>
                <th scope="col">عکس</th>
                <th scope="col">نام و نام خانوداگی</th>
                <th scope="col">نام پدر</th>
                <th scope="col">وضعیت</th>
              </tr>
            </thead>
            <tbody>
              {referencedUsers.map((item, index) => (
                <StudentListItem
                  key={index}
                  user_image={item.user_image}
                  fullname={`${item.lastname} ${item.name}`}
                  father_name={`${item.father_name}`}
                  status={item.status ? "green" : "red"}
                  status_text={item.status ? "تایید نشده" : "تایید شده"}
                />
              ))}
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
