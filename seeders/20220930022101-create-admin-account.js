'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('dokter', [{
      nama: 'Admin',
      email: 'adminidaas@mail.com',
      password: await bcrypt.hash("adminidaas1234", 10),
      jenis_dokter: '-',
      jenis_spesialis_id: 1,
      lokasi_praktek: '-',
      klinik_id: 1,
      rumah_sakit_id: 1,
      poliklinik_id: 1,
      puskesmas_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('dokter', null, {});
  }
};
