'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = [
      {
        name: "Storage Surabaya",
        address: "jl pucang anom",
        capacity: 500,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: "Storage Bali",
        address: "jl bratang jaya",
        capacity: 700,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: "Storage Semarang",
        address: "jl kemanggisan",
        capacity: 200,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: "Storage Balikpapan",
        address: "jl agung raya",
        capacity: 450,
        createdAt: new Date,
        updatedAt: new Date
      }
    ]
    return queryInterface.bulkInsert('Storages', data, {});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Storages', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
