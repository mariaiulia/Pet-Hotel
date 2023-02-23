import * as React from "react";
import foto2 from "./img/foto2.jpg";
import Alert from "@mui/material/Alert";
import { useState, useEffect } from "react";

export const Homepage = () => {
  const [alert, setAlert] = useState(
    localStorage.getItem("isLoggedIn") === "true" &&
      localStorage.getItem("justLoggedIn") === "true"
  );
  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
      localStorage.setItem("justLoggedIn", "false");
    }, 3000);
  }, []);
  return (
    <div
      style={{
        height: 1000,
        width: "100%",
        backgroundImage: `url(${foto2})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        WebkitBackgroundSize: "cover",
      }}
    >
      <h1
        style={{
          fontSize: "100px",
          position: "absolute",
          top: "100px",
          left: "100px",
        }}
      >
        Pet Hotel
      </h1>
      {alert && (
        <Alert severity="success">You have successfully logged in!</Alert>
      )}
    </div>
  );
};
