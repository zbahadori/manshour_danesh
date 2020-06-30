import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminHeader from "../../../partials/admin/containers/Header";
import AdminMenue from "../../../partials/admin/containers/Menu";
import AdminFooter from "../../../partials/admin/containers/Footer";

export default function Admin() {
  //JUST a sample, remove if you don't need it,
  //This route will grow as we develop more

  // const [usersData, setUsersData] = useState([]);
  // const [isLoaded, setIsLoaded] = useState([]);

  // useEffect(() => {
  //   axios({
  //     url: process.env.REACT_APP_BACKEND_URL + "api/admin/get-all-users",
  //     withCredentials: true,
  //     method: "get",
  //   })
  //     .then((res) => {
  //       try {
  //         setUsersData(res.data.users);
  //       } catch (e) {
  //         setUsersData([]);
  //       }

  //       console.log(res.data);
  //     })
  //     .finally(() => {
  //       setIsLoaded(true);
  //     });
  // }, []);

  return (
    <div>
      <AdminHeader />
      <AdminMenue />
      <main>Hello there</main>
      <AdminFooter />
    </div>
  );
}
