const { CityRepository } = require('../repositories');
const {StatusCodes} = require('http-status-codes');
const AppError = require('../utils/errors/app-error');

const cityRepository = new CityRepository();

async function createCity(data){
    try {
        const city = await cityRepository.create(data);
        return city;
    } catch (error) {
        console.log(error);
        if(error.name == 'SequelizeValidationError' || error.name =='SequelizeUniqueConstraintError'){
            let explanation = [];
            error.errors.forEach((e)=>{
                explanation.push(e.message);
            })
            throw new AppError(explanation,StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Cannot create a new City Object',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getCities(){
    try {
        const cities = await cityRepository.getAll();
        return cities;
    } catch (error) {
        throw new AppError('Cannot fetch the data of all the airplanes',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getCity(id){
    try {
        const city = await cityRepository.get(id);
        return city;
    } catch (error) {
        if(error.statusCode === StatusCodes.NOT_FOUND){
            throw new AppError('The city you requested is not found',error.statusCode);
        }
        throw new AppError('Cannot fetch the data of the city',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function deleteCity(id){
    try {
        const city = await cityRepository.destroy(id);
        return city;
    } catch (error) {
        if(error.statusCode === StatusCodes.NOT_FOUND){
            throw new AppError('The city you requested is not found',error.statusCode);
        }
        throw new AppError('Cannot delete the data of the city',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function updateCity(data,id){
    try {
        const city = await cityRepository.update(data,id);
        return city;
    } catch (error) {
        if(error.statusCode === StatusCodes.NOT_FOUND){
            throw new AppError('The city you requested is not found',error.statusCode);
        }
        throw new AppError('Cannot update the data of the city',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createCity,
    getCities,
    getCity,
    deleteCity,
    updateCity
}