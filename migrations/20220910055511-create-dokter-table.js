'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('dokter', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nama: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      jenis_dokter: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      jenis_spesialis_id: {
        type: Sequelize.INTEGER,
      },
      lokasi_praktek: {
        type: Sequelize.TEXT,
      },
      klinik_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      rumah_sakit_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      poliklinik_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      puskesmas_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
    });
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.dropTable('dokter');

  }
};
