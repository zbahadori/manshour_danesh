import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminHeader from "../../admin/containers/Header";
import AdminMenue from "../../admin/containers/Menu";
import AdminFooter from "../../admin/containers/Footer";

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
      <main>Hello there</main>
      <AdminFooter />
    </div>
  );
}