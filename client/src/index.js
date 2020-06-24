import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./assets/css/style.scss";
import { RecoilRoot } from "recoil";

ReactDOM.render(
  <RecoilRoot>
    <App />
  </RecoilRoot>,

  document.getElementById("root")
);
