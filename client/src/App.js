import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import StudentDashboard from "./student/routes/Dashboard";
import Account from "./student/routes/Account";
import HomePage from "./public/HomePage";

import DefaultLayout from "./admin/containers/DefaultLayout";
import Login from "./admin/views/Pages/Login";
import Register from "./admin/views/Pages/Register";
import Page404 from "./admin/views/Pages/Page404";
import Page500 from "./admin/views/Pages/Page500";
import AdminPanel from "./admin/component/AdminPanel";
import MainPage from "./admin/component/MainPage";
import Test from "./student/components/Test/Test";
import StudentProfile from "./student/containers/header/StudentProfile/StudentProfile";
import { isAuthenticated } from './repository';
import TeachersList from "./admin/component/TeachersList/TeachersList";


//import { UsersList } from './admin/component/UsersList/UsersList';


require('dotenv').config();



class App extends React.Component {


  logOut() {
    localStorage.removeItem('x-access-token');
  }



  render() {



    return (
      <Router >
        <Switch>
          {/* Static page routes */}

          <Route
            exact
            path="/"
            name="صفحه اصلی منشور دانش"
            render={(props) => <MainPage {...props} />}
          />




          <Route
            exact
            path="/student/test"
            name="صفحه اصلی منشور دانش"
            render={(props) => <Test {...props} />}
          />


          <Route
            exact
            path="/admin/teacher"
            name="صفحه اصلی منشور دانش"
            render={(props) => <TeachersList {...props} />}
          />

          <Route
            exact
            path="/student/studentprofile"
            name="صفحه اصلی منشور دانش"
            render={(props) => <StudentProfile {...props} />}
          />


          {/* Admin panel routes */}
          <Route
            exact
            path="/admin/dashbord"
            name="داشبورد اصلی"
            render={(props) => <DefaultLayout {...props} />}
          />

          <Route
            path="/admin/"
            name="ثبت نام"
            render={(props) => <AdminPanel {...props} />}
          />



          {/* Student panel routes */}
          <Route
            path="/student"
            name="پنل دانش آموز"
            render={(props) => <StudentDashboard {...props} />}
          />
          <Route
            path="/account"
            name="ورود به حساب کاربری"
            render={(props) => <Account {...props} />}
          />

          {/* Errors routes */}
          {/* in case that no route matches the provided routes, then redirect to the route with no path specified*/}
          <Route
            path="/500"
            name="ارور ۵۰۰"
            render={(props) => <Page500 {...props} />}
          />
          <Route name="ارور ۴۰۴" render={(props) => <Page404 {...props} />} />

        </Switch>
      </Router>
    );
  }
}

export default App;
