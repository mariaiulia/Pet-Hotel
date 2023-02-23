'pet strict';
var dbConn = require('../../config/db.config');

//Users object create
var Pet = function (pet) {
    this.name= pet.name;
    this.type =pet.type;
    this.breed =pet.breed;
    this.size =pet.size;
    this.updatedAt = pet.updatedAt;
    this.createdAt = pet.createdAt;
    this.id_user = pet.id_user;
};

Pet.create = function (newPet, result) {
    dbConn.query("INSERT INTO pets set ?", newPet, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

Pet.findById = function (id, result) {
    dbConn.query("Select * from pets where id = ? ", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};

Pet.findByUserId = function (id, result) {
    dbConn.query("Select * from pets where id_user = ? ", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};

Pet.findAll = function (result) {
    dbConn.query("Select * from pets", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('Pets : ', res);
            result(null, res);
        }
    });
};
Pet.update = function (id, pet, result) {
    dbConn.query("UPDATE pets SET name=?,type=?,breed=?,size=?,updatedAt=?,createdAt=?, id_user=? WHERE id = ?", [pet.name, pet.type, pet.breed, pet.size, pet.updatedAt, pet.createdAt, pet.id_user, id],
        function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(null, err);
            } else {
                result(null, res);
            }
        });
};
Pet.delete = function (id, result) {
    dbConn.query("DELETE FROM pets WHERE id = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};

module.exports = Pet;