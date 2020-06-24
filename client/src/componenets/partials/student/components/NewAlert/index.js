import React from "react";
import "../../sass/alert.scss";
import AlertBox from "./AlertBox";
function Alert({ ...props }) {
  return (
    <div className="alert">
      <div class="site-padding">
        <main>
          <section class="form-wrapper has-icon wrapper">
            <div class="container-fluid">
              <div className="row">
                <div class="col-md-6">
                  <AlertBox
                    title="اینم از الرت!"
                    text="محتوای آلرت در این قسمت نوشته میشود"
                    type="success"
                  ></AlertBox>
                </div>
                <div class="col-md-6">
                  <AlertBox
                    title="اینم از الرت!"
                    text="محتوای آلرت در این قسمت نوشته میشود"
                    type="warning"
                  ></AlertBox>
                </div>
                <div class="col-md-6">
                  <AlertBox
                    title="اینم از الرت!"
                    text="محتوای آلرت در این قسمت نوشته میشود"
                    type="info"
                  ></AlertBox>
                </div>
                <div class="col-md-6">
                  <AlertBox
                    title="اینم از الرت!"
                    text="محتوای آلرت در این قسمت نوشته میشود"
                    type="danger"
                  ></AlertBox>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Alert;
