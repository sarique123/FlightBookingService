const { StatusCodes } = require('http-status-codes');
const { AirportRepository } = require('../repositories');

const AppError = require('../utils/errors/app-error');

const airportRepository = new AirportRepository();

async function createAirport(data) {
    
    try {
        const airport = await airportRepository.create(data);
        return airport;
    } catch (error) {
        console.log(error);
        if(error.name == 'SequelizeValidationError'){
            let explanation = [];
            error.errors.forEach((e)=>{
                explanation.push(e.message);
            })
            throw new AppError(explanation,StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Cannot create a new Airport Object',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAirports(){
    try {
        const airports = await airportRepository.getAll();
        return airports;
    } catch (error) {
        throw new AppError('Cannot fetch the data of all the airports',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAirport(id){
    try {
        const airport = await airportRepository.get(id);
        return airport;
    } catch (error) {
        if(error.statusCode === StatusCodes.NOT_FOUND){
            throw new AppError('The airport you requested is not found',error.statusCode);
        }
        throw new AppError('Cannot fetch the data of the airport',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function deleteAirport(id){
    try {
        const airport = await airportRepository.destroy(id);
        return airport;
    } catch (error) {
        if(error.statusCode === StatusCodes.NOT_FOUND){
            throw new AppError('The airport you requested is not present',error.statusCode);
        }
        throw new AppError('Cannot delete the data of the airport',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}


async function updateAirport(data,id){
    try {
        const airport = await airportRepository.update(data,id);
        return airport;
    } catch (error) {
        if(error.statusCode === StatusCodes.NOT_FOUND){
            throw new AppError('The airport you requested to update is not present',error.statusCode);
        }
        throw new AppError('Cannot update the data of the airport',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}
module.exports = {
    createAirport,
    getAirports,
    getAirport,
    deleteAirport,
    updateAirport
}