const express = require('express');

const { AirportController } = require('../../controllers');
const { AirportMiddleWares } = require('../../middlewares');


const router = express.Router();

//  /api/v1/airports/  POST
router.post('/',
    AirportMiddleWares.validateCreateRequest,
    AirportController.createAirport);

//  /api/v1/airports/  GET
router.get('/',
    AirportController.getAirports);

//  /api/v1/airports/:id  GET
router.get('/:id',
    AirportController.getAirport);

//  /api/v1/airports/:id  DELETE
router.delete('/:id',
    AirportController.deleteAirport);

//  /api/v1/airports/:id  PATCH
router.patch('/:id',
    AirportMiddleWares.validateUpdateRequest,
    AirportController.updateAirport);

module.exports = router;