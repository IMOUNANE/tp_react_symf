import React, { useState } from "react";
import { register, login } from "../../API/api";
import "./Home.css";

export default function Home() {
  const [registerState, setRegisterState] = useState(false);
  const [cards, setCards] = useState({});

  const [data, setData] = useState({
    email: "",
    password: "",
    username: "",
  });

  const setCookie = (name, value) => {
    const myDate = new Date();
    myDate.setMonth(myDate.getMonth() + 1);
    document.cookie = `${name}=${value};expires=${myDate};domain=${process.env.REACT_APP_DOMAIN};path=/`;
    document.cookie = `${name}=${value};expires=${myDate};path=/`;
  };

  const onRegister = () => {
    register(data).then((response) => {
      setCookie("token", response.token);
    });
  };

  const onLogin = () => {
    let copyData = { ...data };
    delete copyData.email;
    login(copyData).then((response) => {
      setCookie("token", response.token);
    });
  };

  return (
    <div>
      <div className="login-page">
        <div className="form">
          {registerState ? (
            <form className="register-form">
              <input
                type="text"
                onBlur={(e) => {
                  setData({ ...data, username: e.target.value });
                }}
                placeholder="username"
              />
              <input
                type="password"
                onBlur={(e) => {
                  setData({ ...data, password: e.target.value });
                }}
                placeholder="password"
              />
              <input
                type="text"
                onBlur={(e) => {
                  setData({ ...data, email: e.target.value });
                }}
                placeholder="email address"
              />
              <button onClick={onRegister}>create</button>
              <p className="message">
                Already registered?{" "}
                <button
                  onClick={() => {
                    setRegisterState(true);
                  }}
                >
                  Sign In
                </button>
              </p>
            </form>
          ) : (
            <form className="login-form">
              <input
                type="text"
                onBlur={(e) => {
                  setData({ ...data, username: e.target.value });
                }}
                placeholder="username"
              />
              <input
                type="password"
                onBlur={(e) => {
                  setData({ ...data, password: e.target.value });
                }}
                placeholder="password"
              />
              <button onClick={onLogin}>login</button>
              <p className="message">
                Not registered?{" "}
                <button
                  onClick={() => {
                    setRegisterState(true);
                  }}
                >
                  Create an account
                </button>
              </p>
            </form>
          )}
          {cards.length > 0 &&
            cards.forEach((card) => {
              <>
                <h1>card.title</h1>
                <p>card.description</p>
              </>;
            })}
        </div>
      </div>
    </div>
  );
}
