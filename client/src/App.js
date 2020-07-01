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

import HomePage from "./componenets/pages/public/HomePage";
import SignIn from "./componenets/pages/public/SignIn";
import StudentDashboard from "./componenets/partials/student/containers/StudentDashboard";
import AdminDashboard from "./componenets/pages/admin/AdminDashboard";
import AdminUserList from "./componenets/pages/admin/AdminUserList";
import StudentUserInfo from "./componenets/pages/student/StudentUserInfo";
import AdminNationalID from "./componenets/pages/admin/AdminNationalID";
import AdminCreateAlert from "./componenets/pages/admin/AdminCreateAlert";
import AdminUpdateAlert from "./componenets/pages/admin/AdminUpdateAlert";
import StudentReferencedList from "./componenets/pages/student/StudentReferencedList";
import Loading from "./componenets/partials/public/components/Loading";
import NotFoundPage from "./componenets/partials/public/components/NotFoundPage";

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
  }, []);

  useEffect(() => {
    checkIsAuthenticated();
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
          console.log("Authenticated as " + res.data.data.phone_number);
        } catch (e) {
          setIsAuthenticated(false);
          setPhoneNumber(null);
          setUserRole(null);
          console.log("Not Authenticated");
        }
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
                <nav className="m-auto d-flex justify-content-center align-items-center">
                  <ul className="row">
                    <li className="col-6 col-md-4 text-center p-4 border d-flex justify-content-center align-items-center bg-warning text-white">
                      <Link to="/">ROOT</Link>
                    </li>
                    <li className="col-6 col-md-4 text-center p-4 border d-flex justify-content-center align-items-center bg-warning text-white">
                      <Link to="/test">Index Under Construction</Link>
                    </li>
                    <li className="col-6 col-md-4 text-center p-4 border d-flex justify-content-center align-items-center bg-warning text-white">
                      <Link to="/static-index">Static index</Link>
                    </li>
                    <li className="col-6 col-md-4 text-center p-4 border d-flex justify-content-center align-items-center bg-warning text-white">
                      <Link to="/signin">signin</Link>
                    </li>
                    <li className="col-6 col-md-4 text-center p-4 border d-flex justify-content-center align-items-center bg-warning text-white">
                      <Link to="/student/dashboard">
                        <i class="icon-user"></i>Student/Dashboard
                      </Link>
                    </li>
                    <li className="col-6 col-md-4 text-center p-4 border d-flex justify-content-center align-items-center bg-warning text-white">
                      <Link to="/student/userinfo">
                        <i class="icon-thumbs-up-alt"></i>Student/Userinfo
                      </Link>
                    </li>
                    <li className="col-6 col-md-4 text-center p-4 border d-flex justify-content-center align-items-center bg-warning text-white">
                      <Link to="/student/referencedlist">
                        <i class="icon-gear"></i>Student/ReferencedList
                      </Link>
                    </li>
                    <li className="col-6 col-md-4 text-center p-4 border d-flex justify-content-center align-items-center bg-warning text-white">
                      <Link to="/admin/dashboard">
                        <i class="icon-picture"></i>Admin/Dashboard
                      </Link>
                    </li>
                    <li className="col-6 col-md-4 text-center p-4 border d-flex justify-content-center align-items-center bg-warning text-white">
                      <Link to="/admin/createalert">
                        <i class="icon-picture"></i>Admin/CreateAlert
                      </Link>
                    </li>
                    <li className="col-6 col-md-4 text-center p-4 border d-flex justify-content-center align-items-center bg-warning text-white">
                      <Link to="/admin/updatealert">
                        <i class="icon-picture"></i>Admin/UpdateAlert
                      </Link>
                    </li>
                    <li className="col-6 col-md-4 text-center p-4 border d-flex justify-content-center align-items-center bg-warning text-white">
                      <Link to="/admin/userlist">
                        <i class="icon-picture"></i>Admin/Userlist
                      </Link>
                    </li>
                    <li className="col-6 col-md-4 text-center p-4 border d-flex justify-content-center align-items-center bg-warning text-white">
                      <Link to="/admin/nationalid">
                        <i class="icon-picture"></i>Admin/NationalId
                      </Link>
                    </li>
                  </ul>
                </nav>
                <br />
                <hr />
                <br />
                <nav className="m-auto d-flex justify-content-center align-items-center">
                  <ul className="row">
                    <li className="col-6 col-md-4 text-center p-4 border d-flex justify-content-center align-items-center bg-dark text-white">
                      <Link to="preview/student/dashboard">
                        <i class="icon-user"></i>Student/Dashboard
                      </Link>
                    </li>
                    <li className="col-6 col-md-4 text-center p-4 border d-flex justify-content-center align-items-center bg-dark text-white">
                      <Link to="preview/student/userinfo">
                        <i class="icon-thumbs-up-alt"></i>
                        Preview/Student/Userinfo
                      </Link>
                    </li>
                    <li className="col-6 col-md-4 text-center p-4 border d-flex justify-content-center align-items-center bg-dark text-white">
                      <Link to="preview/student/referencedlist">
                        <i class="icon-gear"></i>Preview/Student/ReferencedList
                      </Link>
                    </li>
                    <li className="col-6 col-md-4 text-center p-4 border d-flex justify-content-center align-items-center bg-dark text-white">
                      <Link to="preview/admin/dashboard">
                        <i class="icon-picture"></i>Preview/Admin/Dashboard
                      </Link>
                    </li>
                    <li className="col-6 col-md-4 text-center p-4 border d-flex justify-content-center align-items-center bg-dark text-white">
                      <Link to="preview/admin/createalert">
                        <i class="icon-picture"></i>Preview/Admin/CreateAlert
                      </Link>
                    </li>
                    <li className="col-6 col-md-4 text-center p-4 border d-flex justify-content-center align-items-center bg-dark text-white">
                      <Link to="preview/admin/updatealert">
                        <i class="icon-picture"></i>Preview/Admin/UpdateAlert
                      </Link>
                    </li>
                    <li className="col-6 col-md-4 text-center p-4 border d-flex justify-content-center align-items-center bg-dark text-white">
                      <Link to="preview/admin/userlist">
                        <i class="icon-picture"></i>Preview/Admin/Userlist
                      </Link>
                    </li>
                    <li className="col-6 col-md-4 text-center p-4 border d-flex justify-content-center align-items-center bg-dark text-white">
                      <Link to="preview/admin/nationalid">
                        <i class="icon-picture"></i>Preview/Admin/NationalId
                      </Link>
                    </li>
                  </ul>
                </nav>
              </section>
            );
          }}
        />

        {/* TEST */}
        <Route
          exact
          path="/test"
          name="test"
          render={(props) => {
            return <HomePage {...props} />;
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
            if (isAuthenticated && userRole == "student")
              return <StudentDashboard {...props} />;
            else return <Redirect to="/signin" />;
          }}
        />

        <Route
          exact
          path="/student/userinfo"
          name="studentUserInfo"
          render={(props) => {
            if (isAuthenticated && userRole == "student")
              return <StudentUserInfo {...props} />;
            else return <Redirect to="/signin" />;
          }}
        />

        {/* Student Referenced list */}
        <Route
          exact
          path="/student/referencedlist"
          name="studentReferencedList"
          render={(props) => {
            if (isAuthenticated && userRole == "student")
              return <StudentReferencedList {...props} />;
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
          name="adminUpdateAlert"
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

        {/* ROUTES JUST FOR PREVIEW */}
        <Route
          exact
          path="/preview/student/dashboard"
          name="previewStudentDashboard"
          render={(props) => {
            return <StudentDashboard {...props} />;
          }}
        />

        <Route
          exact
          path="/preview/student/userinfo"
          name="previewStudentUserInfo"
          render={(props) => {
            return <StudentUserInfo {...props} />;
          }}
        />

        {/* Student Referenced list */}
        <Route
          exact
          path="/preview/student/referencedlist"
          name="previewStudentReferencedList"
          render={(props) => {
            return <StudentReferencedList {...props} />;
          }}
        />

        <Route
          exact
          path="/preview/admin/dashboard"
          name="previewAdminDashboard"
          render={(props) => {
            return <AdminDashboard {...props} />;
          }}
        />
        {/* Userlist for admin */}
        <Route
          exact
          path="/preview/admin/userlist"
          name="previewAdminUserList"
          render={(props) => {
            return <AdminUserList {...props} />;
          }}
        />
        {/* Admin Creates Alert */}
        <Route
          exact
          path="/preview/admin/createalert"
          name="previewAdminCreateAlert"
          render={(props) => {
            return <AdminCreateAlert {...props} />;
          }}
        />
        {/* Admin Update A Single Alert */}
        <Route
          exact
          path="/preview/admin/updatealert"
          name="previewAdminUpdateAlert"
          render={(props) => {
            return <AdminUpdateAlert {...props} />;
          }}
        />
        {/* Admin Review National Ids */}
        <Route
          exact
          path="/preview/admin/nationalid"
          name="previewAdminNationalId"
          render={(props) => {
            return <AdminNationalID {...props} />;
          }}
        />

        <Route
          name="ارور ۴۰۴"
          render={(props) => {
            return (
              <NotFoundPage
                title="خطا ...!"
                text=" صفحه مورد نظر پیدا نشد"
                mound_text="404"
                link="/"
                link_text="بازگشت به خانه"
                {...props}
              />
            );
          }}
        />
      </Switch>
    </Router>
  ) : (
    <Loading></Loading>
  );
}
