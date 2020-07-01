import React from "react";
// import "../../sass/home.scss";
import NotificationBtn from "./NotificationBtn";
function Notification() {
  return (
    <div className="container-fluid">
      <section class="wrapper">
        <h2 class="section-title">پوش نوتیفیکشن های IziToast</h2>
        <div class="container-fluid">
          <div class="d-flex">
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
