import React from "react";

import StudentHeader from "../Header";
import StudentMenu from "../Menu";
import StudentFooter from "../Footer";

import NationalIDLIst from "../../components/NationalIDLIst";

import Alert from "../../components/Alert/Alert";

export default function StudentInfo() {
  return (
    <>
      <StudentHeader />
      <StudentMenu />
      <main>
        <Alert />
        <NationalIDLIst />
      </main>
      <StudentFooter />
    </>
  );
}
