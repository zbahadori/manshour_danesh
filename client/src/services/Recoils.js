import { atom, useRecoilState, selector } from "recoil";

export const ErrorStatus = atom({
  key: "error_status",
  default: "",
});

export const ErrorMessage = atom({
  key: "error_message",
  default: "",
});

export const IsAuthenticated = atom({
  key: "is_authenticated",
  default: false,
});

export const PhoneNumber = atom({
  key: "is_authenticated",
  default: null,
});

export const UserRole = atom({
  key: "user-role",
  default: null,
});
