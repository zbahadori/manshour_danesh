import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import axios from "axios";
import "./index.css";

import SignIn from "./componenets/pages/public/SignIn";
import StudentDashboard from "./componenets/partials/student/containers/StudentDashboard";
import AdminDashboard from "./componenets/pages/admin/AdminDashboard";
import AdminUserList from "./componenets/pages/admin/AdminUserList";
import StudentUserInfo from "./componenets/pages/student/StudentUserInfo";
import AdminNationalID from "./componenets/pages/admin/AdminNationalID";
import AdminCreateAlert from "./componenets/pages/admin/AdminCreateAlert";
import AdminUpdateAlert from "./componenets/pages/admin/AdminUpdateAlert";
import StudentReferencedList from "./componenets/pages/student/StudentReferencedList";

import { useRecoilState } from "recoil";
import {
  IsAuthenticated,
  UserRole,
  PhoneNumber,
  TriggerIsAuthenticated,
} from "./services/Recoils";
require("dotenv").config();

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useRecoilState(IsAuthenticated);
  const [phoneNumber, setPhoneNumber] = useRecoilState(PhoneNumber);
  const [userRole, setUserRole] = useRecoilState(UserRole);
  const [triggerIsAuthenticated, setTriggerIsAuthenticated] = useRecoilState(
    TriggerIsAuthenticated
  );
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    checkIsAuthenticated();
    console.log("first checked");
  }, []);

  useEffect(() => {
    checkIsAuthenticated();
    console.log("checked");
  }, [triggerIsAuthenticated]);

  const checkIsAuthenticated = () => {
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
  };

  return isLoaded ? (
    <Router>
      <Switch>
        {/* Public routes */}
        {/* index */}
        <Route
          exact
          path="/"
          name="index"
          render={(props) => {
            return (
              <section className="index wv-100 hv-100">
                <nav className="m-auto">
                  <ul>
                    <li>
                      <Link to="/signin">signin</Link>
                    </li>
                    <li>
                      <Link to="/student/dashboard">
                        <i class="icon-user"></i>Student/Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link to="/student/userinfo">
                        <i class="icon-thumbs-up-alt"></i>Student/Userinfo
                      </Link>
                    </li>
                    <li>
                      <Link to="/student/referencedlist">
                        <i class="icon-gear"></i>Student/ReferencedList
                      </Link>
                    </li>
                    <li>
                      <Link to="/admin/dashboard">
                        <i class="icon-picture"></i>Admin/Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link to="/admin/createalert">
                        <i class="icon-picture"></i>Admin/CreateAlert
                      </Link>
                    </li>
                    <li>
                      <Link to="/admin/updatealert">
                        <i class="icon-picture"></i>Admin/UpdateAlert
                      </Link>
                    </li>
                    <li>
                      <Link to="/admin/userlist">
                        <i class="icon-picture"></i>Admin/Userlist
                      </Link>
                    </li>
                    <li>
                      <Link to="/admin/nationalid">
                        <i class="icon-picture"></i>Admin/NationalId
                      </Link>
                    </li>
                  </ul>
                </nav>
              </section>
            );
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

        {/* STUDENT ROUTES */}
        {/* admin dashboard */}
        <Route
          exact
          path="/student/dashboard"
          name="studentDashboard"
          render={(props) => {
            if (isAuthenticated) return <StudentDashboard {...props} />;
            else return <Redirect to="/signin" />;
          }}
        />

        <Route
          exact
          path="/student/userinfo"
          name="studentUserInfo"
          render={(props) => {
            if (isAuthenticated) return <StudentUserInfo {...props} />;
            else return <Redirect to="/signin" />;
          }}
        />

        {/* Student Referenced list */}
        <Route
          exact
          path="/student/referencedlist"
          name="studentReferencedList"
          render={(props) => {
            if (isAuthenticated) return <StudentReferencedList {...props} />;
            else return <Redirect to="/signin" />;
          }}
        />

        {/* ADMIN ROUTES */}
        {/* Admin Dashboard */}
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
        {/* Userlist for admin */}
        <Route
          exact
          path="/admin/userlist"
          name="adminUserList"
          render={(props) => {
            if (isAuthenticated && userRole == "admin")
              return <AdminUserList {...props} />;
            else return <Redirect to="/signin" />;
          }}
        />
        {/* Admin Creates Alert */}
        <Route
          exact
          path="/admin/createalert"
          name="adminCreateAlert"
          render={(props) => {
            if (isAuthenticated && userRole == "admin")
              return <AdminCreateAlert {...props} />;
            else return <Redirect to="/signin" />;
          }}
        />
        {/* Admin Update A Single Alert */}
        <Route
          exact
          path="/admin/updatealert"
          name="TEST"
          render={(props) => {
            if (isAuthenticated && userRole == "admin")
              return <AdminUpdateAlert {...props} />;
            else return <Redirect to="/signin" />;
          }}
        />
        {/* Admin Review National Ids */}
        <Route
          exact
          path="/admin/nationalid"
          name="adminNationalId"
          render={(props) => {
            if (isAuthenticated && userRole == "admin")
              return <AdminNationalID {...props} />;
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
