import React, { useState, Fragment, useEffect } from "react";
import "./StudentDashboard.scss";
import axios from "axios";

import Header from "../../student/containers/Header";
import Menu from "../../student/containers/Menu";
import Footer from "../../student/containers/Footer";

import ListTabel from "../../student/components/ListTabel/ListTabel";

export default function Dashboard(props) {
  return (
    <Fragment>
      <Header />
      <Menu />
      <main>
        <ListTabel />
      </main>
      <Footer />
    </Fragment>
  );
}
