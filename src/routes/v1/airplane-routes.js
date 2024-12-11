const express = require('express');

const { AirplaneController } = require('../../controllers');
const { AirplaneMiddleWares } = require('../../middlewares');


const router = express.Router();

//  /api/v1/airplanes/  POST
router.post('/',
    AirplaneMiddleWares.validateCreateRequest,
    AirplaneController.createAirplane);

module.exports = router;