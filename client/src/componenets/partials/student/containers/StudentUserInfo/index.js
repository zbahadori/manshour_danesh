import React from "react";

import StudentHeader from "../Header";
import StudentMenu from "../Menu";
import StudentFooter from "../Footer";

import StudentInfoForm from "../../components/StudentInfoForm";
import Alert from "../../components/Alert";

export default function StudentInfo() {
  return (
    <>
      <StudentHeader />
      <StudentMenu />
      <main>
        <Alert />

        <StudentInfoForm />
      </main>
      <StudentFooter />
    </>
  );
}
