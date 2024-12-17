'use strict';

const {
  Model
} = require('sequelize');

const {Enums} = require('../utils/common');

const {ECONOMY,PREMIUM_ECONOMY,BUSINESS,FIRST_CLASS} = Enums.SEAT_TYPE;

module.exports = (sequelize, DataTypes) => {
  class Seat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Airplane,{
        foreignKey: 'airplaneId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Seat.init({
    airplaneId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    row: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    col: {
      type: DataTypes.STRING,
      allowNull: false
    },
    seatType: {
      type: DataTypes.ENUM,
      values: [ECONOMY,PREMIUM_ECONOMY,FIRST_CLASS,BUSINESS],
      defaultValue: ECONOMY,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Seat',
  });
  return Seat;
};