'use strict';

const dataImport = require('../helper/dataRumahSakit');

module.exports = {
  async up(queryInterface, Sequelize) {

    let data = [];

    for (let i = 0; i < dataImport.length; i++) {
      data.push({
        name: dataImport[i]
      });
    }

    await queryInterface.bulkInsert('rumah_sakit', data, {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('rumah_sakit', null, {});

  }
};
