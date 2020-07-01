import React from "react";
// import "../../sass/home.scss";
import NotificationBtn from "./NotificationBtn";
function Notification() {
  return (
    <div className="container-fluid">
      <section className="wrapper">
        <h2 className="section-title">پوش نوتیفیکشن های IziToast</h2>
        <div className="container-fluid">
          <div className="d-flex">
            <NotificationBtn type="info" text="Info"></NotificationBtn>
            <NotificationBtn type="success" text="Success"></NotificationBtn>
            <NotificationBtn type="warning" text="Warning"></NotificationBtn>
            <NotificationBtn type="danger" text="Error"></NotificationBtn>
          </div>
          <p>روی دکمه ها کلیک کن</p>
        </div>
      </section>
    </div>
  );
}

export default Notification;
