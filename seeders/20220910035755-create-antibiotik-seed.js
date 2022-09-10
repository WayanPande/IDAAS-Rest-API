'use strict';

const dataImport = require('../helper/dataAntibiotik');

module.exports = {
  async up(queryInterface, Sequelize) {
    let data = [];

    for (let i = 0; i < dataImport.length; i++) {
      data.push({
        name: dataImport[i]
      });
    }

    await queryInterface.bulkInsert('antibiotik', data, {});
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('antibiotik', null, {});

  }
};
