const {StatusCodes} = require('http-status-codes');
const {ErrorResponse} = require('../utils/common');
const AppError = require('../utils/errors/app-error');
const {compareTime} = require('../utils/helpers/date-time-helpers')

function validateCreateRequest(req,res,next){
    if(!req.body.flightNumber){
        ErrorResponse.message = "Something went wrong while creating a flight";
        ErrorResponse.error = new AppError(["Flight Number not found in the incoming request in the correct manner"],StatusCodes.BAD_REQUEST);
        
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json(ErrorResponse);
    } 

    if(!req.body.airplaneId){
        ErrorResponse.message = "Something went wrong while creating a flight";
        ErrorResponse.error = new AppError(["Flight's airplaneId not found in the incoming request in the correct manner"],StatusCodes.BAD_REQUEST);
        
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json(ErrorResponse);
    } 

    if(!req.body.departureAirportId){
        ErrorResponse.message = "Something went wrong while creating a flight";
        ErrorResponse.error = new AppError(["Flight's departureAirportId not found in the incoming request in the correct manner"],StatusCodes.BAD_REQUEST);
        
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json(ErrorResponse);
    } 

    if(!req.body.arrivalAirportId){
        ErrorResponse.message = "Something went wrong while creating a flight";
        ErrorResponse.error = new AppError(["Flight's arrivalAirportId not found in the incoming request in the correct manner"],StatusCodes.BAD_REQUEST);
        
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json(ErrorResponse);
    } 

    if(!req.body.departureTime){
        ErrorResponse.message = "Something went wrong while creating a flight";
        ErrorResponse.error = new AppError(["Flight's departureTime not found in the incoming request in the correct manner"],StatusCodes.BAD_REQUEST);
        
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json(ErrorResponse);
    }

    if(!req.body.arrivalTime){
        ErrorResponse.message = "Something went wrong while creating a flight";
        ErrorResponse.error = new AppError(["Flight's arrivalTime not found in the incoming request in the correct manner"],StatusCodes.BAD_REQUEST);
        
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json(ErrorResponse);
    }

    if(!req.body.price){
        ErrorResponse.message = "Something went wrong while creating a flight";
        ErrorResponse.error = new AppError(["Flight's price not found in the incoming request in the correct manner"],StatusCodes.BAD_REQUEST);
        
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json(ErrorResponse);
    }

    if(!req.body.totalSeats){
        ErrorResponse.message = "Something went wrong while creating a flight";
        ErrorResponse.error = new AppError(["Flight's totalSeats not found in the incoming request in the correct manner"],StatusCodes.BAD_REQUEST);
        
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json(ErrorResponse);
    }

    if(!compareTime(req.body.departureTime,req.body.arrivalTime)){
        ErrorResponse.message = "Something went wrong while creating a flight";
        ErrorResponse.error = new AppError(["Arrival time is not before the departure time"],StatusCodes.BAD_REQUEST);
        
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json(ErrorResponse);
    }
    next();
}


function validateUpdateSeatsRequest(req,res,next){
    if(!req.body.seats){
        ErrorResponse.message = "Something went wrong while updating a flight";
        ErrorResponse.error = new AppError(["Seat is not provided in the incoming request in the correct manner"],StatusCodes.BAD_REQUEST);
        
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json(ErrorResponse);
    }
    next();
}


module.exports = {
    validateCreateRequest,
    validateUpdateSeatsRequest
};