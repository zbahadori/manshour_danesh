import React from "react";
import Axios from "axios";
import Modal from "../Modal";
import Alert from "../Alert/Alert";

export default function index(props) {
  const handleFormSubmitBtn = (e) => {
    e.preventDefault();

    console.log("submited" + props.id);

    var submitBtn = document.querySelector(
      "#custom-button-update-alert-submit"
    );
    submitBtn.disabled = true;

    let data = new FormData();

    data.append("id", props.id);
    data.append("title", props.title);
    data.append("message", props.message);

    for (var key of data.entries()) {
      console.log(key[0] + ", " + key[1]);
    }
    Axios({
      url: process.env.REACT_APP_BACKEND_URL + "api/admin/update-single-alert",
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      method: "POST",
      data: data,
    }).then((res) => {
      console.log(res);
      props.setErrorStatus(res.data.success ? "success" : "danger");
      props.setErrorMessage(res.data.message);
      submitBtn.disabled = false;
      props.updateListComponent();
    });
  };

  return (
    <Modal show={props.modalState} showModalSet={props.setModalState}>
      <div className="modal-lg modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              ادیت اطلاعیه
            </h5>
            <button
              type="button"
              className="close m-0 p-0 mr-auto"
              data-
              dismiss="modal"
              aria-label="Close"
              onClick={() => {
                props.setModalState(false);
              }}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form onSubmit={handleFormSubmitBtn}>
            <div className="modal-body row">
              <Alert />

              <div className="col-12 my-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="تایتل اطلاعیه"
                  onChange={(e) => props.setTitle(e.target.value)}
                  value={props.title}
                />
              </div>
              <div className="col-12 my-2">
                <textarea
                  className="form-control h-auto"
                  placeholder="متن اطلاعیه"
                  rows="20"
                  onChange={(e) => props.setMessage(e.target.value)}
                  value={props.message}
                ></textarea>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-
                dismiss="modal"
                onClick={() => {
                  props.setModalState(false);
                }}
              >
                خروج
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                id="custom-button-update-alert-submit"
              >
                ثبت تغییرات
              </button>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
}
