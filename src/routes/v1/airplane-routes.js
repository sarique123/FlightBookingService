const express = require('express');

const { AirplaneController } = require('../../controllers');
const { AirplaneMiddleWares } = require('../../middlewares');


const router = express.Router();

//  /api/v1/airplanes/  POST
router.post('/',
    AirplaneMiddleWares.validateCreateRequest,
    AirplaneController.createAirplane);

//  /api/v1/airplanes/  GET
router.get('/',
    AirplaneController.getAirplanes);

//  /api/v1/airplanes/:id  GET
router.get('/:id',
    AirplaneController.getAirplane);

//  /api/v1/airplanes/:id  GET
router.delete('/:id',
    AirplaneController.deleteAirplane);

//  /api/v1/airplanes/:id  PATCH
router.patch('/:id',
    AirplaneController.updateAirplane);

module.exports = router;