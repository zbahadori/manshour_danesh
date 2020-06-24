import React from "react";

import StudentHeader from "../Header";
import StudentMenu from "../Menu";
import StudentFooter from "../Footer";

import StudentList from "../../components/StudentList";

import Alert from "../../components/Alert/Alert";

export default function StudentInfo() {
  return (
    <>
      <StudentHeader />
      <StudentMenu />
      <main>
        <Alert />
        <StudentList />
      </main>
      <StudentFooter />
    </>
  );
}
