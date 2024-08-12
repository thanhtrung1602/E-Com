"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cart.belongsTo(models.User, {
        foreignKey: "user_id",
        targetKey: "id",
        as: "userData",
      });

      Cart.belongsTo(models.Product, {
        foreignKey: "product_id",
        targetKey: "id",
        as: "productData",
      });
    }
  }
  Cart.init(
    {
      productId: DataTypes.STRING,
      userId: DataTypes.STRING,
      quantity: DataTypes.STRING,
      total: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Cart",
    }
  );
  return Cart;
};
