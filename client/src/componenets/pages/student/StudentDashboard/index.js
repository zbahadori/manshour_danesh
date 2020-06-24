import React, { useState, Fragment, useEffect } from "react";
import "./StudentDashboard.scss";
import axios from "axios";

import StudentHeader from "../../../partials/student/containers/Header";
import StudentMenu from "../../../partials/student/containers/Menu";
import StudentFooter from "../../../partials/student/containers/Footer";

import ListTabel from "../../../partials/student/components/ListTabel/ListTabel";

export default function Dashboard(props) {
  return (
    <Fragment>
      <StudentHeader />
      <StudentMenu />
      <main>
        <ListTabel />
      </main>
      <StudentFooter />
    </Fragment>
  );
}
