import { atom, useRecoilState, selector } from "recoil";

export const ErrorStatus = atom({
  key: "error_status",
  default: "",
});

export const ErrorMessage = atom({
  key: "error_message",
  default: "",
});
