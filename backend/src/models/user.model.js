"user strict";
var dbConn = require("../../config/db.config");

//Users object create
var User = function (user) {
  this.firstName = user.firstName;
  this.lastName = user.lastName;
  this.phoneNumber = user.phoneNumber;
  this.email = user.email;
  this.updatedAt = user.updatedAt;
  this.createdAt = user.createdAt;
  this.id_role = user.id_role;
  this.password = user.password;
};

User.register = function (req, result) {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const password = req.body.password;
  const phoneNumber = req.body.phoneNumber;
  const idRole = req.body.id_role;

  dbConn.query(
    "INSERT INTO users (firstName, lastName, email, password, phoneNumber, id_role) VALUES (?,?,?,?,?,?)",
    [firstName, lastName, email, password, phoneNumber, idRole],
    (err, res) => {
      if (err) {
        result({ error: "Email already exists!" }, null);
      } else {
        result(null, res);
      }
    }
  );
};

User.login = function (req, result) {
  const email = req.body.email;
  const password = req.body.password;

  dbConn.query(
    "SELECT * FROM users WHERE email=? AND password =? LIMIT 1",
    [email, password],
    (err, res) => {
      if (err) {
        result(err, null);
      } else {
        result(null, res[0]);
      }
    }
  );
};

User.create = function (newUser, result) {
  dbConn.query("INSERT INTO users set ?", newUser, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

User.findById = function (id, result) {
  dbConn.query("Select * from users where id = ? ", id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

User.findAll = function (result) {
  dbConn.query("Select * from users", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("Users : ", res);
      result(null, res);
    }
  });
};
User.update = function (id, user, result) {
  dbConn.query(
    "UPDATE users SET firstName=?,lastName=?,phoneNumber=?,email=?,updatedAt=?,createdAt=?, id_role=?, password=? WHERE id = ?",
    [
      user.firstName,
      user.lastName,
      user.phoneNumber,
      user.email,
      user.updatedAt,
      user.createdAt,
      user.id_role,
      user.password,
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
User.delete = function (id, result) {
  dbConn.query("DELETE FROM users WHERE id = ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = User;
