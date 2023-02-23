import React from "react";
import "./pets.css";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import Autocomplete from "@mui/material/Autocomplete";
import { set } from "date-fns";

const NewPet = () => {
  const axios = require("axios");
  const [name, setName] = useState("");
  const [checkedSize, setCheckedSize] = useState("");
  const [breed, setBreed] = useState(0);
  const [checkedType, setCheckedType] = useState(0);
  const isEnabled =
    name.length > 0 && checkedSize > 0 && checkedType > 0 && breed.length > 0;

  const typeOption = [
    { label: "Dog", value: 1 },
    { label: "Cat", value: 2 },
  ];
  const sizeOption = [
    { label: "Small", value: 1 },
    { label: "Medium", value: 2 },
    { label: "Big", value: 3 },
  ];
  const handleChangeType = (event, value) => {
    console.log(value);
    setCheckedType(value.value);
  };

  const handleChangeSize = (event, value) => {
    console.log(value);
    setCheckedSize(value.value);
  };
  const newPet = () => {
    const headers = {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*",
    };
    axios
      .post("http://localhost:5000/pets", {
        id_role: 2,
        id_user: localStorage.getItem("user_id"),
        name: name,
        size: checkedSize,
        breed: breed,
        type: checkedType,
      })
      .then((response) => {
        console.log(response);
      });
  };
  return (
    <div>
      <div></div>
      <div>
        <form onSubmit={(e) => e.preventDefault()}>
          <br></br>
          <TextField
            style={{ paddingBottom: 10 }}
            type="Name"
            name="Name"
            placeholder="Name"
            required
            onChange={(e) => setName(e.target.value)}
            id="outlined-basic"
            label="Name"
            variant="outlined"
          ></TextField>
          <br></br>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            onChange={handleChangeType}
            options={typeOption}
            sx={{ width: 330 }}
            renderInput={(params) => <TextField {...params} label="Type" />}
          />
          <br></br>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            onChange={handleChangeSize}
            options={sizeOption}
            sx={{ width: 330 }}
            renderInput={(params) => <TextField {...params} label="Size" />}
          />
          <br></br>
          <TextField
            style={{ paddingBottom: 10 }}
            type="Breed"
            name="Breed"
            placeholder="Breed"
            required
            onChange={(e) => setBreed(e.target.value)}
            id="outlined-basic"
            label="Breed"
            variant="outlined"
          ></TextField>
          <br></br>
          <Button
            disabled={!isEnabled}
            type="button"
            variant="contained"
            onClick={() => newPet()}
          >
            Add my pet!
          </Button>
        </form>
      </div>
    </div>
  );
};

export default NewPet;
