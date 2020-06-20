import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./assets/css/bootstrap.css";
import "./assets/css/icons.css";
import "./assets/css/style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { RecoilRoot } from "recoil";

ReactDOM.render(
  <RecoilRoot>
    <App />
  </RecoilRoot>,

  document.getElementById("root")
);
