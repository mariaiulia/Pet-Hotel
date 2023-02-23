import React from "react";
import "./Login.css";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const axios = require("axios");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const isAdmin = localStorage.getItem("isAdmin");
  const isEnabled = email.length > 0 && password.length > 0;

  const login = () => {
    const headers = {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*",
    };

    axios
      .post("http://localhost:5000/user/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        if (response.data) {
          navigate("/");
          localStorage.setItem("isLoggedIn", "true");
          localStorage.setItem("user_id", response.data.id);
          localStorage.setItem(
            "isAdmin",
            response.data.id_role == 1 ? "true" : "false"
          );
          window.location.href =
            window.location.pathname +
            window.location.search +
            window.location.hash;

          localStorage.setItem("justLoggedIn", "true");
        } else {
          alert("The password is incorrect!");
        }
      })
      .catch(() => console.log("da"));
  };

  return (
    <div>
      <div></div>
      <div>
        <form onSubmit={() => console.log("test")}>
          <TextField
            style={{ paddingBottom: 10 }}
            type="email"
            name="email"
            placeholder="email..."
            required
            onChange={(e) => setEmail(e.target.value)}
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
          <TextField
            style={{ paddingBottom: 10 }}
            type="password"
            name="pwd"
            placeholder="password..."
            required
            onChange={(e) => setPassword(e.target.value)}
            id="outlined-basic"
            label="Password"
            y
            variant="outlined"
          />

          <Button disabled={!isEnabled} variant="contained" onClick={login}>
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}
export default Login;
