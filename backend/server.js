const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// create express app
const app = express();

// Setup server port
const port = process.env.PORT || 5000;
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// cors
app.use(
  cors({
    origin: "*",
  })
);

// define a root route
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Require employee routes
const bookingRoutes = require("./src/routes/booking.routes");
const userRoutes = require("./src/routes/user.routes");
const petsRoutes = require("./src/routes/pets.routes");
const dbConn = require("./config/db.config");

// using as middleware
app.use("/api/v1/booking", bookingRoutes);
app.use("/user", userRoutes);
app.use("/pets", petsRoutes);

// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
