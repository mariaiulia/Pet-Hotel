'use strict';

const Pet = require('../models/pets.model');

// GET
exports.findAll = function (req, res) {
    Pet.findAll(function (err, pet) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', pet);
        res.send(pet);
    });
};

exports.findById = function (req, res) {
    Pet.findById(req.params.id, function (err, pet) {
        if (err)
            res.send(err);
        res.json(pet);
    });
};

exports.findByUserId = function (req, res) {
    Pet.findByUserId(req.params.id, function (err, pet) {
        if (err)
            res.send(err);
        res.json(pet);
    });
};


// POST
exports.create = function (req, res) {
    const new_pet = new Pet(req.body);

    //handles null error 
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        Pet.create(new_pet, function (err, pet) {
            if (err)
                res.send(err);
            res.json({ error: false, message: "Pet added successfully!", data: pet });
        });
    }
};

// PUT/PATCH
exports.update = function (req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        Pet.update(req.params.id, new Pet(req.body), function (err, pet) {
            if (err)
                res.send(err);
            res.json({ error: false, message: 'Pet successfully updated' });
        });
    }

};

// DELETE
exports.delete = function (req, res) {
    Pet.delete(req.params.id, function (err, pet) {
        if (err)
            res.send(err);
        res.json({ error: false, message: 'Pet successfully deleted' });
    });
};