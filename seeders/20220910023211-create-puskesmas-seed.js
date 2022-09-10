'use strict';

const dataImport = require('../helper/dataPuskesmas');

module.exports = {
  async up(queryInterface, Sequelize) {
    let data = [];

    for (let i = 0; i < dataImport.length; i++) {
      data.push({
        name: dataImport[i]
      });
    }

    await queryInterface.bulkInsert('puskesmas', data, {});
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('puskesmas', null, {});

  }
};
