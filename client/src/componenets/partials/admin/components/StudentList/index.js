import React, { useState, useEffect } from "react";
import axios from "axios";
import StudentListItem from "./StudentListItem";
import PaginationListItem from "./PaginationListItem";
import ModalUpdateStudent from "../ModalUpdateStudent";
import { ErrorStatus, ErrorMessage } from "../../../../../services/Recoils";
import { useRecoilState } from "recoil";
function StudentList() {
  const [usersData, setUsersData] = useState([]);

  const [modalState, setModalState] = useState(false);

  const [phone_number, setPhone_number] = useState("");
  const [reference_phone_number, setReference_phone_number] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [name_english, setName_english] = useState("");
  const [lastname_english, setLastname_english] = useState("");
  const [father_name, setFather_name] = useState("");
  const [grade, setGrade] = useState();
  const [school, setSchool] = useState("");
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [user_image, setUser_image] = useState("default_image.png");

  const [errorStatus, setErrorStatus] = useRecoilState(ErrorStatus);
  const [errorMessage, setErrorMessage] = useRecoilState(ErrorMessage);

  useEffect(() => {
    updateListComponent();
  }, []);

  const updateItem = (phone_number) => {
    const list = usersData.filter(
      (item, index) => item.phone_number == phone_number
    );
    console.log(list[0]);
    setPhone_number(list[0].phone_number);
    setReference_phone_number(list[0].reference_phone_number);
    setName(list[0].name);
    setLastname(list[0].lastname);
    setName_english(list[0].name_english);
    setLastname_english(list[0].lastname_english);
    setFather_name(list[0].father_name);
    setGrade(list[0].grade);
    setSchool(list[0].school);
    setProvince(list[0].province);
    setCity(list[0].city);
    setUser_image(list[0].user_image);

    setModalState(true);
  };

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
    <>
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
                    phone_number={item.phone_number}
                    updateItem={updateItem}
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
      <ModalUpdateStudent
        modalState={modalState}
        setModalState={setModalState}
        setErrorStatus={setErrorStatus}
        setErrorMessage={setErrorMessage}
        updateListComponent={updateListComponent}
        phone_number={phone_number}
        setPhone_number={setPhone_number}
        reference_phone_number={reference_phone_number}
        setReference_phone_number={setReference_phone_number}
        name={name}
        setName={setName}
        lastname={lastname}
        setLastname={setLastname}
        name_english={name_english}
        setName_english={setName_english}
        lastname_english={lastname_english}
        setLastname_english={setLastname_english}
        father_name={father_name}
        setFather_name={setFather_name}
        grade={grade}
        setGrade={setGrade}
        school={school}
        setSchool={setSchool}
        province={province}
        setProvince={setProvince}
        city={city}
        setCity={setCity}
        user_image={user_image}
        setUser_image={setUser_image}
      />
    </>
  );
}

export default StudentList;
