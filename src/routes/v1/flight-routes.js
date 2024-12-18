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

    
//  /api/v1/flights/:id  GET
router.get('/:id',
    FlightController.getFlight);

        
//  /api/v1/flights/:id/seats  PATCH
router.patch('/:flightId/seats',
    FlightMiddleWares.validateUpdateSeatsRequest,
    FlightController.updateSeats);

module.exports = router;