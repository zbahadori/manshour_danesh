import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import axios from "axios";

import SignIn from "./componenets/pages/public/SignIn";
import StudentDashboard from "./componenets/partials/student/containers/StudentDashboard";
import AdminDashboard from "./componenets/pages/admin/AdminDashboard";
import AdminUserList from "./componenets/pages/admin/AdminUserList";
import StudentUserInfo from "./componenets/pages/student/StudentUserInfo";
import AdminNationalID from "./componenets/pages/admin/AdminNationalID";
import { useRecoilState } from "recoil";
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
        {/* Admin panel routes */}
        <Route
          exact
          path="/"
          name="adminUserList"
          render={(props) => {
            return <StudentDashboard {...props} />;
          }}
        />

        <Route
          exact
          path="/test"
          name="TEST"
          render={(props) => {
            return <StudentUserInfo {...props} />;
          }}
        />

        {/* Login Route */}
        <Route
          exact
          path="/signin"
          name="signin"
          render={(props) => {
            if (isAuthenticated && userRole == "student")
              return <Redirect to="/student/dashboard" />;
            else if (isAuthenticated && userRole == "admin")
              return <Redirect to="/admin/dashboard" />;
            else return <SignIn {...props} />;
          }}
        />

        {/* Student panel routes */}
        <Route
          exact
          path="/student/dashboard"
          name="studentDashboard"
          render={(props) => {
            if (isAuthenticated) return <StudentDashboard {...props} />;
            else return <Redirect to="/signin" />;
          }}
        />

        {/* Admin panel routes */}
        <Route
          exact
          path="/admin/dashboard"
          name="adminDashboard"
          render={(props) => {
            if (isAuthenticated && userRole == "admin")
              return <AdminDashboard {...props} />;
            else return <Redirect to="/signin" />;
          }}
        />

        <Route name="ارور ۴۰۴" render={(props) => "404 Error"} />
      </Switch>
    </Router>
  ) : (
    "Loading"
  );
}
