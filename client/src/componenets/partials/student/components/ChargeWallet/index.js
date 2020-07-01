import React from "react";
function ChargeWallet({ ...props }) {
  return (
    <section class="wrapper">
      <h2 class="section-title">{props.title}</h2>
      <div class="container-fluid">
        <div class="increase-box">
          <p>{props.info}</p>
          <input
            type="number"
            class="form-control"
            name="amount"
            id="amount"
            required
            placeholder="مبلغ را به تومان وارد کنید"
          />
          <button
            type="submit"
            class="btn btn-info d-block w-100"
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
