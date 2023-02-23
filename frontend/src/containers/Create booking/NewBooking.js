import React, { useEffect, useReducer, useState } from "react";
import "./NewBooking.css";
import { Button, TextField } from "@mui/material";
import DatePicker from "@mui/lab/DatePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Autocomplete from "@mui/material/Autocomplete";
import axios from "axios";
import { set } from "date-fns";
import { useNavigate } from "react-router-dom";

const NewBooking = () => {
  const navigate = useNavigate();
  const axios = require("axios");
  const [myPets, setMyPets] = useState([]);
  const [arrivalTime, setArrivalTime] = useState(null);
  const [departureTime, setDepartureTime] = useState(null);
  const [checkedRoom, setCheckedRoom] = useState(0);
  const [checkedPet, setCheckedPet] = useState(0);
  const [clientNotes, setClientNotes] = useState("");
  const [roomPrice, setRoomPrice] = useState(0);
  const isEnabled =
    arrivalTime && departureTime && checkedRoom > 0 && checkedPet > 0;
  const handleChangeRoom = (event, value) => {
    console.log(value);
    setCheckedRoom(value.value);
    displayPrice(value.value);
  };

  const handleChangePet = (event, value) => {
    console.log(value);
    setCheckedPet(value.value);
  };

  console.log(checkedRoom, "Type of room");
  console.log(checkedPet, "Type of pet");
  const roomOptions = [
    { label: "Indoor Room", value: 1 },
    { label: "Outdoor Room", value: 2 },
    { label: "Webcam Room", value: 3 },
    { label: "Spa Room", value: 4 },
  ];
  console.log(arrivalTime, "arrivalTime");
  console.log(departureTime, "departureTime");
  console.log(checkedRoom, "rooms");
  console.log(clientNotes, "clientNotes");

  const displayPrice = (value) => {
    let firstDate = arrivalTime;
    let secondDate = departureTime;
    let timeDifference = Math.abs(secondDate.getTime() - firstDate.getTime());

    let days = Math.ceil(timeDifference / (1000 * 3600 * 24)) - 1;

    if (value == 1) {
      setRoomPrice(25 * days);
    } else if (value == 2) {
      setRoomPrice(20 * days);
    } else if (value == 3) {
      setRoomPrice(35 * days);
    } else if (value == 4) {
      setRoomPrice(45 * days);
    }
    console.log(displayPrice);
  };
  useEffect(() => {
    axios
      .get(`http://localhost:5000/pets/user/${localStorage.getItem("user_id")}`)
      .then((res) => {
        const myPetsData = res.data;
        var myPetsFilteredData = [];

        myPetsData.forEach((pet) => {
          myPetsFilteredData.push({ label: pet.name, value: pet.id });
        });
        console.log(myPetsFilteredData);
        console.log(myPets);
        setMyPets(myPetsFilteredData);
      });
  }, []);

  const addNewBooking = () => {
    axios
      .post("http://localhost:5000/api/v1/booking", {
        id_role: 2,
        id_user: localStorage.getItem("user_id"),
        arrivalTime: arrivalTime,
        departureTime: departureTime,
        clientNotes: clientNotes,
        id_pet: 1,
        rooms: checkedRoom,
        pets: checkedPet,
        price: roomPrice,
      })
      .then((response) => {
        if (response.data) {
          navigate("/myBookings");
        }
        console.log(response);
      });
  };
  return (
    <div>
      <div></div>
      <div>
        <form onSubmit={(e) => e.preventDefault()}>
          <LocalizationProvider
            style={{ marginBottom: 5 }}
            dateAdapter={AdapterDateFns}
          >
            <DatePicker
              label="Arrival Time"
              value={arrivalTime}
              format="YYYY-MM-DD"
              onChange={(arrivalTime) => {
                setArrivalTime(arrivalTime);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <br></br>
          <LocalizationProvider
            style={{ marginBottom: 5 }}
            dateAdapter={AdapterDateFns}
          >
            <DatePicker
              label="Departure Time"
              value={departureTime}
              format="YYYY-MM-DD"
              onChange={(departureTime) => {
                setDepartureTime(departureTime);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <br></br>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            onChange={handleChangeRoom}
            options={roomOptions}
            sx={{ width: 330 }}
            renderInput={(params) => <TextField {...params} label="rooms" />}
          />
          <br></br>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            onChange={handleChangePet}
            options={myPets}
            sx={{ width: 330 }}
            renderInput={(params) => <TextField {...params} label="Pets" />}
          />

          <br></br>
          <TextField
            style={{ paddingBottom: 10 }}
            type="Client Notes"
            name="Client Notes"
            placeholder="Client Notes..."
            required
            onChange={(e) => setClientNotes(e.target.value)}
            id="outlined-basic"
            label="Client Notes"
            variant="outlined"
          />
          <br></br>
          <TextField
            style={{ paddingBottom: 10 }}
            type="Total Price"
            name="Total Price"
            placeholder="Total Price..."
            required
            id="outlined-basic"
            label="Total Price"
            variant="outlined"
            inputProps={{ readOnly: true }}
            value={roomPrice}
          />
          <Button
            disabled={!isEnabled}
            type="button"
            variant="contained"
            onClick={() => addNewBooking()}
          >
            Book now!
          </Button>
        </form>
      </div>
    </div>
  );
};

export default NewBooking;
