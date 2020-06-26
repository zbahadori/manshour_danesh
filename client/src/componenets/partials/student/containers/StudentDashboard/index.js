import React, { useState, Fragment, useEffect } from "react";
import "./StudentDashboard.scss";

import StudentHeader from "../Header";
import StudentMenu from "../Menu";
import StudentFooter from "../Footer";

import ReferenceLink from "../../components/Link";
import ReferencedUsers from "../../components/ReferencedUsers";
import NewAlert from "../../components/NewAlert";

export default function Dashboard(props) {
  return (
    <Fragment>
      <StudentHeader />
      <StudentMenu />
      <main>
        <NewAlert />
        <ReferencedUsers />
        <ReferenceLink />
      </main>
      <StudentFooter />
    </Fragment>
  );
}
