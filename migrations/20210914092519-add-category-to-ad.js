"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Ads", "category_id", {
      type: Sequelize.INTEGER,
    });
    await queryInterface.addConstraint("Ads", {
      fields: ["category_id"],
      type: "foreign key",
      name: "category_id_fk",
      references: {
        table: "Categories",
        field: "id",
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Ads", "category_id");
  },
};
