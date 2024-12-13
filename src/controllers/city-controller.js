const {StatusCodes} = require('http-status-codes');
const { CityService } = require('../services');
const { SuccessResponse,ErrorResponse } = require('../utils/common');

/*
POST : /cities
req-body : {name: 'Bengaluru'}
*/

async function createCity(req,res) {
    try {
        const city = await CityService.createCity({
            name: req.body.name
        });

        SuccessResponse.data = city;
        SuccessResponse.message = "Successfully created a city";

        return res
        .status(StatusCodes.CREATED)
        .json(SuccessResponse);
    } catch (error) {
        console.log('Inside controller error ' + error);

        ErrorResponse.error = error;
        return res
        .status(error.statusCode)
        .json(ErrorResponse);
    } 
}


/*
GET : /cities
req-body : {}
*/

async function getCities(req,res) {
    try {
        const city = await CityService.getCities();

        SuccessResponse.data = city;
        SuccessResponse.message = "Successfully fetched all the cities";

        return res
        .status(StatusCodes.CREATED)
        .json(SuccessResponse);
    } catch (error) {
        console.log('Inside controller error ' + error);

        ErrorResponse.error = error;
        return res
        .status(error.statusCode)
        .json(ErrorResponse);
    } 
}


/*
GET : /cities/:id
req-body : {}
*/

async function getCity(req,res) {
    try {
        const city = await CityService.getCity(req.params.id);

        SuccessResponse.data = city;
        SuccessResponse.message = "Successfully fetched the city";

        return res
        .status(StatusCodes.CREATED)
        .json(SuccessResponse);
    } catch (error) {
        console.log('Inside controller error ' + error);

        ErrorResponse.error = error;
        return res
        .status(error.statusCode)
        .json(ErrorResponse);
    } 
}


/*
GET : /cities/:id
req-body : {}
*/

async function deleteCity(req,res) {
    try {
        const city = await CityService.deleteCity(req.params.id);

        SuccessResponse.data = city;
        SuccessResponse.message = "Successfully deleted the city";

        return res
        .status(StatusCodes.CREATED)
        .json(SuccessResponse);
    } catch (error) {
        console.log('Inside controller error ' + error);

        ErrorResponse.error = error;
        return res
        .status(error.statusCode)
        .json(ErrorResponse);
    } 
}


/*
GET : /cities/:id
req-body : {name: 'Kolkata'}
*/

async function updateCity(req,res) {
    try {
        const city = await CityService.updateCity({
            name: req.body.name
        },req.params.id);

        SuccessResponse.data = city;
        SuccessResponse.message = "Successfully updated the city";

        return res
        .status(StatusCodes.CREATED)
        .json(SuccessResponse);
    } catch (error) {
        console.log('Inside controller error ' + error);

        ErrorResponse.error = error;
        return res
        .status(error.statusCode)
        .json(ErrorResponse);
    } 
}

module.exports = {
    createCity,
    getCities,
    getCity,
    deleteCity,
    updateCity
}