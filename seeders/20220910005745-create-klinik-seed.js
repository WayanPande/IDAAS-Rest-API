'use strict';

const dataImport = require('../helper/dataKlinik');

module.exports = {
  async up(queryInterface, Sequelize) {

    let data = [];

    for (let i = 0; i < dataImport.length; i++) {
      data.push({
        name: dataImport[i],
      });
    }

    await queryInterface.bulkInsert('klinik', data, {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('klinik', null, {});

  }
};
