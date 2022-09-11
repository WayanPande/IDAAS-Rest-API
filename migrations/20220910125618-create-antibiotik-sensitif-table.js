'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('antibiotik_sensitif', {
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
      id_antibiotik: {
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

    await queryInterface.dropTable('antibiotik_sensitif');

  }
};
