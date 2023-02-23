const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

// Retrieve all bookings
router.get("/", userController.findAll);

// Create a new bookings
router.post("/", userController.create);

// Register
router.post("/register", userController.create);

// Login
router.post("/login", userController.login);

// Retrieve a single bookings with id
router.get("/:id", userController.findById);

// Update a bookings with id
router.put("/:id", userController.update);

// Delete a bookings with id
router.delete("/:id", userController.delete);

module.exports = router;
