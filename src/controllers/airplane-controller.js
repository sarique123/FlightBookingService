const {StatusCodes} = require('http-status-codes');
const { AirplaneService } = require('../services');
const { SuccessResponse,ErrorResponse } = require('../utils/common');

/*
POST : /airplanes
req-body : {modelNumber: 'airbus320',capacity:'300'}
*/

async function createAirplane(req,res) {
    try {
        const airplane = await AirplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        });

        SuccessResponse.data = airplane;
        SuccessResponse.message = "Successfully created an airplane";

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
GET : /airplanes
req-body : {}
*/

async function getAirplanes(req,res) {
    try {
        const airplanes = await AirplaneService.getAirplanes();

        SuccessResponse.data = airplanes;
        SuccessResponse.message = "Successfully fetch all the airplanes";

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
GET : /airplanes/:id
req-body : {}
*/

async function getAirplane(req,res) {
    try {
        const airplane = await AirplaneService.getAirplane(req.params.id);

        SuccessResponse.data = airplane;
        SuccessResponse.message = "Successfully fetch the airplane";

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
DELETE : /airplanes/:id
req-body : {}
*/

async function deleteAirplane(req,res) {
    try {
        const airplane = await AirplaneService.deleteAirplane(req.params.id);

        SuccessResponse.data = airplane;
        SuccessResponse.message = "Successfully deleted the data of the airplane";

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
PATCH : /airplanes/:id
req-body : {}
*/

async function updateAirplane(req,res) {
    try {
        const airplane = await AirplaneService.updateAirplane({
            capacity: req.body.capacity
        },req.params.id);

        SuccessResponse.data = airplane;
        SuccessResponse.message = "Successfully updated the data of the airplane";

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
    createAirplane,
    getAirplanes,
    getAirplane,
    deleteAirplane,
    updateAirplane
}