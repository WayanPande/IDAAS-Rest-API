'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('visitasi', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      pasien_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      dx_sementara: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      dx_definitif: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      jenis_perawatan: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      lama_dirawat: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      tempat_praktek: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ruang_rawat: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      hasil_bakteri: {
        type: Sequelize.STRING,
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

    await queryInterface.dropTable('visitasi');

  }
};
