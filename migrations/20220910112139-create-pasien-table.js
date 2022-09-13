'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pasien', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tanggal_lahir: {
        type: Sequelize.DATE,
      },
      no_hp: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      gender: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      alamat: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      komorbid: {
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
      deletedAt: {
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.dropTable('pasien');

  }
};
