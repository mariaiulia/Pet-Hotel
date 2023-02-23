import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Homepage } from "./components/Homepage";
import Register from "./containers/Register/Register";
import { Navbar } from "./components/Navbar/Navbar";
import About from "./containers/About/About";
import Login from "./containers/Login/Login";
import Bookings from "./components/Bookings";
import NewBooking from "./containers/Create booking/NewBooking";
import Pets from "./containers/My pets/myPets";
import PetsList from "./containers/My pets/petsList";
import MyPets from "./containers/My pets/myPets";
import NewPet from "./containers/My pets/pets";
import MyBookings from "./containers/My bookings/myBookings";

function App() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const isAdmin = localStorage.getItem("isAdmin");
  return (
    <Router>
      <div>
        <Navbar isLoggedIn={isLoggedIn} isAdmin={isAdmin} />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/bookings" element={<Bookings />} />
          <Route exact path="/newBooking" element={<NewBooking />} />
          <Route exact path="/mypets" element={<MyPets />} />
          <Route exact path="/myBookings" element={<MyBookings />} />
          <Route exact path="/newpet" element={<NewPet />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
