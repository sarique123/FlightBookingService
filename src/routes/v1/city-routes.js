const express = require('express');

const { CityController } = require('../../controllers');
const { CityMiddleWares } = require('../../middlewares');


const router = express.Router();

//  /api/v1/cities/  POST
router.post('/',
    CityMiddleWares.validateCreateRequest,
    CityController.createCity);

//  /api/v1/cities/  GET
router.get('/',
    CityController.getCities);

//  /api/v1/cities/:id  GET
router.get('/:id',
    CityController.getCity);

//  /api/v1/cities/:id  DELETE
router.delete('/:id',
    CityController.deleteCity);

//  /api/v1/cities/:id  PATCH
router.patch('/:id',
    CityController.updateCity);

module.exports = router;