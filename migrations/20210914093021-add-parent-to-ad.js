"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Categories", "CategoryId", {
      type: Sequelize.INTEGER,
    });
    await queryInterface.addConstraint("Categories", {
      fields: ["CategoryId"],
      type: "foreign key",
      name: "CategoryId_fk",
      references: {
        table: "Categories",
        field: "id",
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Categories", "CategoryId");
  },
};
