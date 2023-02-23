import React from "react";
import "./Register.css";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const axios = require("axios");
  const [emailReg, setEmailReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [phoneNumberReg, setPhoneNumberReg] = useState("");
  const [firstNameReg, setFirstNameReg] = useState("");
  const [lastNameReg, setLastNameReg] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }
    return false;
  };

  const isEnabled =
    firstNameReg.length > 0 &&
    lastNameReg.length > 0 &&
    emailReg.length > 0 &&
    validateEmail(emailReg) &&
    passwordReg.length > 0 &&
    phoneNumberReg.length > 0;
  const register = () => {
    if (validateEmail(emailReg)) {
      axios
        .post("http://localhost:5000/user/register", {
          id_role: 2,
          firstName: firstNameReg,
          lastName: lastNameReg,
          email: emailReg,
          password: passwordReg,
          phoneNumber: phoneNumberReg,
        })
        .catch((err) => {
          alert(err);
        })
        .then((response) => {
          console.log(response);
          if (Object.keys(response.data).includes("error")) {
            alert(response.data.error);
          } else {
            alert("Account successfully created!");
            navigate("/login");
          }
        });
    } else {
      alert("You have entered an invalid email address!");
    }
  };
  return (
    <div>
      <div></div>
      <div>
        <form onSubmit={() => console.log("test")}>
          <TextField
            style={{ paddingBottom: 10 }}
            type="First Name"
            name="First Name"
            placeholder="First Name..."
            required
            onChange={(e) => setFirstNameReg(e.target.value)}
            id="outlined-basic"
            label="First Name"
            variant="outlined"
          />
          <TextField
            style={{ paddingBottom: 10 }}
            type="Last Name"
            name="Last Name"
            placeholder="Last Name..."
            required
            onChange={(e) => setLastNameReg(e.target.value)}
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
          />
          <TextField
            style={{ paddingBottom: 10 }}
            type="email"
            name="email"
            placeholder="email..."
            required
            onChange={(e) => setEmailReg(e.target.value)}
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
            onChange={(e) => setPasswordReg(e.target.value)}
            id="outlined-basic"
            label="Password"
            variant="outlined"
          />

          <TextField
            style={{ paddingBottom: 10 }}
            type="number"
            name="phone number"
            placeholder="phone number..."
            required
            onChange={(e) => setPhoneNumberReg(e.target.value)}
            id="outlined-basic"
            label="Phone Number"
            variant="outlined"
          />

          <Button disabled={!isEnabled} variant="contained" onClick={register}>
            Register
          </Button>
        </form>
      </div>
    </div>
  );
}
export default Register;
