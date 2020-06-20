import { atom, useRecoilState, selector } from "recoil";

export const phone_number = atom({
  key: "phone_number",
  default: "",
});

export const code = atom({
  key: "code",
  default: "",
});

export const reference_phone_number = atom({
  key: "reference_phone_number",
  default: "",
});
