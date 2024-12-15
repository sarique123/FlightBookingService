const express = require('express');

const { FlightController } = require('../../controllers');
const { FlightMiddleWares } = require('../../middlewares');


const router = express.Router();

//  /api/v1/flights/  POST
router.post('/',
    FlightMiddleWares.validateCreateRequest,
    FlightController.createFlight);

//  /api/v1/flights?trips=  GET
router.get('/',
    FlightController.getAllFlights);

module.exports = router;