import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.REACT_APP_BACK}/api/`,
  timeout: 20000,
  headers: {
    "Content-Type": "application/json",
  },
});

export async function register(data) {
  let rep = {};
  await api
    .post("register", data)
    .then((response) => {
      console.log("response of register", response);
      rep = response;
    })
    .catch((error) => {
      console.log("error", error);
    });
  return rep;
}

export async function login(data) {
  let rep = {};
  await api
    .post("login", data)
    .then((response) => {
      console.log("response of login", response);
      rep = response;
    })
    .catch((error) => {
      console.log("error", error);
    });
  return rep;
}
