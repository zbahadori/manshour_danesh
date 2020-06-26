import React, { useState, useEffect } from "react";
import "./subset.scss";
import SubSetItem from "./ReferencedUsersItem";
import Axios from "axios";

function ReferencedUsers() {
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    updateListComponent();
  });

  const updateListComponent = async () => {
    Axios({
      url: process.env.REACT_APP_BACKEND_URL + "api/user/referenced-users",
      withCredentials: true,
      method: "POST",
    }).then((res) => {
      setUserCount(res.data.data.length);
    });
  };

  return (
    <div className="container-fluid">
      <section className="subset-wrapper wrapper">
        <h2 className="section-title">زیر مجموعه های شما</h2>
        <div className="container-fluid">
          <div className="row">
            <SubSetItem count={userCount} linkTo="/referenceUserLink" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default ReferencedUsers;
