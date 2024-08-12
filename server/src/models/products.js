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
      Product.belongsTo(models.Categories, {
        foreignKey: "categoryId",
        targetKey: "id",
        as: "categoryData",
      });
      Product.belongsTo(models.User, {
        foreignKey: "manufacturerId",
        targetKey: "id",
        as: "manufacturerData",
      });
    }
  }
  Product.init(
    {
      categoryId: DataTypes.INTEGER,
      manufacturerId: DataTypes.INTEGER,
      name: DataTypes.STRING,
      price: DataTypes.INTEGER,
      promotion: DataTypes.INTEGER,
      img: DataTypes.STRING,
      stock: DataTypes.INTEGER,
      visible: DataTypes.STRING,
      hot: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
