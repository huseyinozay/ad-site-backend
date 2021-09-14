"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Ads", "user_id", {
      type: Sequelize.INTEGER,
    });
    await queryInterface.addConstraint("Ads", {
      fields: ["user_id"],
      type: "foreign key",
      name: "user_id_fk",
      references: {
        table: "Users",
        field: "id",
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Ads", "user_id");
  },
};
