const {StatusCodes} = require('http-status-codes');
const {ErrorResponse} = require('../utils/common');
const AppError = require('../utils/errors/app-error');

function validateCreateRequest(req,res,next){
    if(!req.body.modelNumber){
        ErrorResponse.message = "Something went wrong while creating an airplane";
        ErrorResponse.error = new AppError(["Model Number not found in the incoming request in the correct manner"],StatusCodes.BAD_REQUEST);
        
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json(ErrorResponse);
    } 
    next();
}


function validateUpdateRequest(req,res,next){
    const updates = req.body;
    if (Object.keys(updates).length === 0) {
        ErrorResponse.message = 'Something went wrong while updating the airplane';
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