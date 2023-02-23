"use strict";

const Booking = require("../models/booking.model");

// GET
exports.findAll = function (req, res) {
  Booking.findAll(function (err, booking) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", booking);
    res.send(booking);
  });
};

exports.findById = function (req, res) {
  Booking.findById(req.params.id, function (err, booking) {
    if (err) res.send(err);
    res.json(booking);
  });
};

exports.findAllByUser = function (req, res) {
  Booking.findAllByUserId(req.params.id, function (err, booking) {
    if (err) res.send(err);
    res.json(booking);
  });
};

// POST
exports.create = function (req, res) {
  const new_booking = new Booking(req.body);

  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    Booking.create(new_booking, function (err, booking) {
      if (err) res.send(err);
      res.json({
        error: false,
        message: "Booking added successfully!",
        data: booking,
      });
    });
  }
};

// PUT/PATCH
exports.update = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    Booking.update(
      req.params.id,
      new Booking(req.body),
      function (err, booking) {
        if (err) res.send(err);
        res.json({ error: false, message: "Booking successfully updated" });
      }
    );
  }
};

// DELETE
exports.delete = function (req, res) {
  Booking.delete(req.params.id, function (err, booking) {
    if (err) res.send(err);
    res.json({ error: false, message: "Booking successfully deleted" });
  });
};
