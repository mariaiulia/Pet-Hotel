import { Link } from "react-router-dom";
import React from "react";
import style from "./Navbar.css";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export const Navbar = ({ isLoggedIn, isAdmin }) => {
  const navigate = useNavigate();
  if (isLoggedIn === "true" && isAdmin === "true") {
    return (
      <div className="divNavbar">
        <div className="topnav">
          <Link className="navbarItem" to="/">
            <Typography> Homepage </Typography>
          </Link>
          <Link className="navbarItem" to="/about">
            <Typography>About Us</Typography>
          </Link>
          <Link className="navbarItem" to="/bookings">
            <Typography> Bookings</Typography>
          </Link>
          <Link className="navbarItem" to="/newBooking">
            <Typography> New Booking </Typography>
          </Link>
          <Link className="navbarItem" to="/newpet">
            <Typography>New Pet</Typography>
          </Link>
        </div>
        <div>
          <Link className="navbarItem" to="/">
            <Button
              variant="contained"
              onClick={() => {
                localStorage.setItem("isLoggedIn", "false");
                navigate("/");
                window.location.href =
                  window.location.pathname +
                  window.location.search +
                  window.location.hash;
              }}
            >
              Logout
            </Button>
          </Link>
        </div>
      </div>
    );
  } else if (isLoggedIn === "true" && isAdmin === "false") {
    return (
      <div className="divNavbar">
        <div className="topnav">
          <Link className="navbarItem" to="/">
            <Typography> Homepage </Typography>
          </Link>
          <Link className="navbarItem" to="/about">
            <Typography>About Us</Typography>
          </Link>
          <Link className="navbarItem" to="/myBookings">
            <Typography> My Bookings </Typography>
          </Link>
          <Link className="navbarItem" to="/newBooking">
            <Typography> New Booking </Typography>
          </Link>
          <Link className="navbarItem" to="/mypets">
            <Typography> My Pets </Typography>
          </Link>
          <Link className="navbarItem" to="/newpet">
            <Typography>New Pet</Typography>
          </Link>
        </div>
        <div>
          <Link className="navbarItem" to="/">
            <Button
              variant="contained"
              onClick={() => {
                localStorage.setItem("isLoggedIn", "false");
                navigate("/");
                window.location.href =
                  window.location.pathname +
                  window.location.search +
                  window.location.hash;
              }}
            >
              Logout
            </Button>
          </Link>
        </div>
      </div>
    );
  } else
    return (
      <div className="topnav">
        <div className="leftSide">
          <Link className="navbarItem" to="/">
            <Typography variant="h5"> Homepage </Typography>
          </Link>
          <Link className="navbarItem" to="/about">
            <Typography variant="h5">About Us</Typography>
          </Link>
        </div>
        <div className="rightSide">
          <Link className="navbarItem" to="/register">
            <Typography variant="h5"> Register </Typography>
          </Link>
          <Link className="navbarItem" to="/login">
            <Typography variant="h5"> Login </Typography>
          </Link>
        </div>
      </div>
    );
};
