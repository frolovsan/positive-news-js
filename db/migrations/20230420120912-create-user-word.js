"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("UserWords", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        references: {
          model: {
            tableName: "Users",
          },
          key: "id",
        },
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      wordId: {
        references: {
          model: {
            tableName: "Words",
          },
          key: "id",
        },
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      createdAt: {
        defaultValue: new Date(),
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        defaultValue: new Date(),
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("UserWords");
  },
};
