import React, { Fragment } from "react";
import "./Menu.scss";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

export default function StudentMenu() {
  return (
    <Fragment>
      <aside>
        <div className="main-menu">
          <ul>
            <li className="nav-item active">
              <Link to="/student/tabellist" data-flag="dashboard">
                <i className="icon-layers"></i>
                <span> لیست سر فصل ها</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/student/test" data-flag="courses">
                <i className="icon-notebook"></i>
                <span>درس های من</span>
              </Link>
            </li>
            <li className="nav-item">
              <a href="/" data-flag="financial">
                <i className="icon-basket"></i>
                <span>امور مالی</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="/" data-flag="buy">
                <i className="icon-graduation"></i>
                <span>خرید درس</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="/" data-flag="live">
                <i className="icon-book-open"></i>
                <span>پخش زنده</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </Fragment>
  );
}
