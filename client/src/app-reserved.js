import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StudentDashboard from "./student/routes/Dashboard";
import Account from "./student/routes/Account";
import HomePage from "./public/HomePage";
import DefaultLayout from "./admin/containers/DefaultLayout";
import Login from "./admin/views/Pages/Login";
import Register from "./admin/views/Pages/Register";
import Page404 from "./admin/views/Pages/Page404";
import Page500 from "./admin/views/Pages/Page500";

//Just  a test component
//A somewhat different implementation of react router
export default function App(props) {
  return (
    <Router>
      <Switch>
        <Route exact path="/" name="صفحه اصلی منشور دانش">
          <HomePage />
        </Route>

        {/* Admin panel routes */}
        <Route path="/admin" name="داشبورد اصلی">
          <DefaultLayout />
        </Route>
        <Route path="/admin/login">
          <Login />
        </Route>
        <Route path="/admin/register" name="ثبت نام">
          <Register />
        </Route>

        {/* Student panel routes */}
        <Route path="/student" name="پنل دانش آموز">
          <StudentDashboard />
        </Route>

        <Route path="/account" name="ورود به حساب کاربری">
          <Account />
        </Route>

        <Route path="/admin/login">
          <StudentDashboard />
        </Route>

        {/* Errors routes */}
        {/* in case that no route matches the provided routes, then redirect to the route with no path specified*/}

        <Route path="/500" name="ارور ۵۰۰">
          <Page500 />
        </Route>

        <Route name="ارور ۴۰۴">
          <Page404 />
        </Route>
      </Switch>
    </Router>
  );
}
