'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('spesimen', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      id_visitasi: {
        type: Sequelize.INTEGER,
      },
      name: {
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

    await queryInterface.dropTable('spesimen');

  }
};
