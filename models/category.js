"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Category.hasMany(models.Category);
      models.Category.belongsTo(models.Category);
    }
    // toJSON() {
    //   return { ...this.get(), id: undefined, CategoryId: undefined };
    // }
  }
  Category.init(
    {
      title: DataTypes.STRING,
      is_deleted: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Category",
    }
  );
  return Category;
};
