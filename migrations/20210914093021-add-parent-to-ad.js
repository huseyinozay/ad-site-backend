"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Categories", "parent_id", {
      type: Sequelize.INTEGER,
    });
    await queryInterface.addConstraint("Categories", {
      fields: ["parent_id"],
      type: "foreign key",
      name: "parent_id_fk",
      references: {
        table: "Categories",
        field: "id",
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Categories", "parent_id");
  },
};
