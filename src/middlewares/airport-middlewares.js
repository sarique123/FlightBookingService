const {StatusCodes} = require('http-status-codes');
const {ErrorResponse} = require('../utils/common');
const AppError = require('../utils/errors/app-error');

function validateCreateRequest(req,res,next){
    if(!req.body.name){
        ErrorResponse.message = "Something went wrong while creating an airport";
        ErrorResponse.error = new AppError(["Airport name not found in the incoming request in the correct manner"],StatusCodes.BAD_REQUEST);
        
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json(ErrorResponse);
    } 

    if(!req.body.code){
        ErrorResponse.message = "Something went wrong while creating an airport";
        ErrorResponse.error = new AppError(["Airport code not found in the incoming request in the correct manner"],StatusCodes.BAD_REQUEST);
        
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json(ErrorResponse);
    } 

    if(!req.body.cityId){
        ErrorResponse.message = "Something went wrong while creating an airport";
        ErrorResponse.error = new AppError(["CityId not found in the incoming request in the correct manner"],StatusCodes.BAD_REQUEST);
        
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json(ErrorResponse);
    } 
    next();
}


function validateUpdateRequest(req,res,next){
    const updates = req.body;
    if (Object.keys(updates).length === 0) {
        ErrorResponse.message = 'Something went wrong while updating the airport';
        ErrorResponse.error = new AppError(['No field is provided for update'],StatusCodes.BAD_REQUEST);

        return res.status(StatusCodes.BAD_REQUEST)
        .json(ErrorResponse);
    }
    next();
}

module.exports = {
    validateCreateRequest,
    validateUpdateRequest
};