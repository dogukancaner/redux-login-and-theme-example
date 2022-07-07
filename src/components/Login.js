import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../features/User";

function Login() {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(
            login({ name: "Doğukan", age: 22, email: "dogukancaner@gmail.com" })
          );
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          dispatch(
            logout({
              name: "Doğukan",
              age: 22,
              email: "dogukancaner@gmail.com",
            })
          );
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Login;
