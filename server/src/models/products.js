"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.belongsTo(models.User, {
        foreignKey: "user_id",
        targetKey: "id",
        as: "userData",
      });
      Product.belongsTo(models.Categories, {
        foreignKey: "category_id",
        targetKey: "id",
        as: "categoryData",
      });
    }
  }
  Product.init(
    {
      nameProduct: DataTypes.STRING,
      lastName: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
      email: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
