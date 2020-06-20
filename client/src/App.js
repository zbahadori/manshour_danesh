import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import StudentDashboard from "./componenets/student/routes/Dashboard";
import SignIn from "./componenets/student/routes/SignIn";
import HomePage from "./componenets/public/HomePage";
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
import { IsAuthenticated, UserRole, PhoneNumber } from "./services/Recoils";
require("dotenv").config();

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useRecoilState(IsAuthenticated);
  const [phoneNumber, setPhoneNumber] = useRecoilState(PhoneNumber);
  const [userRole, setUserRole] = useRecoilState(UserRole);
  useEffect(() => {
    axios({
      url: process.env.REACT_APP_BACKEND_URL + "api/auth/is-authenticated",
      withCredentials: true,
      method: "get",
    }).then((res) => {
      if (res.data) {
        setIsAuthenticated(res.data.success);
        setPhoneNumber(res.data.data.phone_number);
        setUserRole(res.data.data.role);
      } else {
        setIsAuthenticated(false);
        setPhoneNumber(null);
        setUserRole(null);
      }
      console.log(res.data);
    });
  }, []);
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
          exact
          path="/"
          name="ورود به حساب کاربری"
          render={(props) => {
            if (isAuthenticated) return <Redirect to="/this" />;
            else return <SignIn {...props} />;
          }}
        />

        {/* <Route
          exact
          path="/admin/teacher"
          name="صفحه اصلی منشور دانش"
          render={(props) => <TeachersList {...props} />}
        /> */}

        <Route
          exact
          path="/student/studentprofile"
          name="صفحه اصلی منشور دانش"
          render={(props) => <StudentProfile {...props} />}
        />

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
