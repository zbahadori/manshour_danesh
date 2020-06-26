import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./alert.scss";
import AlertBox from "./AlertBox";
function Alert({ ...props }) {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    updateListComponent();
  }, []);

  const updateListComponent = async () => {
    Axios({
      url: process.env.REACT_APP_BACKEND_URL + "api/user/get-active-alerts",
      withCredentials: true,
      method: "POST",
    }).then((res) => {
      console.log("sdkjsbf", res);
      setAlerts(res.data.data);
    });
  };

  return (
    <section class="form-wrapper has-icon wrapper">
      <div class="container-fluid">
        <div className="row">
          <div class="col-12">
            {alerts.map((item, index) => (
              <AlertBox
                key={index}
                title={item.title}
                text={item.message}
                type={"primary"}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Alert;
