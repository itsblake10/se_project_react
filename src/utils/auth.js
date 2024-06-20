// NEW
import { checkResponse } from "./api";
const baseUrl = "http://localhost:3001";

export const signUp = ({ name, avatarUrl, email, password }) => {
  return fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      email: email,
      password: password,
      name: name,
      avatar: avatarUrl,
    }),
  })
    .then((res) => checkResponse(res))
    .then((data) => {
      return data;
    });
};

export const signIn = (email, password) => {
  return fetch(`${baseUrl}/signin`, {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  })
    .then((res) => checkResponse(res))
    .then((data) => {
      localStorage.setItem("jwt", data.token);
      return data;
    });
};

export const checkToken = (token) => {
  return fetch(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => checkResponse(res));
};

export function isAuthenticated() {
  return !!localStorage.getItem("jwt");
}
