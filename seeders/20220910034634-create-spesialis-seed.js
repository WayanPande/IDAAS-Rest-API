'use strict';

const dataImport = require('../helper/dataSpesialis');

module.exports = {
  async up(queryInterface, Sequelize) {
    let data = [];

    for (let i = 0; i < dataImport.length; i++) {
      data.push({
        name: dataImport[i]
      });
    }

    await queryInterface.bulkInsert('spesialis', data, {});
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('spesialis', null, {});

  }
};
