const {StatusCodes} = require('http-status-codes');
const { AirportService } = require('../services');
const { SuccessResponse,ErrorResponse } = require('../utils/common');

/*
POST : /airports
req-body : {name: 'Chaudhari Charan Singh International Airport', code: 'CCSA', address: 'Ahmamau', cityId : 5}
*/

async function createAirport(req,res) {
    try {
        const airport = await AirportService.createAirport({
            name: req.body.name,
            code: req.body.code,
            address: req.body.address,
            cityId: req.body.cityId
        });

        SuccessResponse.data = airport;
        SuccessResponse.message = "Successfully created an airport";

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
GET : /airports
req-body : {}
*/

async function getAirports(req,res) {
    try {
        const airports = await AirportService.getAirports();

        SuccessResponse.data = airports;
        SuccessResponse.message = "Successfully fetch all the airports";

        return res
        .status(StatusCodes.OK)
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
GET : /airports/:id
req-body : {}
*/

async function getAirport(req,res) {
    try {
        const airport = await AirportService.getAirport(req.params.id);

        SuccessResponse.data = airport;
        SuccessResponse.message = "Successfully fetch the airport";

        return res
        .status(StatusCodes.OK)
        .json(SuccessResponse);
    } catch (error) {

        ErrorResponse.error = error;
        return res
        .status(error.statusCode)
        .json(ErrorResponse);
    } 
}


/*
DELETE : /airports/:id
req-body : {}
*/

async function deleteAirport(req,res) {
    try {
        const airport = await AirportService.deleteAirport(req.params.id);

        SuccessResponse.data = airport;
        SuccessResponse.message = "Successfully deleted the data of the airport";

        return res
        .status(StatusCodes.OK)
        .json(SuccessResponse);
    } catch (error) {
        
        ErrorResponse.error = error;
        return res
        .status(error.statusCode)
        .json(ErrorResponse);
    } 
}


/*
PATCH : /airports/:id
req-body : {}
*/

async function updateAirport(req,res) {
    try {
        const updates = req.body;
        const airport = await AirportService.updateAirport(updates,req.params.id);

        SuccessResponse.data = airport;
        SuccessResponse.message = "Successfully updated the data of the airport";

        return res
        .status(StatusCodes.OK)
        .json(SuccessResponse);
    } catch (error) {
        
        ErrorResponse.error = error;
        return res
        .status(error.statusCode)
        .json(ErrorResponse);
    } 
}

module.exports = {
    createAirport,
    getAirports,
    getAirport,
    deleteAirport,
    updateAirport
}