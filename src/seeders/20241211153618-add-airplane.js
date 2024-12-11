'use strict';
const { Op } = require('sequelize');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Airplanes',[
      {
        modelNumber: "airbus120",
        capacity: 120,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        modelNumber: "airbus320",
        capacity: 320,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]) 
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('Airplanes', {
      where: {
        [Op.or] : [{modelNumber: "airbus120"},{modelNumber: "airbus320"}]
      }
    });
  }
};
