const CrudRepository = require("./crud-repository");
const {Flight,Airplane,Airport,City} = require('../models');
const db = require('../models');
const {addRowLockOnFlights} = require('./queries')

class FlightRepository extends CrudRepository{
    constructor(){
        super(Flight);
    }

    async getAllFlights(filter,sort){
        const response = await Flight.findAll({
            include: [
                {
                    model: Airplane,
                    required: true,
                    as: 'airplaneDetails'
                },
                {
                    model: Airport,
                    required: true,
                    as: 'departureAirport',
                    include: {
                        model: City,
                        required: true
                    }
                },
                {
                    model: Airport,
                    required: true,
                    as: 'arrivalAirport',
                    include: {
                        model: City,
                        required: true
                    }
                },
            ],
            where: filter,
            order: sort,
        });
        return response;
    }

    async updateRemainingSeats(flightId,seats,dec = true){
        
        await db.sequelize.query(addRowLockOnFlights(flightId));
        const flight = await Flight.findByPk(flightId);
        if(parseInt(dec)){
            await flight.decrement('totalSeats',{
                by: seats
            });
        }else{
            await flight.increment('totalSeats',{
                by: seats
            });
        }
        await flight.reload();

        return flight;
    }
}

module.exports = FlightRepository;