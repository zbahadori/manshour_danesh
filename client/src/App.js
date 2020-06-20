import React, { useEffect, useState } from "react";
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
import AdminDashboard from "./componenets/admin/component/dashboard";
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
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    axios({
      url: process.env.REACT_APP_BACKEND_URL + "api/auth/is-authenticated",
      withCredentials: true,
      method: "get",
    })
      .then((res) => {
        try {
          setIsAuthenticated(res.data.success);
          setPhoneNumber(res.data.data.phone_number);
          setUserRole(res.data.data.role);
        } catch (e) {
          setIsAuthenticated(false);
          setPhoneNumber(null);
          setUserRole(null);
        }

        console.log(res.data);
      })
      .finally(() => {
        setIsLoaded(true);
      });
  }, []);
  return isLoaded ? (
    <Router>
      <Switch>
        {/* Login Route */}
        <Route
          exact
          path="/signin"
          name="ورود به حساب کاربری"
          render={(props) => {
            if (isAuthenticated) return <Redirect to="/student/dashboard" />;
            else return <SignIn {...props} />;
          }}
        />

        {/* Student panel routes */}
        <Route
          exact
          path="/student/dashboard"
          name="پنل دانش آموز"
          render={(props) => {
            if (isAuthenticated) return <StudentDashboard {...props} />;
            else return <Redirect to="/signin" />;
          }}
        />

        {/* Admin panel routes */}
        <Route
          exact
          path="/admin/dashboard"
          name="داشبورد اصلی"
          render={(props) => {
            if (isAuthenticated && userRole == "admin")
              return <AdminDashboard {...props} />;
            else return <Redirect to="/signin" />;
          }}
        />

        {/* Student's Profile Route */}
        {/* <Route
          exact
          path="/student/studentprofile"
          name="صفحه اصلی منشور دانش"
          render={(props) => <StudentProfile {...props} />}
        /> */}

        {/* Static page routes */}
        {/* <Route
          exact
          path="/"
          name="صفحه اصلی منشور دانش"
          render={(props) => <MainPage {...props} />}
        /> */}

        {/* <Route
          exact
          path="/admin/teacher"
          name="صفحه اصلی منشور دانش"
          render={(props) => <TeachersList {...props} />}
        /> */}

        {/* <Route
          path="/admin/"
          name="ثبت نام"
          render={(props) => <AdminPanel {...props} />}
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
  ) : (
    "Loading"
  );
}
