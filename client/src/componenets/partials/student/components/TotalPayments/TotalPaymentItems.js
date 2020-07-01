import React from "react";
function TotalPaymentItems({ ...props }) {
  return (
    <tr>
      <td scope="row">{props.index}</td>
      <td>{props.fullneme}</td>
      <td>{props.date}</td>
      <td>{props.price}</td>
      <td>{props.cource}</td>
      <td>
        <span class={props.class_name}>{props.status}</span>
      </td>
    </tr>
  );
}
export default TotalPaymentItems;
