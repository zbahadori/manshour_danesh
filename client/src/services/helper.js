//////////////////////
//I began to implement this section but then it hit me, you need to decide for your own //structure, Its up to you to configure your helper functions the way you prefer
///////////////////////

import axios from "axios";

const BASE_URL = "https://manshour.herokuapp.com/";

// getRegularTips – which fetches the regular tips from the API

export function getRegularTips() {
  return axios
    .get(`${BASE_URL}/api/auth/register-start`)
    .then((response) => response.data);
}

///getSpecialTips – which fetches the special tip for only authenticated users.

export function getSpecialTips() {
  return axios
    .get(`${BASE_URL}/api/tips/special`, {
      params: { "x-access-token": localStorage.getItem("x-access-token") },
    })
    .then((response) => response.data)
    .catch((err) => Promise.reject("Request Not Authenticated!"));
}

///login – which sends a post request with user information and get an access token on success. It then stores the access-token and it’s expiration time (which is 2 hours after receipt of the token) on localStorage.

export function login(data) {
  return axios
    .post(`${BASE_URL}/api/auth/login-start`, {
      phone_number: data.phone_number,
      reference_phone_number: data.reference_phone_number,
    })
    .then((response) => {
      localStorage.setItem("x-access-token", response.data.token);
      localStorage.setItem(
        "x-access-token-expiration",
        Date.now() + 2 * 60 * 60 * 1000
      );
      return response.data;
    })
    .catch((err) => Promise.reject("Authentication Failed!"));
}

export function isAuthenticated() {
  return (
    localStorage.getItem("x-access-token") &&
    localStorage.getItem("x-access-token-expiration") > Date.now()
  );
}
