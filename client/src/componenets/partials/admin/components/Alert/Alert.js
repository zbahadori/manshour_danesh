import React, { useEffect } from "react";
import { ErrorStatus, ErrorMessage } from "../../../../../services/Recoils";
import { useRecoilState } from "recoil";

export default function Alert() {
  const [errorStatus, setErrorStatus] = useRecoilState(ErrorStatus);
  const [errorMessage, setErrorMessage] = useRecoilState(ErrorMessage);

  // useEffect(() => {
  //   return () => {
  //     setErrorStatus(null);
  //     setErrorMessage(null);
  //   };
  // }, []);

  return errorMessage ? (
    <div className={"alert alert-" + errorStatus}>{errorMessage}</div>
  ) : null;
}
