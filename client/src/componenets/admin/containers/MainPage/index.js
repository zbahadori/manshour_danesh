import React, { Fragment } from "react";

import Header from "../Header";
import Menu from "../Menu";
import Footer from "../Footer";

export default function MainPage() {
  return (
    <Fragment>
      <Header />
      <Menu />
      <main></main>
      <Footer />
    </Fragment>
  );
}
