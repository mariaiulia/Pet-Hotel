const express = require("express");
const router = express.Router();
const bookingController = require("../controllers/booking.controller");

// Retrieve all bookings
router.get("/", bookingController.findAll);

// Create a new bookings
router.post("/", bookingController.create);

// Retrieve a single bookings with id
router.get("/:id", bookingController.findById);

// Retrieve a single bookings with id
router.get("/user/:id", bookingController.findAllByUser);

// Update a bookings with id
router.put("/:id", bookingController.update);

// Delete a bookings with id
router.delete("/:id", bookingController.delete);

module.exports = router;
