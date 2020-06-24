import React, { useEffect, useState } from "react";
import axios from "axios";
import UsersList from "../../partials/admin/containers/UsersList";
import AdminHeader from "../../partials/admin/containers/Header";
import AdminMenue from "../../partials/admin/containers/Menu";
import AdminFooter from "../../partials/admin/containers/Footer";

export default function AdminDashboard() {
  const [usersData, setUsersData] = useState([]);
  const [isLoaded, setIsLoaded] = useState([]);

  useEffect(() => {
    axios({
      url: process.env.REACT_APP_BACKEND_URL + "api/admin/get-all-users",
      withCredentials: true,
      method: "get",
    })
      .then((res) => {
        try {
          setUsersData(res.data.users);
        } catch (e) {}

        console.log(res.data);
      })
      .finally(() => {
        setIsLoaded(true);
      });
  }, []);

  return (
    <div>
      <AdminHeader />
      <AdminMenue />
      <main>
        <UsersList />
      </main>
      <AdminFooter />
    </div>
  );
}
