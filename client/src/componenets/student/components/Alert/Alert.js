import React from "react";

export default function Alert(props) {
  return props.message ? (
    <div style={{ direction: "rtl" }} className={"alert alert-" + props.class}>
      {props.message}
    </div>
  ) : null;
}
