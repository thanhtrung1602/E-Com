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
        foreignKey: "category_id",
        targetKey: "id",
        as: "categoryData",
      });
      Product.belongsTo(models.User, {
        foreignKey: "manufacturer_id",
        targetKey: "id",
        as: "manufacturerData",
      });
    }
  }
  Product.init(
    {
      name: DataTypes.STRING,
      price: DataTypes.STRING,
      promotion: DataTypes.STRING,
      img: DataTypes.STRING,
      stock: DataTypes.STRING,
      visible: DataTypes.STRING,
      visible: DataTypes.STRING,
      hot: DataTypes.STRING,
      date: DataTypes.STRING,

    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
