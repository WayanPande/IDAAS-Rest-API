'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pemberian_antibiotik', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      id_riwayat_antibiotik: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      id_antibiotik: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      jalur_pemberian: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      dosis: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      lama_pemberian: {
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

    await queryInterface.dropTable('pemberian_antibiotik');

  }
};
