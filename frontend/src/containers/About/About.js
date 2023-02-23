import React from "react";
import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import style from "./About.css";
import { roomsData } from "./About.constants.js";

const About = () => {
  return (
    <div
      style={{
        backgroundColor: "#D3D3D3",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: 50,
          textAlign: "center",
        }}
      >
        <Typography variant="h2">Welcome to pet Hotel</Typography>
      </div>
      <div style={{ padding: 80 }}>
        <Typography style={{ textDecoration: "italic" }} variant="h4">
          Welcome to our website! We are delighted to take care of your animals
          and treat them as well as possible. To do this, we offer you the
          following types of rooms to choose from:
        </Typography>
      </div>
      <div style={{ padding: 40 }}>
        <Typography variant="h3">Our rooms</Typography>
      </div>
      <div className="roomsContainer">
        {roomsData.map((room) => (
          <div style={{ padding: 20 }}>
            <Card>
              <CardMedia
                component="img"
                height="250"
                image={room.image}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {room.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {room.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  onClick={() => console.log(room.buttonLink)}
                  size="small"
                >
                  {room.buttonText}
                </Button>
              </CardActions>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
