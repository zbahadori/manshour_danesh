import React, { useState, Fragment, useEffect } from "react";
import "./StudentDashboard.scss";
import axios from "axios";

import StudentHeader from "../../../partials/student/containers/Header";
import StudentMenu from "../../../partials/student/containers/Menu";
import StudentFooter from "../../../partials/student/containers/Footer";

import ReferenceLink from "../../../partials/student/components/Link";

export default function Dashboard(props) {
  return (
    <Fragment>
      <StudentHeader />
      <StudentMenu />
      <main>
        <ReferenceLink />
      </main>
      <StudentFooter />
    </Fragment>
  );
}
