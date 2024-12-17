const {StatusCodes} = require('http-status-codes');
const { FlightService } = require('../services');
const { SuccessResponse,ErrorResponse } = require('../utils/common');

/*
POST : /cities
req-body : {
        flightNumber = 'UK 808',
        airplaneId: 1,
        departureAirportId: 'LKO',
        arrivalAirportId: 'BLR',
        departureTime: 2024-12-15 07:30:00,
        arrivalTime: 2024-12-15 09:15:00,
        price: 5000,
        totalSeats: 320,
        boardingGate: '12A'
}
*/

async function createFlight(req,res) {
    try {
        const flight = await FlightService.createFlight({
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            departureTime: req.body.departureTime,
            arrivalTime: req.body.arrivalTime,
            price: req.body.price,
            totalSeats: req.body.totalSeats,
            boardingGate: req.body.boardingGate
        });

        SuccessResponse.data = flight;
        SuccessResponse.message = "Successfully created a flight";

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


/**
 * GET: /flights 
 *
 */

async function getAllFlights(req,res) {
    try {
        const flights = await FlightService.getAllFlights(req.query);
        SuccessResponse.data = flights;
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

/**
 * GET: /flights/:id 
 *
 */

async function getFlight(req,res) {
    try {
        const flight = await FlightService.getFlight(req.params.id);
        SuccessResponse.data = flight;
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


/**
 * GET: /flights/:id 
 * req-body = {
 *    req.body.seats,
 *    req.body.dec
 * }
 */

async function updateSeats(req,res) {
    try {
        
        const flight = await FlightService.updateSeats({
            flightId: req.params.flightId,
            seats: req.body.seats,
            dec: req.body.dec
        });
        
        SuccessResponse.data = flight;
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
    createFlight,
    getAllFlights,
    getFlight,
    updateSeats
}