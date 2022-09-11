'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('riwayat_antibiotik', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      id_visitasi: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      kombinasi_antibiotik: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      reaksi_obat: {
        type: Sequelize.TEXT,
      },
      efek_samping: {
        type: Sequelize.TEXT,
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

    await queryInterface.dropTable('riwayat_antibiotik');

  }
};
