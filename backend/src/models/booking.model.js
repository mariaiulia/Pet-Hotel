"user strict";
var dbConn = require("../../config/db.config");

//Booking object create
var Booking = function (booking) {
  this.arrivalTime = booking.arrivalTime;
  this.departureTime = booking.departureTime;
  this.clientNotes = booking.clientNotes;
  this.rooms = booking.rooms;
  this.pets = booking.pets;
  this.id_user = booking.id_user;
  this.id_pet = booking.id_pet;
  this.status = booking.status ? booking.status : 1;
  this.price = booking.price;
};

Booking.create = function (newBooking, result) {
  dbConn.query("INSERT INTO bookings set ?", newBooking, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

Booking.findById = function (id, result) {
  dbConn.query("Select * from bookings where id = ? ", id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Booking.findAllByUserId = function (id, result) {
  dbConn.query(
    "Select * from bookings where id_user = ? ",
    id,
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};

Booking.findAll = function (result) {
  dbConn.query("Select * from bookings", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("bookings : ", res);
      result(null, res);
    }
  });
};
Booking.update = function (id, booking, result) {
  dbConn.query(
    "UPDATE bookings SET arrivalTime=?,departureTime=?,clientNotes=?,id_user=?,id_pet=?, status=?, rooms=?, pets=?, price=? WHERE id = ?",
    [
      booking.arrivalTime,
      booking.departureTime,
      booking.clientNotes,
      booking.id_user,
      booking.id_pet,
      booking.status,
      booking.rooms,
      booking.pets,
      booking.price,
      id,
    ],
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};
Booking.delete = function (id, result) {
  dbConn.query("DELETE FROM bookings WHERE id = ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = Booking;
