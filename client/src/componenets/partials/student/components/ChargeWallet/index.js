import React from "react";
function ChargeWallet({ ...props }) {
  return (
    <section className="wrapper">
      <h2 className="section-title">{props.title}</h2>
      <div className="container-fluid">
        <div className="increase-box">
          <p>{props.info}</p>
          <input
            type="number"
            className="form-control"
            name="amount"
            id="amount"
            required
            placeholder="مبلغ را به تومان وارد کنید"
          />
          <button
            type="submit"
            className="btn btn-info d-block w-100"
            data-ripple="ripple"
          >
            {props.btn_text}
          </button>
        </div>
      </div>
    </section>
  );
}
export default ChargeWallet;
