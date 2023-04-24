const express = require('express');
const router = express.Router();
const controller = require('../controllers/trips');

// Fetch one or all trips
router.get('/:tripCode?', controller.fetchTrips);

// Create a new trip
router.post('/', controller.addTrip);

//Update trip
router.put('/:tripCode', controller.updateTrip);

// Delete Trip
router.delete('/:tripCode', controller.deleteTrip);

module.exports = router;