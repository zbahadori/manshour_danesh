import React from "react";
import "../../css//dashboard/_subset.scss";
import SubSetItem from "./SubSetItem";
// import PropTypes from "prop-types";

function SubSet() {
  return (
    <div className="container-fluid">
      <section className="subset-wrapper wrapper">
        <h2 className="section-title">زیر مجموعه های شما</h2>
        <div className="container-fluid">
          <div className="row">
            <SubSetItem count="21" text="some text1"></SubSetItem>
            <SubSetItem count="40" text="some text1"></SubSetItem>
            <SubSetItem count="8" text="some text1"></SubSetItem>
          </div>
        </div>
      </section>
    </div>
  );
}
// SubSet.propTypes = {
//   title: PropTypes.string.isRequired,
// };
export default SubSet;
