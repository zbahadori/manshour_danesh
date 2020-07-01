import React from "react";
import "./custombutton.scss";

const CustomButton = ({
  children,
  isGooglesignIn,
  inverted,
  ...otherProps
}) => {
  return (
    <button
      className={`${inverted ? "inverted" : ""}  ${
        isGooglesignIn ? "google-sign-in" : ""
      } custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
