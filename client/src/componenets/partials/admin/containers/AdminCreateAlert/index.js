import React from "react";

import StudentHeader from "../Header";
import StudentMenu from "../Menu";
import StudentFooter from "../Footer";

import CreateAlert from "../../components/CreateAlert";

import Alert from "../../components/Alert/Alert";

export default function StudentInfo() {
  return (
    <>
      <StudentHeader />
      <StudentMenu />
      <main>
        <Alert />
        <CreateAlert />
      </main>
      <StudentFooter />
    </>
  );
}
