import React, { useEffect } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import StudentDashboard from "./componenets/student/routes/Dashboard";
import SignIn from "./componenets/student/routes/SignIn";
import HomePage from "./public/HomePage";
import DefaultLayout from "./componenets/admin/containers/DefaultLayout";
import Login from "./componenets/admin/views/Pages/Login";
import Register from "./componenets/admin/views/Pages/Register";
import Page404 from "./componenets/admin/views/Pages/Page404";
import Page500 from "./componenets/admin/views/Pages/Page500";
import AdminPanel from "./componenets/admin/component/AdminPanel";
import MainPage from "./componenets/admin/component/MainPage";
import StudentProfile from "./componenets/student/containers/header/StudentProfile/StudentProfile";
import TeachersList from "./componenets/admin/component/TeachersList/TeachersList";

import { atom, useRecoilState, selector } from "recoil";
import { testState } from "./services/Recoils";
require("dotenv").config();

export default function App() {
  return (
    <Router>
      <Switch>
        {/* Static page routes */}
        {/* <Route
          exact
          path="/"
          name="صفحه اصلی منشور دانش"
          render={(props) => <MainPage {...props} />}
        /> */}
        <Route
          path="/"
          name="ورود به حساب کاربری"
          render={(props) => <SignIn {...props} />}
        />

        {/* <Route
          exact
          path="/admin/teacher"
          name="صفحه اصلی منشور دانش"
          render={(props) => <TeachersList {...props} />}
        /> */}

        {/* <Route
          exact
          path="/student/studentprofile"
          name="صفحه اصلی منشور دانش"
          render={(props) => <StudentProfile {...props} />}
        /> */}

        {/* Admin panel routes */}
        {/* <Route
          exact
          path="/admin/dashbord"
          name="داشبورد اصلی"
          render={(props) => <DefaultLayout {...props} />}
        /> */}

        {/* <Route
          path="/admin/"
          name="ثبت نام"
          render={(props) => <AdminPanel {...props} />}
        /> */}

        {/* Student panel routes */}
        {/* <Route
          path="/student"
          name="پنل دانش آموز"
          render={(props) => <StudentDashboard {...props} />}
        /> */}

        {/* Errors routes */}
        {/* in case that no route matches the provided routes, then redirect to the route with no path specified*/}
        {/* <Route
          path="/500"
          name="ارور ۵۰۰"
          render={(props) => <Page500 {...props} />}
        /> */}
        <Route name="ارور ۴۰۴" render={(props) => <Page404 {...props} />} />
      </Switch>
    </Router>
  );
}
