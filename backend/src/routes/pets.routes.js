const express = require('express')
const router = express.Router()
const petsController = require('../controllers/pets.controller');

// Retrieve all pets
router.get('/', petsController.findAll);

// Create a new pet
router.post('/', petsController.create);

// Retrieve a single pets with id
router.get('/user/:id', petsController.findByUserId)

// Retrieve a single pets with id
router.get('/:id', petsController.findById);

// Update a pets with id
router.put('/:id', petsController.update);

// Delete a pet with id
router.delete('/:id', petsController.delete);

module.exports = router