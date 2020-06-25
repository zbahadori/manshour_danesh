import React from "react";

import StudentHeader from "../Header";
import StudentMenu from "../Menu";
import StudentFooter from "../Footer";

import ReferencedUserList from "../../components/ReferencedUserList";

import Alert from "../../components/Alert";

export default function StudentInfo() {
  return (
    <>
      <StudentHeader />
      <StudentMenu />
      <main>
        <Alert />
        <ReferencedUserList />
      </main>
      <StudentFooter />
    </>
  );
}
