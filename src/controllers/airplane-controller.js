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

module.exports = {
    createAirplane
}